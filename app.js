function rollDice() {
    const randomNum = Math.floor(Math.random()*6+1);
    const randomNumTwo = Math.floor(Math.random()*6+1);

    document.getElementById('diceOne').innerHTML = randomNum;
    document.getElementById('diceTwo').innerHTML = randomNumTwo;
    
    const result = document.getElementById('result');

    result.innerHTML = `You rolled ${randomNum} and ${randomNumTwo}`;

    if (randomNum === randomNumTwo){
        result.innerHTML = "You rolled double! Have an extra roll!";
    };
};







