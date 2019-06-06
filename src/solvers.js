/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {
  var board = new Board({n:n});
  var solution = undefined; //fixme
  var matrix = board.rows()

  var hasMatrixColConflicts = function(col) {
    var numPieces = 0;

    for(var i = 0; i < matrix.length; i++) {
      if(matrix[i][col] === 1) {
        numPieces++;
        if(numPieces === 2) {
          return true;
        }
      }
    }
    return false;
  };

  var hasMatrixRowConflicts = function(row) {
    var numPieces = 0;

    for( var i = 0; i < matrix.length; i++) {
      if(matrix[row][i] === 1) {
        numPieces++;
        if(numPieces === 2) {
          return true;
        }
      }
    }
    return false;
  };

  for(var row = 0; row < matrix.length; row++) {
    for(var col = 0; col < matrix.length; col++) {
      matrix[row][col] = 1;
      if( hasMatrixColConflicts(col) || hasMatrixRowConflicts(row) ) {
        matrix[row][col] = 0;
      }
    }
  }

  // // board.togglePiece(0, 0);


  // for(var row = 0; row < board.rows().length; row++) {
  //     for(var col = 0; col < board.rows().length; col++) { 
  //       board.togglePiece(row, col);
  //       if( board.hasColConflictAt(col) || board.hasRowConflictAt(row) ){
  //         board.togglePiece(row, col);
  //       }
  //     }
  //   }


  solution = matrix;
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
