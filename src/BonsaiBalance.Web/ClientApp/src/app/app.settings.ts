import { APP_INITIALIZER, Inject, Injectable, Provider } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { AsyncSubject } from "rxjs";

export class AppSettings {
  bonsaiBalanceApi!: string;
}

@Injectable()
export class AppSettingsService {
  private _settings!: AppSettings;
  public get settings() : AppSettings{
    return this._settings;
  }
  public set settings(settings: AppSettings){
    this._settings = settings;
  }
}

export const appSettingsInitializer = (
  appSettingsInitializerService: AppSettingsInitializerService,
  appSettingService: AppSettingsService) => {
    return () => {
      appSettingsInitializerService.load();

      return appSettingsInitializerService.current
        .toPromise()
        .then((appSettings: AppSettings)=>{
          appSettingService.settings = appSettings;
        })
    };
  };

  @Injectable()
  export class AppSettingsInitializerService{
    public current = new AsyncSubject<AppSettings>();

    constructor(
      @Inject('BASE_URL') public baseUrl: string,
      private http: HttpClient
    ){}

    load() {
      this.http
        .get<AppSettings>(this.baseUrl+'api/app-settings')
        .subscribe(this.current);
    }
  }

  export let AppSettingsProviders: Provider[] = [
    AppSettingsService,
    AppSettingsInitializerService,
    {
      provide: APP_INITIALIZER,
      useFactory: appSettingsInitializer,
      deps: [AppSettingsService,
        AppSettingsInitializerService],
      multi: true
    }
  ];
