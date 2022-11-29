/*
process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});
function readLine() {
    return input_stdin_array[input_currentline++];
}
*/

function Node(data){
    this.data = data;
    this.pointer = null;
}

function Solution() {

  	this.insert=function(head,data){
        //complete this method
        let node = new Node(data);
        let state = head;

        if (!head) {
            // No list, this is the first node
            return node;
        } else {

            // Traverse the list using each node's pointer property
            while (state.pointer) {
                state = state.pointer;
            }

            // Append new node to tail
            state.pointer = node;
        }

        // Return head reference
        return head;
    };

	this.display=function(head){
        var start = head;
            while(start){
                process.stdout.write(start.data + " ");
                start = start.pointer;
            }
    };
}
function main(input){
    //var T=parseInt(readLine());
    var T = input.split('\n');
    var head = null;
    var mylist = new Solution();
    for(i=1; i <= parseInt(T[0]); i++){
       //var data=parseInt(readLine());
        var data = parseInt(T[i]);
        head= mylist.insert(head,data);
    }
    mylist.display(head);
}

main("5\n10\n20\n30\n40\n50");