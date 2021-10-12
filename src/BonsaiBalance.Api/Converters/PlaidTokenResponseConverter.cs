using BonsaiBalance.Api.Interfaces.Converters;
using BonsaiBalance.Api.Models;

namespace BonsaiBalance.Api.Converters
{
    public class PlaidTokenResponseConverter : IPlaidTokenResponseConverter
    {
        public PlaidTokenResponseDto Convert(PlaidTokenResponse plaidTokenResponse)
        {
            return new PlaidTokenResponseDto
            {
                Expiration = plaidTokenResponse.Expiration,
                LinkToken = plaidTokenResponse.LinkToken,
                RequestId = plaidTokenResponse.RequestId
            };
        }
    }
}
