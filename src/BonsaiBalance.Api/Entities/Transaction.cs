using System;
using System.Collections.Generic;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace BonsaiBalance.Api.Entities
{
    public class Transaction
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }
        public string TransactionId { get; init; }
        public DateTime Date { get; set; }
        public string Payee { get; set; }
        public List<Post> Posts { get; set; }
        public User User { get; set; }
    }
}
