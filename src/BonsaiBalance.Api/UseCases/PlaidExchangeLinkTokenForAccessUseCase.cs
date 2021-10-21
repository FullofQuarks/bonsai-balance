using System.Threading.Tasks;
using BonsaiBalance.Api.Interfaces.UseCases;
using BonsaiBalance.Api.Models;
using BonsaiBalance.Api.Services.Interfaces;
using Microsoft.Extensions.Options;

namespace BonsaiBalance.Api.UseCases
{
    public class PlaidExchangeLinkTokenForAccessUseCase : IPlaidExchangeLinkTokenForAccessUseCase
    {
        private readonly PlaidKeys _options;
        private readonly IPlaidService _plaidService;
        public PlaidExchangeLinkTokenForAccessUseCase(IOptions<PlaidKeys> options, IPlaidService plaidService)
        {
            _plaidService = plaidService;
            _options = options.Value;
        }

        public async Task<PlaidLinkTokenExchangeResponse> Execute(string publicToken)
        {
            var request = new PlaidLinkTokenExchangeRequest
            {
                Secret = _options.Secret,
                ClientId = _options.ClientId,
                PublicToken = publicToken
            };
            var response = await _plaidService.ExchangeForAccess(request);

            // TODO Save access token
            return response;
        }
    }
}
