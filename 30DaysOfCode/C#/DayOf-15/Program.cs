using System;

namespace DayOf15
{
    class Node
    {
        public int index;
        public int data;
        public Node pointer;
        public Node(int i, int d)
        {
            index = i;
            data = d;
            pointer = null;
        }
    }

    class Program
    {
        public static Node insert(Node head, int index, int data)
        {
            if (head == null)
            {
                // Eğer dizide eleman yok ise burası çalışır. ilk eleman Head için çalışır.
                head = new Node(index, data);
                Console.WriteLine(" HEAD : index " + head.index + " ||| data " + head.data);
            }
            else
            {
                // Artık Head o anki currentent'dır.
                Node current = head;
                while (current.pointer != null)
                {
                    current = current.pointer;
                }
                current.pointer = new Node(index, data);

                // Burada bir önceki pointer datasını, yeni yaratılan datayı ve index'i işaretledirk. işaretledik.             
                Console.WriteLine(" Current Index : " + current.pointer.index + ", data : " + current.pointer.data + " ||| " + "pointer index : " + current.index + " ,pointer data : " + current.data);
            }
            return head;
        }

        public static void display(Node head)
        {
            Node start = head;
            while (start != null)
            {
                Console.Write(start.data + " ");
                start = start.pointer;
            }
        }
        static void Main(String[] args)
        {
            Node head = null;
            int T = int.Parse(Console.ReadLine());
            int index = 0;
            while (T-- > 0)
            {
                int data = int.Parse(Console.ReadLine());
                head = insert(head, index, data);
                index++;
            }
            display(head);
        }
    }
}


