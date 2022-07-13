import {useState} from 'react'
function Dice({number, setNumber, setDealerNumber, sides, winLoseOrDraw}){
    console.log(sides)
    let dice = {
        sides: sides,
        roll: function () {
          let randomNumber = Math.floor(Math.random() * this.sides) + 1;
          let dealer =Math.floor(Math.random() * this.sides) + 1;
          setDealerNumber(dealer)
          return randomNumber;
        }
      }
      
      //Prints dice roll to the page
      
      function roll() {
        let result = dice.roll();
        //printNumber(result);
        winLoseOrDraw()
        setNumber(result)
      };
return(
    <div id="dice">
          <p id="placeholder">{number}
  
  </p>
  <button className="placeholder" onClick={roll} id="button">Roll Dice</button>
  <script src="dice.js"></script>
  <script src="ui.js"></script>
    </div>
)
}

export default Dice;