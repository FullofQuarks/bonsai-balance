using Newtonsoft.Json;

namespace BonsaiBalance.Api.Models
{
    public class PlaidTokenResponse
    {
        public string Expiration { get; set; }
        [JsonProperty("link_token")]
        public string LinkToken { get; set; }
        [JsonProperty("request_id")]
        public string RequestId { get; set; }
    }

    public class PlaidTokenResponseDto
    {
        public string Expiration { get; set; }
        public string LinkToken { get; set; }
        public string RequestId { get; set; }
    }
}
