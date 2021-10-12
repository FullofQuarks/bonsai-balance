using System.Threading.Tasks;
using BonsaiBalance.Api.Interfaces.UseCases;
using BonsaiBalance.Api.Services;
using BonsaiBalance.Api.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace BonsaiBalance.Api.Controllers
{
    [Route("balance")]
    [ApiController]
    [ApiConventionType(typeof(DefaultApiConventions))]
    public class BalanceController : ControllerBase
    {
        private readonly ITransactionsService _transactionsService;
        private readonly IGetBalanceForUserUseCase _getBalanceForUserUseCase;

        public BalanceController(ITransactionsService transactionsService,
            IGetBalanceForUserUseCase getBalanceForUserUseCase)
        {
            _transactionsService = transactionsService;
            _getBalanceForUserUseCase = getBalanceForUserUseCase;
        }

        [HttpGet(Name = "GetBalance")]
        public async Task<ActionResult> GetBalance()
        {
            var transactions = await _transactionsService.GetAll();
            return Ok(transactions);
        }

        [HttpGet("{userId:int}", Name = "GetBalanceForUser")]
        public async Task<ActionResult> GetBalanceForUser(int userId)
        {
            var accounts = await _getBalanceForUserUseCase.Execute(userId);
            return Ok(accounts);
        }
    }
}
