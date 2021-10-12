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

        public static PlaidTokenRequest GetDefaultRequest() => new PlaidTokenRequest
        {
            Language = "en",
            Products = new List<string>{"auth"},
            ClientId = "61396b4124fba3000f7dc136",
            Secret = "73de1d8b3674d59346999529d63989",
            User = new PlaidUser
            {
                ClientUserId = "1"
            },
            ClientName = "Test",
            CountryCodes = new List<string>{"US"}
        };
    }
}
