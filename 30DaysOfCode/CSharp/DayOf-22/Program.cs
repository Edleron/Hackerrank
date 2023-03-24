using System;
namespace DayOf22
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

        static int getHeight(Node root)
        {
            Console.WriteLine("*");
            // Math Max : Parametre olarak verilen iki sayıdan büyük olanı geriye döndüren metottur.
            return root == null ? -1 : 1 + Math.Max(getHeight(root.left), getHeight(root.right));

            /*
                        int result = 0;
                        if (root == null)
                        {
                            result = -1;
                        }
                        else
                        {
                            int left = getHeight(root.left);
                            int right = getHeight(root.right);

                            if (left > right)
                            {
                                result = left;
                            }
                            else
                            {
                                result = right;
                            }
                        }
                        return result;
            */
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
            Console.WriteLine(" - " + root.left.left.data);
            int height = getHeight(root);
            Console.WriteLine(height);
        }
    }
}
