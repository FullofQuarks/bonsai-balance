using BonsaiBalance.Web.Models;

namespace BonsaiBalance.Web.Utilities
{
    public class FrontAppSettingsBuilder
    {
        private readonly FrontAppSettings _settings;

        public FrontAppSettingsBuilder()
        {
            _settings = new FrontAppSettings();
        }

        public FrontAppSettingsBuilder AddAppSettings(AppSettings appSettings)
        {
            _settings.BonsaiBalanceApi = appSettings.ServiceEndpoints.BonsaiBalanceApi;
            return this;
        }

        public FrontAppSettings Build()
        {
            return _settings;
        }
    }
}
