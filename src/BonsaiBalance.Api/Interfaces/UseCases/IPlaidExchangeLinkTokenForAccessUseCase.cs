using System.Threading.Tasks;
using BonsaiBalance.Api.Models;

namespace BonsaiBalance.Api.Interfaces.UseCases
{
    public interface IPlaidExchangeLinkTokenForAccessUseCase
    {
        Task<PlaidLinkTokenExchangeResponse> Execute(string publicToken);
    }
}
