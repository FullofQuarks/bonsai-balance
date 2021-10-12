using System;
using System.Net.Http;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;
using BonsaiBalance.Api.Models;
using BonsaiBalance.Api.Services.Interfaces;
using Newtonsoft.Json;

namespace BonsaiBalance.Api.Services
{
    public class PlaidService : IPlaidService
    {
        private readonly HttpClient _httpClient;

        public PlaidService(IHttpClientFactory httpClientFactory)
        {
            _httpClient = httpClientFactory.CreateClient();
        }

        public async Task<PlaidTokenResponse> CreateToken(PlaidTokenRequest request)
        {
            try
            {
                var json = JsonConvert.SerializeObject(request);
                var httpContent = new StringContent(json, Encoding.UTF8, "application/json");
                var response = await _httpClient.PostAsync("https://sandbox.plaid.com/link/token/create", httpContent);
                response.EnsureSuccessStatusCode();
                var serializedResponse = (await response.Content.ReadAsStringAsync());
                return JsonConvert.DeserializeObject<PlaidTokenResponse>(serializedResponse);
            }
            catch (HttpRequestException e)
            {
                throw new Exception($"An error occured: {e}");
            }
        }
    }
}
