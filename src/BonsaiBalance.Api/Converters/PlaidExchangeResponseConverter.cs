using BonsaiBalance.Api.Interfaces.Converters;
using BonsaiBalance.Api.Models;

namespace BonsaiBalance.Api.Converters
{
    public class PlaidExchangeResponseConverter : IPlaidExchangeResponseConverter
    {
        public PlaidLinkTokenExchangeResponseDto Convert(PlaidLinkTokenExchangeResponse entity)
        {
            return new PlaidLinkTokenExchangeResponseDto
            {
                AccessToken = entity.AccessToken,
                ItemId = entity.ItemId,
                RequestId = entity.RequestId
            };
        }
    }
}
