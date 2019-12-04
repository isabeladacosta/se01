console.log('Sliding Puzzle');

var rowOne = [1,8,2];
var rowTwo = [4,3,5];
var rowThree = [7,6,0];

console.log(rowOne);
console.log(rowTwo);
console.log(rowThree);

var next = prompt('you can chose numbers ' + rowTwo[2] + ' and ' + rowThree[1]);

if(next == rowTwo[2]) {
    
    Chose(rowThree[2] , rowTwo[2]);

    rowThree[2] = move[0];
    rowTwo[2] = move[1];

    console.log('Sliding Puzzle');
    console.log(rowOne);
    console.log(rowTwo);
    console.log(rowThree);

} else if(next == rowThree[1]) {
    Chose(rowThree[2], rowThree[1]);
}

function Chose(zero, row){
    var old = row;
    zero = old;
    row = 0;

    var move = [zero, row];
    
    return move
};

