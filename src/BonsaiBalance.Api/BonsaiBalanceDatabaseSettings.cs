namespace BonsaiBalance.Api
{
    public class BonsaiBalanceDatabaseSettings : IBonsaiBalanceDatabaseSettings
    {
        public string TransactionsCollectionName { get; set; }
        public string ConnectionString { get; set; }
        public string DatabaseName { get; set; }
    }

    public interface IBonsaiBalanceDatabaseSettings
    {
        string TransactionsCollectionName { get; set; }
        string ConnectionString { get; set; }
        string DatabaseName { get; set; }
    }
}
