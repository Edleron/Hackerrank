using System;

namespace DayOf21
{
    class Printer
    {
        static void PrintArray<Element>(Element[] array)
        {
            foreach (var element in array)
            {
                Console.WriteLine(element);
            }
        }

        static void Main(String[] args)
        {
            int n = Convert.ToInt32(Console.ReadLine().Trim());
            int[] intArray = new int[n];
            for (int i = 0; i < n; i++)
            {
                intArray[i] = Convert.ToInt32(Console.ReadLine().Trim());
            }

            n = Convert.ToInt32(Console.ReadLine().Trim());
            string[] stringArray = new string[n];
            for (int i = 0; i < n; i++)
            {
                stringArray[i] = Console.ReadLine().Trim();
            }

            PrintArray<Int32>(intArray);
            PrintArray<String>(stringArray);
        }
    }
}
