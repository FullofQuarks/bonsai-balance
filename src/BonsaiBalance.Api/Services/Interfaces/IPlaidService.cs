using System.Threading.Tasks;
using BonsaiBalance.Api.Models;

namespace BonsaiBalance.Api.Services.Interfaces
{
    public interface IPlaidService
    {
        Task<PlaidTokenResponse> CreateToken(PlaidTokenRequest request);
        Task<PlaidLinkTokenExchangeResponse> ExchangeForAccess(PlaidLinkTokenExchangeRequest token);
    }
}
