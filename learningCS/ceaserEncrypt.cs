using System;

namespace CaesarCipher
{
  class Program
  {
    static void Main(string[] args)
    {
      char[] alphabet = new char[] {'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'};
      
    
    Console.WriteLine("Give me a secret");
    string secret = Console.ReadLine();

    char[] secretMsg = secret.ToCharArray();
    char[] encryptMsg = new char[secretMsg.Length];


    for (int i = 0; i < secretMsg.Length; i++)
    {
      char letter = secretMsg[i];
      int letterPosition = Array.IndexOf(alphabet, letter);
      int newLetterPos = (letterPosition + 3) % 26;
      char letterEncoded = alphabet[newLetterPos];
      encryptMsg[i] = letterEncoded;
    }
    
    string encodedString = String.Join("", encryptMsg);
    Console.WriteLine($"Your encoded msg is: {encodedString}");

    }
  }
}
