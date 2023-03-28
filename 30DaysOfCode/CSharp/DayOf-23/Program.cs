using System;
using System.Collections;
using System.Collections.Generic;
using System.IO;
using System.Linq;
namespace DayOf23
{
    class Node
    {
        public Node left, right;
        public int data;
        public Node(int data)
        {
            this.data = data;
            left = right = null;
        }
    }

    class Solution
    {
        static void levelOrder(Node root)
        {
            // Burada task tüm node'ları bulunduğu seviyeye göre ziyaret etmektir.
            var queue = new Queue<Node>();
            queue.Enqueue(root);

            // Enqueue() Metodu; Parametre olarak girilen öğeyi kuyruğun sonuna eklemektedir.
            // Dequeue() Metodu; Kuyruğun başındaki öğeyi döndürür ve sonra öğe kuyruktan çıkarılır / silinir.

            // Burada amacımız tüm node'ları sırasıyla ziyaret etmekdir.
            // 3, 5, 4, 7, 2, 1 Node'u verildiğine
            // Seviye 0'da (Level 0) -> 3 ziyaret edilir.
            // Seviye 1'da (Level 1) -> Önce 2 sonrasında 5 Ziyaret edilir.
            // Seviye 2'da (Level 2) -> Önce 1 sonrasında 4 en sonda 5 ziyare Ziyaret edilir.

            while (queue.Count != 0)
            {
                Node curr = queue.Dequeue();
                Console.Write(curr.data + " ");

                if (curr.left != null) queue.Enqueue(curr.left);
                if (curr.right != null) queue.Enqueue(curr.right);
            }
        }
        static Node insert(Node root, int data)
        {
            if (root == null)
            {
                return new Node(data);
            }
            else
            {
                Node cur;
                if (data <= root.data)
                {
                    cur = insert(root.left, data);
                    root.left = cur;
                }
                else
                {
                    cur = insert(root.right, data);
                    root.right = cur;
                }
                return root;
            }
        }
        static void Main(String[] args)
        {
            Node root = null;
            int T = Int32.Parse(Console.ReadLine());
            while (T-- > 0)
            {
                int data = Int32.Parse(Console.ReadLine());
                root = insert(root, data);
            }
            levelOrder(root);
        }
    }
}