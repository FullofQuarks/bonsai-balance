using System.Collections.Generic;
using System.Threading.Tasks;
using BonsaiBalance.Api.Entities;
using BonsaiBalance.Api.Services.Interfaces;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace BonsaiBalance.Api.Services
{
    public class TransactionsService : ITransactionsService
    {
        private readonly IMongoCollection<Transaction> _transactions;

        public TransactionsService(IOptions<BonsaiBalanceDatabaseSettings> settingsAccessor)
        {
            var settings = settingsAccessor.Value;
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);

            _transactions = database.GetCollection<Transaction>(settings.TransactionsCollectionName);
        }

        public async Task<List<Transaction>> GetAll()
        {
            return (await _transactions.FindAsync(transaction => true)).ToList();
        }

        public async Task<List<Transaction>> GetTransactionByUserId(int userId)
        {
            return await (await _transactions.FindAsync(transaction => transaction.User.UserId == userId))
                .ToListAsync();
        }
    }
}
