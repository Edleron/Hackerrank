using System;
using System.Collections.Generic;
using System.IO;
namespace DayOf25
{
    class Solution
    {
        public static bool isPrime(int n)
        {
            // Math.sqrt -> Girilen sayının Karakötünü bulur.
            for (int i = 2; i <= Math.Sqrt(n); i++)
            {
                // Console.WriteLine(Math.Sqrt(n) + " " + n + " " + i);
                if (n % i == 0)
                {
                    return false;
                }
            }
            return true;
        }

        static void Main(String[] args)
        {
            // Enter your code here. Read input from STDIN. Print output to STDOUT. 
            // Your class should be named Solution
            List<bool> check = new List<bool>();

            var T = int.Parse(Console.ReadLine());

            for (int i = 0; i < T; i++)
            {
                int n = int.Parse(Console.ReadLine());
                if (n >= 2 && isPrime(n)) check.Add(true);
                else check.Add(false);
            }

            for (int i = 0; i < check.Count; i++)
            {
                var result = check[i] == true ? "Prime" : "Not prime";
                Console.WriteLine(result);
            }
        }
    }
}