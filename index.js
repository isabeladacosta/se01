console.log('Sliding Puzzle');

var rowOne = [1,8,2];
var rowTwo = [4,3,5];
var rowThree = [7,6,0];

console.log(rowOne);
console.log(rowTwo);
console.log(rowThree);

var zero;
var array;

var stop = 0;

while (stop == 0) {

for (var i = 0; i < rowThree.length; i++) {
 for (var j = 0; j < rowTwo.length; j++) {
    for (var k = 0; k < rowOne.length; k++) {
    

        //finds the zero
        if (rowThree[i] === 0) {
            array = rowThree;
            zero = i;
            
        } else if (rowTwo[j] === 0){
            array = rowTwo;
            zero = j;
            
        } else if (rowOne[k] === 0) {
            array = rowOne;
            zero = k;
            
        }

        if (array == rowThree) {
            if (zero == 0) {
              var next = prompt('you can chose numbers ' + rowTwo[0] + ' and ' + rowThree[1]);
          
              if (next == rowTwo[0]) {
                var old = rowTwo[0];
                rowThree = old;
                rowOne = 0;

                console.log(rowOne);
                console.log(rowTwo);
                console.log(rowThree);

                zero = 0;
                array = rowTwo;

              } else if (next == rowThree[1]) {
                var old = rowThree[1];
                rowThree[1] = 0;
                rowThree[0] = old;

                console.log('Sliding Puzzle');
                console.log(rowOne);
                console.log(rowTwo);
                console.log(rowThree);

                zero = 1;
                array = rowThree;
              }
              
          
            } else if (zero == 1) {
              var next = prompt('you can chose numbers ' + rowTwo[1] + ', ' + rowThree[0] +  ' and ' + rowThree[2]);
          
              if(next == rowTwo[1]) {
                var old = rowTwo[1];
                rowTwo[1] = 0;
                rowThree[1] = old;

                console.log('Sliding Puzzle');
                console.log(rowOne);
                console.log(rowTwo);
                console.log(rowThree);

                zero = 1;
                array = rowTwo;
              } else if(next == rowThree[0]) {
                var old = rowThree[0];
                rowThree[0] = 0;
                rowThree[1] = old;

                console.log('Sliding Puzzle');
                console.log(rowOne);
                console.log(rowTwo);
                console.log(rowThree);

                zero = 0;
                array = rowThree;
              } else if(next == rowThree[2]) {
                var old = rowThree[2];
                rowThree[2] = 0;
                rowThree[1] = old;

                console.log('Sliding Puzzle');
                console.log(rowOne);
                console.log(rowTwo);
                console.log(rowThree);

                zero = 2;
                array = rowThree;
              }

            } else if(zero == 2) {
              var next = prompt('you can chose numbers ' + rowTwo[2] + ' and ' + rowThree[1]);
              
              if (next == rowTwo[2]) {
                  rowThree[2] = rowTwo[2];
                  rowTwo[2] = 0;
          
                  console.log(rowOne);
                  console.log(rowTwo);
                  console.log(rowThree);

                  zero = 2;
                  array = rowTwo;
              } else if (next == rowThree[1]) {
                  var old = rowThree[1];
                  rowThree[1] = rowThree[2];
                  rowThree[2] = old;
          
                  console.log(rowOne);
                  console.log(rowTwo);
                  console.log(rowThree);   
                  
                  zero = 1;
                  array = rowThree;
              }

            }
          } else if (array == rowTwo) {
            if (zero == 0) {
                var next = prompt('you can chose numbers ' + rowOne[0] + ', ' + rowTwo[1] +  ' and ' + rowThree[0]);
            
                if (next == rowOne[0]) {
                  var old = rowOne[0];
                  rowTwo[0] = old;
                  rowOne[0] = 0;
  
                  console.log('Sliding Puzzle'); 
                  console.log(rowOne);
                  console.log(rowTwo);
                  console.log(rowThree);
  
                  zero = 0;
                  array = rowOne;
                } else if (next == rowTwo[1]) {
                  var old = rowTwo[1];
                  rowTwo[1] = 0;
                  rowTwo[0] = old;
  
                  console.log('Sliding Puzzle'); 
                  console.log(rowOne);
                  console.log(rowTwo);
                  console.log(rowThree);
  
                  zero = 1;
                  array = rowTwo;
                } else if(next == rowThree[0]) {
                    var old = rowThree[0];
                    rowThree[0] = 0;
                    rowTwo[0] = old;
    
                    console.log('Sliding Puzzle'); 
                    console.log(rowOne);
                    console.log(rowTwo);
                    console.log(rowThree);
    
                    zero = 0;
                    array = rowThree;
                }           
            
              } else if (zero == 1) {
                var next = prompt('you can chose numbers ' + rowTwo[0] + ', ' + rowThree[1] +  ', ' + rowTwo[2] + ', ' + rowOne[1]);
            
                if(next == rowTwo[0]) {
                  var old = rowTwo[0];
                  rowTwo[1] = old;
                  rowTwo[0] = 0;
  
                  console.log('Sliding Puzzle'); 
                  console.log(rowOne);
                  console.log(rowTwo);
                  console.log(rowThree);
  
                  zero = 0;
                  array = rowTwo;
                } else if(next == rowThree[1]) {
                  var old = rowThree[1];
                  rowTwo[1] = old;
                  rowThree[1] = 0;
  
                  console.log('Sliding Puzzle'); 
                  console.log(rowOne);
                  console.log(rowTwo);
                  console.log(rowThree);
  
                  zero = 1;
                  array = rowThree;
                } else if(next == rowTwo[2]) {
                  var old = rowTwo[2];
                  rowTwo[2] = 0;
                  rowTwo[1] = old;
  
                  console.log('Sliding Puzzle'); 
                  console.log(rowOne);
                  console.log(rowTwo);
                  console.log(rowThree);
  
                  zero = 2;
                  array = rowTwo;
                } else if (next == rowOne[1]) {
                    var old = rowOne[1];
                    rowTwo[1] = old;
                    rowOne[1] = 0;

                    console.log('Sliding Puzzle'); 
                    console.log(rowOne);
                    console.log(rowTwo);
                    console.log(rowThree);

                    zero = 1;
                    array = rowOne;
                }
  
              } else if(zero == 2) {
                var next = prompt('you can chose numbers ' + rowTwo[1] + ', ' + rowThree[2] +  ' and ' + rowOne[2]);
                
                if (next == rowTwo[1]) {
                    var old = rowTwo[1];
                    rowTwo[1] = 0;
                    rowTwo[2] = old;
            
                    console.log('Sliding Puzzle'); 
                    console.log(rowOne);
                    console.log(rowTwo);
                    console.log(rowThree);
  
                    zero = 1;
                    array = rowTwo;
                } else if (next == rowThree[1]) {
                    var old = rowThree[1];
                    rowThree[1] = 0;
                    rowTwo[2] = old;
            
                    console.log('Sliding Puzzle'); 
                    console.log(rowOne);
                    console.log(rowTwo);
                    console.log(rowThree);   
                    
                    zero = 1;
                    array = rowThree;
                } else if(next == rowOne[2]) {
                    var old = rowOne[2];
                    rowOne[2] = 0;
                    rowTwo[2] = old;
            
                    console.log('Sliding Puzzle'); 
                    console.log(rowOne);
                    console.log(rowTwo);
                    console.log(rowThree);   
                    
                    zero = 2;
                    array = rowOne;
                }
  
              }


          } else if (array == rowOne) {
            if (zero == 0) {
                var next = prompt('you can chose numbers ' + rowTwo[0] + ' and ' + rowOne[1]);
            
                if (next == rowTwo[0]) {
                  var old = rowTwo[0];
                  rowTwo[0] = 0;
                  rowOne[0] = old;
  
                  console.log('Sliding Puzzle');
                  console.log(rowOne);
                  console.log(rowTwo);
                  console.log(rowThree);
  
                  zero = 0;
                  array = rowTwo;
  
                } else if (next == rowOne[1]) {
                  var old = rowOne[1];
                  rowOne[1] = 0;
                  rowOne[0] = old;
  
                  console.log('Sliding Puzzle');
                  console.log(rowOne);
                  console.log(rowTwo);
                  console.log(rowThree);
  
                  zero = 1;
                  array = rowOne;
                }
                
            
              } else if (zero == 1) {
                var next = prompt('you can chose numbers ' + rowOne[0] + ', ' + rowTwo[1] +  ' and ' + rowOne[2]);
            
                if(next == rowOne[0]) {
                  var old = rowOne[0];
                  rowOne[1] = old;
                  rowOne[0] = 0;
  
                  console.log('Sliding Puzzle');
                  console.log(rowOne);
                  console.log(rowTwo);
                  console.log(rowThree);
  
                  zero = 0;
                  array = rowOne;
                } else if(next == rowTwo[1]) {
                  var old = rowTwo[1];
                  rowTwo[1] = 0;
                  rowOne[1] = old;
  
                  console.log('Sliding Puzzle');
                  console.log(rowOne);
                  console.log(rowTwo);
                  console.log(rowThree);
  
                  zero = 1;
                  array = rowTwo;
                } else if(next == rowOne[2]) {
                  var old = rowOne[2];
                  rowOne[2] = 0;
                  rowOne[1] = old;
  
                  console.log('Sliding Puzzle');
                  console.log(rowOne);
                  console.log(rowTwo);
                  console.log(rowThree);
  
                  zero = 2;
                  array = rowOne;
                }
  
              } else if(zero == 2) {
                var next = prompt('you can chose numbers ' + rowTwo[2] + ' and ' + rowOne[1]);
                
                if (next == rowTwo[2]) {
                    var old = rowTwo[2];
                    rowTwo[2] = 0;
                    rowOne[2] = old;
            
                    console.log('Sliding Puzzle');
                    console.log(rowOne);
                    console.log(rowTwo);
                    console.log(rowThree);
  
                    zero = 2;
                    array = rowTwo;

                } else if (next == rowOne[1]) {
                    var old = rowOne[1];
                    rowOne[1] = 0;
                    rowOne[2] = old;
            
                    console.log('Sliding Puzzle');
                    console.log(rowOne);
                    console.log(rowTwo);
                    console.log(rowThree);   
                    
                    zero = 1;
                    array = rowOne;
                }
  
              }
          }


    }
  }
 }

}




