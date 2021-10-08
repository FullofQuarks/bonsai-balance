using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc.Filters;

namespace BonsaiBalance.Api.Interfaces.UseCases
{
    public interface IGetBalanceForUserUseCase
    {
        Task<HashSet<string>> Execute(int userId);
    }
}
