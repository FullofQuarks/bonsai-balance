using System.Collections.Generic;
using Newtonsoft.Json;

namespace BonsaiBalance.Api.Models
{
    public class PlaidTokenRequest
    {
        [JsonProperty("client_id")]
        public string ClientId { get; set; }
        public string Secret { get; set; }
        [JsonProperty("client_name")]
        public string ClientName { get; set; }
        [JsonProperty("country_codes")]
        public List<string> CountryCodes { get; set; } = new List<string>();
        public string Language { get; set; }
        public PlaidUser User { get; set; }
        public List<string> Products { get; set; } = new List<string>();
    }
}
