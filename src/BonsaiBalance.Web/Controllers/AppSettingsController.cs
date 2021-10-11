using BonsaiBalance.Web.Models;
using BonsaiBalance.Web.Utilities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;


namespace ToDoList.Web.Controllers
{
    [Route("api/app-settings")]
    public class AppSettingsController : Controller
    {
        private readonly AppSettings _appSettings;
        private readonly FrontAppSettingsBuilder _frontAppSettingsBuilder;
        public AppSettingsController(IOptions<AppSettings> appSettings, FrontAppSettingsBuilder frontAppSettingsBuilder)
        {
            _frontAppSettingsBuilder = frontAppSettingsBuilder;
            _appSettings = appSettings.Value;
        }

        [HttpGet]
        public ActionResult<AppSettings> Get()
        {
            var settings = _frontAppSettingsBuilder
                .AddAppSettings(_appSettings)
                .Build();

            return Ok(settings);
        }
    }
}

