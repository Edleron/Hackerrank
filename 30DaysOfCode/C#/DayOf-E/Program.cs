using System;
using System.Linq;

namespace DayOfE
{
    class Difference
    {
        private int[] elements;
        public int maximumDifference;

        public Difference(int[] newA)
        {
            elements = newA;
        }

        public void computeDifference()
        {
            for (int i = 0; i < elements.Length; i++)
            {
                for (int j = 1; j < elements.Length; j++)
                {
                    int varF1 = Math.Abs(elements[i] - elements[j]);
                    if (maximumDifference < varF1)
                    {
                        maximumDifference = varF1;
                    }
                }
            }
        }
        // Add your code here

    } // End of Difference Class

    class Program
    {
        static void Main(string[] args)
        {
            Convert.ToInt32(Console.ReadLine());

            int[] a = Console.ReadLine().Split(' ').Select(x => Convert.ToInt32(x)).ToArray();

            Difference d = new Difference(a);

            d.computeDifference();

            Console.Write(d.maximumDifference);
        }
    }
}
