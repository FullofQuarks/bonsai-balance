using System.Collections.Generic;
using System.Threading.Tasks;
using BonsaiBalance.Api.Entities;

namespace BonsaiBalance.Api.Services.Interfaces
{
    public interface ITransactionsService
    {
        Task<List<Transaction>> GetAll();
        Task<List<Transaction>> GetTransactionByUserId(int userId);
    }
}
