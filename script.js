
// mouse hover function
function playGame (event) {
	let square = event.target.id

	// console.log(event.target.id)
	// console.log(A1)
	
	if (document.getElementById(event.target.id) === A1) {
		document.getElementById(event.target.id).classList.add('boat1Part1')
		checkWinningSquares.push('A1')
	} else if (document.getElementById(event.target.id) === A2){
		document.getElementById(event.target.id).classList.add('boat1Part2')
		checkWinningSquares.push('A2')
	} else if (document.getElementById(event.target.id) === A3){
		document.getElementById(event.target.id).classList.add('boat1Part3')
		checkWinningSquares.push('A3')
	} else if (document.getElementById(event.target.id) === B5) {
		document.getElementById(event.target.id).classList.add('boat2Part1')
		checkWinningSquares.push('B5')
	} else if (document.getElementById(event.target.id) === C5) {
		document.getElementById(event.target.id).classList.add('boat2Part2')
		checkWinningSquares.push('C5')
	} else if (document.getElementById(event.target.id) === D5) {
		document.getElementById(event.target.id).classList.add('boat2Part3')
		checkWinningSquares.push('D5')
	} else if (document.getElementById(event.target.id) === D2) {
		document.getElementById(event.target.id).classList.add('boat3Part1')
		checkWinningSquares.push('D2')
	} else if (document.getElementById(event.target.id) === D3) {
		document.getElementById(event.target.id).classList.add('boat3Part2')
		checkWinningSquares.push('D3')
	} else {
		document.getElementById(event.target.id).classList.add('snowflake')
	}
	// console.log(checkWinningSquares)
	checkWinner();
}	

let board = document.querySelector(".board")

board.addEventListener('click', playGame)

let winningSquares = ['A1', 'A2', 'A3', 'B5', 'C5', 'D5', 'D2', 'D3']
let checkWinningSquares = []

function checkWinner() {
	let p= document.querySelector('p')
	let playAgain = document.querySelector('button')
	let container = document.querySelector('#playAgain')

	if (winningSquares.length === checkWinningSquares.length) {
		playAgain.classList.add('playAgain')
		p.textContent = "Congratulations! You helped Queen Elsa defeat the Duke of Weselton!"
		p.classList.add('winningScreen')
		container.classList.add('playAgainContainer')
		playAgain.textContent = "Play Again"
	}

	let A1 = document.querySelector('#A1')
	let A2 = document.querySelector('#A2')
	let A3 = document.querySelector('#A3')
	let A4 = document.querySelector('#A4')
	let A5 = document.querySelector('#A5')
	let B1 = document.querySelector('#B1')
	let B2 = document.querySelector('#B2')
	let B3 = document.querySelector('#B3')
	let B4 = document.querySelector('#B4')
	let B5 = document.querySelector('#B5')
	let C1 = document.querySelector('#C1')
	let C2 = document.querySelector('#C2')
	let C3 = document.querySelector('#C3')
	let C4 = document.querySelector('#C4')
	let C5 = document.querySelector('#C5')
	let D1 = document.querySelector('#D1')
	let D2 = document.querySelector('#D2')
	let D3 = document.querySelector('#D3')
	let D4 = document.querySelector('#D4')
	let D5 = document.querySelector('#D5')
	

	function resetGame () {
		playAgain.classList.remove('playAgain')
		p.classList.remove('winningScreen')
		container.classList.remove('playAgainContainer')
		A1.classList.remove('boat1Part1')
		A2.classList.remove('boat1Part2')
		A3.classList.remove('boat1Part3')
		A4.classList.remove('snowflake')
		A5.classList.remove('snowflake')
		B1.classList.remove('snowflake')
		B2.classList.remove('snowflake')
		B3.classList.remove('snowflake')
		B4.classList.remove('snowflake')
		B5.classList.remove('boat2Part1')
		C1.classList.remove('snowflake')
		C2.classList.remove('snowflake')
		C3.classList.remove('snowflake')
		C4.classList.remove('snowflake')
		C5.classList.remove('boat2Part2')
		D1.classList.remove('snowflake')
		D5.classList.remove('boat2Part3')
		D2.classList.remove('boat3Part1')
		D3.classList.remove('boat3Part2')
		D4.classList.remove('snowflake')
		
		checkWinningSquares = []

	}

	playAgain.addEventListener('click',resetGame)
}




