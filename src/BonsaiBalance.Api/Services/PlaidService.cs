using System;
using System.Net.Http;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;
using BonsaiBalance.Api.Models;
using BonsaiBalance.Api.Services.Interfaces;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;

namespace BonsaiBalance.Api.Services
{
    public class PlaidService : IPlaidService
    {
        private readonly HttpClient _httpClient;

        public PlaidService(IHttpClientFactory httpClientFactory)
        {
            _httpClient = httpClientFactory.CreateClient();
            _httpClient.BaseAddress = new Uri("https://sandbox.plaid.com");
        }

        public async Task<PlaidTokenResponse> CreateToken(PlaidTokenRequest request)
        {
            try
            {
                var json = JsonConvert.SerializeObject(request, new JsonSerializerSettings
                {
                    ContractResolver = new CamelCasePropertyNamesContractResolver()
                });
                var httpContent = new StringContent(json, Encoding.UTF8, "application/json");
                var response = await _httpClient.PostAsync("link/token/create", httpContent);
                response.EnsureSuccessStatusCode();
                var serializedResponse = (await response.Content.ReadAsStringAsync());
                return JsonConvert.DeserializeObject<PlaidTokenResponse>(serializedResponse);
            }
            catch (HttpRequestException e)
            {
                throw new Exception($"An error occured: {e}");
            }
        }

        public async Task<PlaidLinkTokenExchangeResponse> ExchangeForAccess(PlaidLinkTokenExchangeRequest token)
        {
            try
            {
                var json = JsonConvert.SerializeObject(token, new JsonSerializerSettings
                {
                    ContractResolver = new CamelCasePropertyNamesContractResolver()
                });
                var httpContent = new StringContent(json, Encoding.UTF8, "application/json");
                var response = await _httpClient.PostAsync("item/public_token/exchange", httpContent);
                response.EnsureSuccessStatusCode();
                var serializedResponse = await response.Content.ReadAsStringAsync();
                return JsonConvert.DeserializeObject<PlaidLinkTokenExchangeResponse>(serializedResponse);
            }
            catch (HttpRequestException e)
            {
                throw new Exception($"An error occured: {e}");
            }
        }
    }
}
