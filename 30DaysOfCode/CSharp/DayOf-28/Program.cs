using System.CodeDom.Compiler;
using System.Collections.Generic;
using System.Collections;
using System.ComponentModel;
using System.Diagnostics.CodeAnalysis;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Runtime.Serialization;
using System.Text.RegularExpressions;
using System.Text;
using System;

namespace DayOf27
{
    class Solution
    {
        public static void Main(string[] args)
        {
            int N = Convert.ToInt32(Console.ReadLine().Trim());

            var checkList = new List<string>();

            for (int NItr = 0; NItr < N; NItr++)
            {
                string[] firstMultipleInput = Console.ReadLine().TrimEnd().Split(' ');

                string firstName = firstMultipleInput[0];

                string emailID = firstMultipleInput[1];

                if (Regex.IsMatch(emailID, @".+@gmail\.com$"))
                {
                    checkList.Add(firstName);
                }
            }

            checkList.Sort();

            foreach (var name in checkList)
            {
                Console.WriteLine(name);
            }
        }
    }
}