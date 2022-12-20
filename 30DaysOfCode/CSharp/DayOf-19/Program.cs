using System;
using System.Collections.Generic;
using System.IO;

namespace DayOf19
{
    public interface AdvancedArithmetic
    {
        int divisorSum(int n);
    }

    public class Calculator : AdvancedArithmetic
    {
        public int divisorSum(int n)
        {
            int result = 0;
            int sumF1 = 0;
            for (int i = 1; i <= n; i++)
            {
                if (n % i == 0)
                {
                    sumF1 = n / i;
                    result = result + sumF1;
                }
            }
            return result;
        }
    }

    class Solution
    {
        static void Main(string[] args)
        {
            int n = Int32.Parse(Console.ReadLine());
            AdvancedArithmetic myCalculator = new Calculator();
            int sum = myCalculator.divisorSum(n);
            Console.WriteLine("I implemented: AdvancedArithmetic\n" + sum);
        }
    }
}