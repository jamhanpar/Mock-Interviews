
// Chess Board
//    _______________
// 8 |_|_|K|_|_|_|_|_|
// 7 |_|_|_|K|_|_|_|_|
// 6 |_|_|_|_|_|_|_|_|
// 5 |_|_|_|_|_|_|_|_|
// 4 |_|_|_|_|_|_|_|_|
// 3 |_|_|_|K|_|_|_|_|
// 2 |_|K|_|_|_|_|_|_|
// 1 |_|_|_|_|_|_|_|_|
//    a b c d e f g h

matrix = [
  [' ',' ','K',' ',' ',' ',' ',' '],
  [' ',' ',' ','K',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ','Obj',' ',' ',' ',' '],
  [' ','Obj',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' ']	
]

// Knight Object
// {
// 	pieceType: 'Knight'
// 	color: 'white'
// }

// Empty Space Object
// {
// 	pieceType: ' ',
// 	color: false,
// }

function availableMoves(matrix, colorInput) { // 'white'
  let availablePositions = []; // => {} key => '0 : 2' : [ [], [], [], [] ]

	// the row
	for (let i = 0; i < matrix.length; i++) {
  	// the column
  	for (let j = 0; j < matrix.length; j++) {
        // make all positions into objects with pieceType and color
		// matrix[i][j] === ''.pieceType   .color
    	if (matrix[i][j].pieceType === 'Knight' && matrix[i][j].color === colorInput) {
      	availablePositions.push(...checkPosAvailable(i, j, matrix, colorInput)) // [ [[] [] []] , []]
      }
    }
  }
  
  return availablePositions;
}

function checkPosAvailable(x, y, matrix, colorInput) {
	let combo = [
  	[x-2, y+1], // up right
    [x-2, y-1], // up left
    [x+2, y+1], // ...
    [x+2, y-1],
    [x+1, y-2],
    [x-1, y-2],
    [x+1, y+2],
    [x-1, y+2],
  ]
  
  let results = [];
  
  for (let i = 0; i < combo.length; i++) {
    // make code more readable
  	// matrix[combo[i][0][combo[i][1]] === ' '
    // let move = combo[i]
    // let newX = move[0]
    // let newY = move[1]
    
    // watch out for first index being undefined
    //matrix[-2] => undefined[2] => break code
    
    // check boundaries
    // if( newX >= 0 && newX < matrix.length ...
	// 	if( matrix[newX] && matrix[newX][newY] === ''){
    
    // }
    
  	if (matrix[newX][newY] !== undefined || 
    		matrix[newX][newY] === '') { 
        results.push([newX, newY])
    } else if (matrix[newX][newY].pieceType === 'Knight' &&
    	matrix[newX][newY].color !== colorInput) {
      
    	results.push([newX, newY])
    }
  }
  
  return results;
}