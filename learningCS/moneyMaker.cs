using System;

namespace MoneyMaker
{
  class MainClass
  {
    public static void Main(string[] args)
    {
      Console.WriteLine("Welcome to Money Maker!");

      Console.WriteLine("What is the amount?");
      string amount = Console.ReadLine();

      double amountToDouble = Convert.ToDouble(amount);

      Console.WriteLine($"{amount} is equal to...");
      int gold = 10;
      int silver = 5;

      double goldCoins = Math.Floor(amountToDouble / gold);

      double leftOver = amountToDouble % gold;

      double silverCoins = Math.Floor(leftOver / silver);

      double remainder = leftOver % silver;

      Console.WriteLine($"Gold: {goldCoins}");
      Console.WriteLine($"Silver: {silverCoins}");
      Console.WriteLine($"Bronze: {remainder}");
    }
  }
}