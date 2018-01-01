/* FizzBuzz

- Imprimir Buzz cuando sea modulo de 3
- Imprimir Fizz cuando sea modulo de 3
- Imprimir BuzzFizz cuando sea modulo de 3 y de 5

*/


for (var i = 1; i <= 100; i++){
	if(i % 3 === 0)
		console.log("Buzz");
	if(i % 5 === 0)
		console.log("Fizz");
	if(i % 5 === 0 && i % 3 === 0)
		console.log("BuzzFizz");
	else 
		console.log(i);
}