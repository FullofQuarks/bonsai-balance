using BonsaiBalance.Api.Models;

namespace BonsaiBalance.Api.Interfaces.Converters
{
    public interface IPlaidExchangeResponseConverter
    {
        PlaidLinkTokenExchangeResponseDto Convert(PlaidLinkTokenExchangeResponse entity);
    }
}
