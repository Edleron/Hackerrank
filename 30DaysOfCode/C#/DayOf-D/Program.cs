using System;
using System.Collections.Generic;
using System.IO;

namespace DayOfD
{
    abstract class Book
    {

        protected String title;
        protected String author;

        public Book(String t, String a)
        {
            title = t;
            author = a;
        }
        public abstract void display();
    }

    class MyBook : Book
    {
        private int price = 0;
        public MyBook(String newT, String newA, int newP) : base(newT, newA)
        {
            this.price = newP;
        }
        public override void display()
        {
            Console.Write("Title: {0} \nAuthor: {1} \nPrice: {2}", title, author, price);
        }
    }

    class Program
    {
        static void Main(string[] args)
        {
            String title = Console.ReadLine();
            String author = Console.ReadLine();
            int price = Int32.Parse(Console.ReadLine());
            Book new_novel = new MyBook(title, author, price);
            new_novel.display();
        }
    }
}