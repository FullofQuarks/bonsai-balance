using System.Threading.Tasks;
using BonsaiBalance.Api.Interfaces.UseCases;
using BonsaiBalance.Api.Models;
using BonsaiBalance.Api.Services.Interfaces;

namespace BonsaiBalance.Api.UseCases
{
    public class CreateLinkTokenUseCase : ICreateLinkTokenUseCase
    {
        private readonly IPlaidService _plaidService;

        public CreateLinkTokenUseCase(IPlaidService plaidService)
        {
            _plaidService = plaidService;
        }

        public async Task<PlaidTokenResponse> Execute()
        {
            var request = PlaidTokenRequest.GetDefaultRequest();
            var response = await _plaidService.CreateToken(request);
            return response;
        }
    }
}
