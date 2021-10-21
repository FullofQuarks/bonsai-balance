using Newtonsoft.Json;

namespace BonsaiBalance.Api.Models
{
    public class PlaidLinkTokenExchangeRequest
    {
        [JsonProperty("client_id")]
        public string ClientId { get; set; }
        [JsonProperty("secret")]
        public string Secret { get; set; }
        [JsonProperty("public_token")]
        public string PublicToken { get; set; }
    }
}
