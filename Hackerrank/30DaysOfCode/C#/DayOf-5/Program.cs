namespace DayOf5
{
    class Program
    {
        static void Main(string[] args)
        {
            int n = Convert.ToInt32(Console.ReadLine());
            if (n >= 2 && n <= 20)
            {
                int result = 0;
                for (int i = 1; i <= 10; i++)
                {
                    result = n * i;
                    Console.WriteLine(n + " x " + i + " = " + result);
                }
            }
        }
    }
}