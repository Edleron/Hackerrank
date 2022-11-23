namespace DayOf1
{
    class Program
    {
        static void Main(string[] args)
        {
            int i = 4;
            double d = 4.0;
            string s = "HackerRank ";

            i = i + Convert.ToInt32(Console.ReadLine()); ;
            d = d + Convert.ToDouble(Console.ReadLine()); ;
            s = s + Console.ReadLine();
            Console.WriteLine(i);
            Console.WriteLine(d);
            Console.WriteLine(s);
        }
    }
}
