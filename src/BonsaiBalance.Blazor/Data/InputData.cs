using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace BonsaiBalance.Blazor.Data;

public class InputData
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string? Id { get; set; }
    [BsonDateTimeOptions(DateOnly = true)]
    public DateTime Date { get; set; }
    public string Payee { get; set; }
    public decimal Amount { get; set; }
    public string Account { get; set; }
}
