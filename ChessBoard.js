/* Chess Board

- Imprimir tablero de ajedrez

*/

var size = 8;
var board = "";
for (var i = 1; i <= size; i++){
	for(var j = 1; j <= size; j++){
		if ((i+j) % 2 == 0)
	      board += " ";
	    else
	      board += "#";
	}
	board += "\n";
}
console.log(board);