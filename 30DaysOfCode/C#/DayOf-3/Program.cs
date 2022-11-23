namespace DayOf3
{
    class Program
    {
        static void Main(string[] args)
        {
            int N = Convert.ToInt32(Console.ReadLine());
            if (N == 2 || N == 4)
            {
                Console.WriteLine("Not Weird");
            }
            else if (N == 3)
            {
                Console.WriteLine("Weird");
            }
            else if (N >= 5 && N <= 20)
            {
                Console.WriteLine("Weird");
            }
            else if (N == 29)
            {
                Console.WriteLine("Weird");
            }
            else
            {
                Console.WriteLine("Not Weird");
            }
        }
    }
}