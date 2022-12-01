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

namespace DayOf16
{
    class Solution
    {
        public static void Main(string[] args)
        {
            string S = Console.ReadLine();
            int Sf1 = 0;
            try
            {
                Sf1 = Int32.Parse(S);
                Console.Write(Sf1);
            }
            catch (System.Exception)
            {
                Console.Write("Bad String");
            }
        }
    }
}

