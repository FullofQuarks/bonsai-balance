using System.Threading.Tasks;
using BonsaiBalance.Api.Interfaces.Converters;
using BonsaiBalance.Api.Interfaces.UseCases;
using BonsaiBalance.Api.Models;
using Microsoft.AspNetCore.Mvc;

namespace BonsaiBalance.Api.Controllers
{
    [Route("plaid")]
    [ApiController]
    [ApiConventionType(typeof(DefaultApiConventions))]
    public class PlaidController : ControllerBase
    {
        private readonly ICreateLinkTokenUseCase _createLinkTokenUseCase;
        private readonly IPlaidExchangeLinkTokenForAccessUseCase _plaidExchangeLinkTokenForAccessUseCase;
        private readonly IPlaidTokenResponseConverter _plaidTokenResponseConverter;
        private readonly IPlaidExchangeResponseConverter _plaidExchangeResponseConverter;

        public PlaidController(ICreateLinkTokenUseCase createLinkTokenUseCase,
            IPlaidTokenResponseConverter plaidTokenResponseConverter,
            IPlaidExchangeLinkTokenForAccessUseCase plaidExchangeLinkTokenForAccessUseCase,
            IPlaidExchangeResponseConverter plaidExchangeResponseConverter)
        {
            _createLinkTokenUseCase = createLinkTokenUseCase;
            _plaidTokenResponseConverter = plaidTokenResponseConverter;
            _plaidExchangeLinkTokenForAccessUseCase = plaidExchangeLinkTokenForAccessUseCase;
            _plaidExchangeResponseConverter = plaidExchangeResponseConverter;
        }

        [HttpGet("token", Name = "CreateLinkToken")]
        public async Task<ActionResult> CreateLinkToken()
        {
            var tokenResponse = await _createLinkTokenUseCase.Execute();
            return Ok(_plaidTokenResponseConverter.Convert(tokenResponse));
        }

        [HttpPost("token", Name = "ExchangeForAccessToken")]
        public async Task<ActionResult> ExchangeTokenForAccess([FromBody] ExchangeForAccessTokenRequest publicToken)
        {
            var response = await _plaidExchangeLinkTokenForAccessUseCase.Execute(publicToken.PublicToken);
            return NoContent();
        }
    }
}
