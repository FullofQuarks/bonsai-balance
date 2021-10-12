using Microsoft.AspNetCore.Mvc;

namespace BonsaiBalance.Api.Controllers
{
    [Route("plaid")]
    [ApiController]
    [ApiConventionType(typeof(DefaultApiConventions))]
    public class PlaidController : ControllerBase
    {
        [HttpGet("token", Name = "CreateLinkToken")]
        public ActionResult CreateLinkToken()
        {
            return NoContent();
        }
    }
}
