using System;
using System.Collections.Generic;
using System.IO;

namespace DayOf8
{
    class Program
    {
        static void Main(string[] args)
        {
            /* Enter your code here. Read input from STDIN. Print output to STDOUT. Your class should be named Solution */
            Dictionary<string, string> phoneBook = new Dictionary<string, string>();
            int N = int.Parse(Console.In.ReadLine());
            for (int i = 0; i < N; i++)
            {
                string[] variablesText = Console.ReadLine().Split(' ');
                phoneBook.Add(variablesText[0], variablesText[1]);
            }

            for (int i = 0; i < N; i++)
            {
                string name = Console.ReadLine();
                if (phoneBook.ContainsKey(name))
                {
                    Console.WriteLine(name + "=" + phoneBook[name]);
                }
                else
                {
                    Console.WriteLine("Not found");
                }
            }
        }
    }
}