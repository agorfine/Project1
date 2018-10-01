
let winningSquaresMobile = ['C1', 'C2', 'A4', 'B4', 'E2', 'E3']
let checkWinningSquaresMobile = []

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
let E1 = document.querySelector('#E1')
let E2 = document.querySelector('#E2')
let E3 = document.querySelector('#E3')
let E4 = document.querySelector('#E4')
let E5 = document.querySelector('#E5')
let h1 = document.querySelector('h1')

let intro1 = document.querySelector('.intro1')
let nextButton = document.querySelector('.next')
let intro2 = document.querySelector('.beforeIntro2')
let playButton = document.querySelector('.playButton')
let loadPageContainer = document.querySelector('.loadPageContainer')
let video = document.querySelector('.video')
let column5 = document.querySelector('.column5')
let board = document.querySelector(".board")


let screen = window.matchMedia("(max-width: 600px)")

function mediaScreen1 (screen){
	if (screen.matches) {
		column5.classList.add('hidden')
		// screen1.removeListener(mediaScreen2)
		// screen.addListener(mediaScreen1)
		
		function next () {
			intro1.classList.add('hidden')
			intro1.classList.remove('intro1')
			nextButton.classList.add('hidden')
			nextButton.classList.remove('next')
			intro2.classList.add('intro2')
			intro2.classList.remove('hidden')
			playButton.classList.add('playButton')
			playButton.classList.remove('hidden')
			video.classList.remove('hidden')
		}

		nextButton.addEventListener('click', next)

		function loadGame() {
			
			board.classList.remove('hidden')
			h1.classList.remove('hidden')
			loadPageContainer.classList.remove('loadPageContainer')
			loadPageContainer.classList.add('hidden')
		}

		playButton.addEventListener('click', loadGame)


		function playGameMobile (event) {
			let square = event.target.id
					
			if (document.getElementById(event.target.id) === C1) {
				document.getElementById(event.target.id).classList.add('boat1Part1')
				checkWinningSquaresMobile.push('C1')
			} else if (document.getElementById(event.target.id) === C2){
				document.getElementById(event.target.id).classList.add('boat1Part2')
				checkWinningSquaresMobile.push('C2')
			} else if (document.getElementById(event.target.id) === A4){
				document.getElementById(event.target.id).classList.add('boat2Part1')
				checkWinningSquaresMobile.push('A4')
			} else if (document.getElementById(event.target.id) === B4) {
				document.getElementById(event.target.id).classList.add('boat2Part2')
				checkWinningSquaresMobile.push('B4')
			} else if (document.getElementById(event.target.id) === E2) {
				document.getElementById(event.target.id).classList.add('boat3Part1')
				checkWinningSquaresMobile.push('E2')
			} else if (document.getElementById(event.target.id) === E3) {
				document.getElementById(event.target.id).classList.add('boat3Part2')
				checkWinningSquaresMobile.push('E3')
			} else {
				document.getElementById(event.target.id).classList.add('snowflake')
			}
				// console.log(checkWinningSquares)
			checkWinnerMobile();
		}	

		board.addEventListener('click', playGameMobile)

		let resetText= document.querySelector('#resetText')
		let resetButton = document.querySelector('#resetButton')
		let container = document.querySelector('#playAgain')
		let annaElsa = document.querySelector('#annaElsa')

		function checkWinnerMobile() {

			if (winningSquaresMobile.length === checkWinningSquaresMobile.length) {
				resetButton.classList.add('playAgainMobile')
				resetText.textContent = "Congratulations! You helped Queen Elsa and Princess Anna defeat the Duke of Weselton!"
				resetText.classList.add('winningScreenMobile')
				container.classList.add('playAgainContainerMobile')
				resetButton.classList.remove('hidden')
				resetButton.textContent = "Play Again"
				annaElsa.classList.remove('hidden')
				annaElsa.classList.add('annaElsaPicMobile')
				h1.classList.add('hidden')
				board.classList.add('hidden')

			}	
		}

		function resetGameMobile () {
			resetButton.classList.remove('playAgainMobile');
			resetButton.classList.add('hidden')
			resetText.classList.remove('winningScreenMobile');
			resetText.classList.add('hidden')
			container.classList.remove('playAgainContainerMobile');
			board.classList.remove('hidden')
			board.classList.add('board')
			h1.classList.remove('hidden')
			annaElsa.classList.add('hidden')

			A1.classList.remove('snowflake');
			A2.classList.remove('snowflake');
			A3.classList.remove('snowflake');
			A4.classList.remove('boat2Part1');
			B1.classList.remove('snowflake');
			B2.classList.remove('snowflake');
			B3.classList.remove('snowflake');
			B4.classList.remove('boat2Part2');
			C1.classList.remove('boat1Part1');
			C2.classList.remove('boat1Part2');
			C3.classList.remove('snowflake');
			C4.classList.remove('snowflake');
			D1.classList.remove('snowflake');
			D2.classList.remove('snowflake');
			D3.classList.remove('snowflake');
			D4.classList.remove('snowflake');
			E1.classList.remove('snowflake');
			E2.classList.remove('boat3Part1');
			E3.classList.remove('boat3Part2');
			E4.classList.remove('snowflake');
			checkWinningSquaresMobile = []
		}

		playAgain.addEventListener('click',resetGameMobile)
	}
	// screen.addListener(mediaScreen1)
	// screen1.removeListener(mediaScreen2)

}

