using BonsaiBalance.Api.Interfaces.UseCases;
using BonsaiBalance.Api.Services;
using BonsaiBalance.Api.Services.Interfaces;
using BonsaiBalance.Api.UseCases;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.DependencyInjection.Extensions;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Options;

namespace BonsaiBalance.Api
{
    public class Startup
    {
        public Startup(IConfiguration configuration, IWebHostEnvironment environment)
        {

            Configuration = configuration;
            Environment = environment;
        }

        private IConfiguration Configuration { get; }
        private IWebHostEnvironment Environment { get; }

        public void ConfigureServices(IServiceCollection services)
        {

            // Add database
            services.Configure<BonsaiBalanceDatabaseSettings>(
                Configuration.GetSection("BonsaiBalanceDatabaseSettings"));

            services.TryAddSingleton<IHttpContextAccessor, HttpContextAccessor>();

            // Services
            services.AddScoped<ITransactionsService, TransactionsService>();
            services.AddScoped<IPlaidService, PlaidService>();

            // Use cases
            services.AddTransient<IGetBalanceForUserUseCase, GetBalanceForUserUseCase>();

            services.ConfigureSwaggerGen(options =>
            {
                options.CustomSchemaIds(id => id.FullName);
            });
            services.AddControllers().AddNewtonsoftJson();
            services.AddSwaggerDocument(c => c.DocumentName = "v1");
        }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseHsts();
            }

            app.UseOpenApi();
            app.UseSwaggerUi3(o =>
            {
                o.DocumentPath = "/swagger/v1/swagger.json";
                o.DocumentTitle = "BonsaiBalance API";
            });
            app.UseHttpsRedirection();
            app.UseRouting();
            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
