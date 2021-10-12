using Newtonsoft.Json;

namespace BonsaiBalance.Api.Models
{
    public class PlaidUser
    {
        [JsonProperty("client_user_id")]
        public string ClientUserId { get; set; }
    }
}
