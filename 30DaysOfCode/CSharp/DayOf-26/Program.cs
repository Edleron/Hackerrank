using System;
using System.Collections.Generic;
using System.IO;

namespace DayOf26
{
    class Solution
    {
        static void Main(String[] args)
        {
            /* Enter your code here. Read input from STDIN. Print output to STDOUT. Your class should be named Solution */

            var surrender = Console.ReadLine().Split(' ');
            var sDay = int.Parse(surrender[0]);
            var sMount = int.Parse(surrender[1]);
            var sYear = int.Parse(surrender[2]);

            var realDate = Console.ReadLine().Split(' ');
            var rDay = int.Parse(realDate[0]);
            var rMount = int.Parse(realDate[1]);
            var rYear = int.Parse(realDate[2]);

            var result = 0;

            result = (sYear > rYear) ? 10000 :
                        (sYear < rYear) ? 0 :
                            (sMount > rMount) ? ((sMount - rMount) * 500) :
                                    ((sMount == rMount) && (sDay > rDay)) ? ((sDay - rDay) * 15) : 0;

            Console.WriteLine(result);
        }
    }
}
