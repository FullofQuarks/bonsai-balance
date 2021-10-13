using BonsaiBalance.Api.Models;

namespace BonsaiBalance.Api.Interfaces.Converters
{
    public interface IPlaidTokenResponseConverter
    {
        PlaidTokenResponseDto Convert(PlaidTokenResponse plaidTokenResponse);
    }
}
