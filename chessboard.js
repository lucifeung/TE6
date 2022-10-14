
 var size = 8;   //chessboard
 const  makeboard = function(x) {
 var chessboard = '';

//the for loop controlling the lines
	for ( var i = 0 ; i < x;  i++) {

		//the for loop controlling the characters
	  for (var j = 0; j < x; j++)  {

			//checkingboard position for character value
			 if ((i+j) %2 == 0) {   //meaning size is an even number
				 chessboard += ' ';
			 } else  {
				 chessboard += '#';
			 }

		}
	chessboard += '\n';
	}
 console.log (chessboard);
}

makeboard (size);