mediaScreen1(screen);
screen.addListener(mediaScreen1)


let screen1 = window.matchMedia("(min-width: 600px)")

function mediaScreen2 (screen){
	if (screen.matches) {
		column5.classList.remove('hidden')
		// screen.removeListener(mediaScreen1)
		// screen1.addListener(mediaScreen2)

		function next () {

		intro1.classList.add('hidden')
		intro1.classList.remove('intro1')
		nextButton.classList.add('hidden')
		nextButton.classList.remove('next')
		intro2.classList.add('intro2')
		intro2.classList.remove('hidden')
		playButton.classList.add('playButton')
		playButton.classList.remove('hidden')
		video.classList.remove('hidden')
	}

	nextButton.addEventListener('click', next)

	let h1 = document.querySelector('h1')

	function loadGame() {
		
		board.classList.remove('hidden')
		h1.classList.remove('hidden')
		loadPageContainer.classList.remove('loadPageContainer')
		loadPageContainer.classList.add('hidden')
	}

	playButton.addEventListener('click', loadGame)

	function playGame (event) {
		let square = event.target.id
			
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
			let resetText= document.querySelector('#resetText')
			let resetButton = document.querySelector('#resetButton')
			let container = document.querySelector('#playAgain')

			if (winningSquares.length === checkWinningSquares.length) {
				board.classList.add('hidden')
				h1.classList.add('hidden')
				resetButton.classList.add('playAgain')
				resetText.textContent = "Congratulations! You helped Queen Elsa and Princess Anna defeat the Duke of Weselton!"
				resetText.classList.add('winningScreen')
				container.classList.add('playAgainContainer')
				resetButton.textContent = "Play Again"
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
			let E1 = document.querySelector('#E1')
			let E2 = document.querySelector('#E2')
			let E3 = document.querySelector('#E3')
			let E4 = document.querySelector('#E4')
			let E5 = document.querySelector('#E5')

			function resetGame () {
				resetButton.classList.remove('playAgain');
				resetText.classList.remove('winningScreen');
				container.classList.remove('playAgainContainer');
				board.classList.remove('hidden')
				h1.classList.remove('hidden')
				A1.classList.remove('boat1Part1');
				A2.classList.remove('boat1Part2');
				A3.classList.remove('boat1Part3');
				A4.classList.remove('snowflake');
				A5.classList.remove('snowflake');
				B1.classList.remove('snowflake');
				B2.classList.remove('snowflake');
				B3.classList.remove('snowflake');
				B4.classList.remove('snowflake');
				B5.classList.remove('boat2Part1');
				C1.classList.remove('snowflake');
				C2.classList.remove('snowflake');
				C3.classList.remove('snowflake');
				C4.classList.remove('snowflake');
				C5.classList.remove('boat2Part2');
				D1.classList.remove('snowflake');
				D5.classList.remove('boat2Part3');
				D2.classList.remove('boat3Part1');
				D3.classList.remove('boat3Part2');
				D4.classList.remove('snowflake');
				E1.classList.remove('snowflake');
				E2.classList.remove('snowflake');
				E3.classList.remove('snowflake');
				E4.classList.remove('snowflake');
				E5.classList.remove('snowflake');
				checkWinningSquares = []
			}
			playAgain.addEventListener('click',resetGame)
		};

	}
	// screen1.addListener(mediaScreen2)
	// screen.removeListener(mediaScreen1)
}

mediaScreen2(screen1);
screen1.addListener(mediaScreen2)




