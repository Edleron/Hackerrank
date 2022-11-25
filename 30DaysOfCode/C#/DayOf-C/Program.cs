using System;
using System.Linq;

namespace DayOfC
{
    class Person
    {
        protected string firstName;
        protected string lastName;
        protected int id;

        public Person() { }
        public Person(string firstName, string lastName, int identification)
        {
            this.firstName = firstName;
            this.lastName = lastName;
            this.id = identification;
        }
        public void printPerson()
        {
            Console.WriteLine("Name: " + lastName + ", " + firstName + "\nID: " + id);
        }
    }

    class Student : Person
    {
        /*	
        *   Class Constructor
        *   
        *   Parameters: 
        *   firstName - A string denoting the Person's first name.
        *   lastName - A string denoting the Person's last name.
        *   id - An integer denoting the Person's ID number.
        *   scores - An array of integers denoting the Person's test scores.
        */
        // Write your constructor here

        /*	
        *   Method Name: Calculate
        *   Return: A character denoting the grade.
        */
        // Write your method here

        private int[] testScores;
        private int scoresControl = 0;

        public Student(string newfirstName, string newlastName, int newidentification, int[] newScores) : base(newfirstName, newlastName, newidentification)
        {
            this.testScores = newScores;
        }

        public string Calculate()
        {
            for (int i = 0; i < testScores.Length; i++)
            {
                scoresControl += testScores[i];
            }
            scoresControl = scoresControl / testScores.Length;
            string letterGrade = LetterGrade(scoresControl);
            return letterGrade;
        }

        private string LetterGrade(int newScore)
        {
            if (newScore >= 90 && newScore <= 100)
            {
                return "O";
            }
            else if (newScore >= 80 && newScore < 90)
            {
                return "E";
            }
            else if (newScore >= 70 && newScore < 80)
            {
                return "A";
            }
            else if (newScore >= 55 && newScore < 70)
            {
                return "P";
            }
            else if (newScore >= 40 && newScore < 55)
            {
                return "D";
            }
            else if (newScore < 40)
            {
                return "T";
            }
            else
            {
                return "Number Fail";
            }
        }
    }


    class Program
    {
        static void Main(string[] args)
        {
            string[] inputs = Console.ReadLine().Split();
            string firstName = inputs[0];
            string lastName = inputs[1];
            int id = Convert.ToInt32(inputs[2]);
            int numScores = Convert.ToInt32(Console.ReadLine());
            inputs = Console.ReadLine().Split();
            int[] scores = new int[numScores];
            for (int i = 0; i < numScores; i++)
            {
                scores[i] = Convert.ToInt32(inputs[i]);
            }

            Student s = new Student(firstName, lastName, id, scores);
            s.printPerson();
            Console.WriteLine("Grade: " + s.Calculate() + "\n");
        }
    }
}
