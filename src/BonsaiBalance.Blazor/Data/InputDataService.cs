using BonsaiBalance.Blazor.Models;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace BonsaiBalance.Blazor.Data;

public class InputDataService
{
    private readonly IMongoCollection<InputData> _inputDataCollection;

    public InputDataService(IOptions<BonsaiBalanceDatabaseSettings> options)
    {
        var mongoClient = new MongoClient(options.Value.ConnectionString);
        var mongoDatabase = mongoClient.GetDatabase(options.Value.DatabaseName);
        _inputDataCollection = mongoDatabase.GetCollection<InputData>(options.Value.CollectionName);
    }

    public async Task<List<InputData>> GetInputDataAsync() =>
        await _inputDataCollection.Find(_ => true).ToListAsync();

    public async Task AddNewData(InputData inputData) =>
        await _inputDataCollection.InsertOneAsync(inputData);
}
