/*
Rock = 0
Paper = 1
Scissors = 2
*/


function game(choice) {
  let npcInput = Math.floor(Math.random()*3);

  function npcConvert() {
    if (npcInput === 0) npcChoice = "rock"
    else if (npcInput === 1) npcChoice = "paper"
    else if (npcInput === 2) npcChoice = "scissors"
  }

  npcConvert()
  if (npcInput === choice) console.log("Game is a Tie");
  else if (npcInput === 0 && choice === 1) console.log(`You Win, your paper beats ${npcChoice}`);
  else if (npcInput === 1 && choice === 2) console.log(`You Win, your scissors beats ${npcChoice}`);
  else if (npcInput === 2 && choice === 0) console.log(`You Win, your rock beats ${npcChoice}`);

  else if (npcInput === 1 && choice === 0) console.log(`You lose, ${npcChoice} beats your rock`);
  else if (npcInput === 2 && choice === 1) console.log(`You lose, ${npcChoice} beats your paper`);
  else if (npcInput === 0 && choice === 2) console.log(`You lose, ${npcChoice} beats your scissors`);
}

