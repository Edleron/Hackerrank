/*
process.stdin.resume();
process.stdin.setEncoding('ascii');

var _input = "";

process.stdin.on('data', function (data) {
    _input += data;
});

process.stdin.on('end', function () {
    var tree = new BinarySearchTree();
    var root = null;

    var values = _input.split('\n').map(Number);

    for (var i = 1; i < values.length; i++) {
        root = tree.insert(root, values[i]);
    }

    tree.levelOrder(root);
});
*/


let values = "6\n3\n5\n4\n7\n2\n1"
function main(input) {
    var tree = new BinarySearchTree();
    var root = null;
    var values = input.split('\n').map(Number);
    for (var i = 1; i < values.length; i++) {
        root = tree.insert(root, values[i]);
    }
    tree.levelOrder(root);
}
main(values);

// Start of function Node
function Node(data) {
    this.data = data;
    this.left = null;
    this.right = null;
};


// Start of function BinarySearchTree
function BinarySearchTree() {
    this.insert = function (root, data) {
        if (root === null) {
            this.root = new Node(data);

            return this.root;
        }

        if (data <= root.data) {
            if (root.left) {
                this.insert(root.left, data);
            } else {
                root.left = new Node(data);
            }
        } else {
            if (root.right) {
                this.insert(root.right, data);
            } else {
                root.right = new Node(data);
            }
        }

        return this.root;
    };

    // Start of function levelOrder
    this.levelOrder = function (root) {
        // Burada task tüm node'ları bulunduğu seviyeye göre ziyaret etmektir.

        // Add your code here
        // To print values separated by spaces use process.stdout.write(someValue + ' ')

        // Add your code here
        // To print values separated by spaces use process.stdout.write(someValue + ' ')

        // shift() Metodu; İlk değeri siler.
        // push() yeni data ekler.

        // Burada amacımız tüm node'ları sırasıyla ziyaret etmekdir.
        // 3, 5, 4, 7, 2, 1 Node'u verildiğine
        // Seviye 0'da (Level 0) -> 3 ziyaret edilir.
        // Seviye 1'da (Level 1) -> Önce 2 sonrasında 5 Ziyaret edilir.
        // Seviye 2'da (Level 2) -> Önce 1 sonrasında 4 en sonda 5 ziyare Ziyaret edilir.
        var queue = [root];
        while (queue.length > 0) {
            var node = queue.shift();
            console.log(node.data);
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }

    }; // End of function levelOrder
}; // End of function BinarySearchTree