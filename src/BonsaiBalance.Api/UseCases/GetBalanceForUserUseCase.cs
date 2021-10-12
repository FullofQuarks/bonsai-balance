using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BonsaiBalance.Api.Interfaces.UseCases;
using BonsaiBalance.Api.Services.Interfaces;

namespace BonsaiBalance.Api.UseCases
{
    public class GetBalanceForUserUseCase : IGetBalanceForUserUseCase
    {
        private readonly ITransactionsService _transactionsService;

        public GetBalanceForUserUseCase(ITransactionsService transactionsService)
        {
            _transactionsService = transactionsService;
        }

        public async Task<HashSet<string>> Execute(int userId)
        {
            var transactions = await _transactionsService.GetTransactionByUserId(userId);
            var accounts = transactions.SelectMany(t => t.Posts).Select(p => p.Account).ToHashSet();
            return accounts;
        }
    }
}
