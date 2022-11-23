using System;
using System.Collections.Generic;
using System.IO;

namespace DayOf6
{
    class Program
    {
        static void Main(string[] args)
        {
            /* Enter your code here. Read input from STDIN. Print output to STDOUT. Your class should be named Solution */
            int T = int.Parse(Console.In.ReadLine());
            if (T >= 1 && T <= 10)
            {
                for (int i = 0; i < T; i++)
                {
                    string S = Console.In.ReadLine();
                    string returnStrings = SmashStrings(S);
                    Console.WriteLine(returnStrings);
                }
            }
        }

        static string SmashStrings(string newStrings)
        {
            string defSF1 = "";
            string defSF2 = "";
            if (newStrings.Length >= 2 && newStrings.Length <= 10000)
            {
                for (int i = 0; i <= newStrings.Length - 1; i = i + 2)
                {
                    defSF1 = defSF1 + newStrings[i];
                }
                for (int i = 1; i <= newStrings.Length - 1; i = i + 2)
                {
                    defSF2 = defSF2 + newStrings[i];
                }
            }
            return defSF1 + " " + defSF2;
        }
    }


}
