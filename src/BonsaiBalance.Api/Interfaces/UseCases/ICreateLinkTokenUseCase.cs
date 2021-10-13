using System.Threading.Tasks;
using BonsaiBalance.Api.Models;

namespace BonsaiBalance.Api.Interfaces.UseCases
{
    public interface ICreateLinkTokenUseCase
    {
        Task<PlaidTokenResponse> Execute();
    }
}
