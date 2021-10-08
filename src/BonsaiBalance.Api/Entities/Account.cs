namespace BonsaiBalance.Api.Entities
{
    public class Account
    {
        public string Name { get; set; }
        public decimal Balance { get; set; }
        public Account ChildAccount { get; set; }

        public Account(string name)
        {
            Name = name;
            Balance = 0m;
            ChildAccount = null;
        }
    }
}
