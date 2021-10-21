using System.Threading.Tasks;
using BonsaiBalance.Api.Interfaces.UseCases;
using BonsaiBalance.Api.Models;
using BonsaiBalance.Api.Services.Interfaces;
using Microsoft.Extensions.Options;

namespace BonsaiBalance.Api.UseCases
{
    public class CreateLinkTokenUseCase : ICreateLinkTokenUseCase
    {
        private readonly IPlaidService _plaidService;
        private readonly PlaidKeys _options;

        public CreateLinkTokenUseCase(IOptions<PlaidKeys> options, IPlaidService plaidService)
        {
            _plaidService = plaidService;
            _options = options.Value;
        }

        public async Task<PlaidTokenResponse> Execute()
        {
            var request = PlaidTokenRequest.GetDefaultRequest();
            request.ClientId = _options.ClientId;
            request.Secret = _options.Secret;
            var response = await _plaidService.CreateToken(request);
            return response;
        }
    }
}
