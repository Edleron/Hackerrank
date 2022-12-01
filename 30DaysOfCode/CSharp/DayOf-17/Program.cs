using System;

namespace DayOf17
{
    //Write your code here
    class Calculator
    {
        public int power(int newN, int newP)
        {
            int result = 1;
            if (newN < 0 || newP < 0)
            {
                throw new Exception("n and p should be non-negative");
            }
            else
            {
                for (int i = 0; i < newP; i++)
                {
                    result = result * newN;
                }
                return result;
            }
        }
    }

    class Solution
    {
        static void Main(String[] args)
        {
            Calculator myCalculator = new Calculator();
            int T = Int32.Parse(Console.ReadLine());
            while (T-- > 0)
            {
                string[] num = Console.ReadLine().Split();
                int n = int.Parse(num[0]);
                int p = int.Parse(num[1]);
                try
                {
                    int ans = myCalculator.power(n, p);
                    Console.WriteLine(ans);
                }
                catch (Exception e)
                {
                    Console.WriteLine(e.Message);

                }
            }
        }
    }
}

