import {useState} from 'react'
function Dice(){
    const [number, setNumber]= useState()
    let dice = {
        sides: 12,
        roll: function () {
          let randomNumber = Math.floor(Math.random() * this.sides) + 1;
          return randomNumber;
        }
      }
      
      //Prints dice roll to the page
      
      function roll() {
        let result = dice.roll();
        //printNumber(result);
        setNumber(result)
      };
return(
    <div>
          <p id="placeholder">{number}
  
  </p>
  <button className="placeholder" onClick={roll} id="button">Roll Dice</button>
  <script src="dice.js"></script>
  <script src="ui.js"></script>
    </div>
)
}

export default Dice;