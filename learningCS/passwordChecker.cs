using System;

namespace PasswordChecker
{
  class Program
  {
    public static void Main(string[] args)
    {
      int minLength = 8;
      string uppercase = "abcdefghijklmnopqrstuvwxyz";
      string lowercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      string digits = "1234567890";
      string specialChars = "#?!";

      Console.WriteLine("Enter a password: ");
      string password = Console.ReadLine();

      int score = 0;
      if (password.Length >= minLength) {
        score++;
      }
      if (Tools.Contains(password, uppercase)) {
        score++;
      }
      if (Tools.Contains(password, lowercase)) {
        score++;
      }
      if (Tools.Contains(password, digits)) {
        score++;
      }
      if (Tools.Contains(password, specialChars)) {
        score++;
      }
      Console.WriteLine(score);

      switch (score)
      {
        case 1:
          Console.WriteLine("the password is weak");
          break;
        case 2:
          Console.WriteLine("the password is medium");
          break;
        case 3:
          Console.WriteLine("the password is strong");
          break;
        case 4:
          Console.WriteLine("the password is extremely strong");
          break;
        case 5:
          Console.WriteLine("the password is extremely strong");
          break; 
        default:
          Console.WriteLine("the password doesn’t meet any of the standards");
          break;
      }
    }
  }
}
