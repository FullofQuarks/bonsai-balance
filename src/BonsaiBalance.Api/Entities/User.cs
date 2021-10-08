using MongoDB.Bson.Serialization.Attributes;

namespace BonsaiBalance.Api.Entities
{
    public class User
    {
        public int UserId { get; set; }
        public string Name { get; set; }
    }
}
