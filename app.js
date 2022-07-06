let score = [1,2,3,4,5,6];
var turn;
var max=30;

//Team 1 details
var team1 = {
    name:"Team 1",
    score: 0
}

//Team 2 details
var team2 = {
    name:"Team 2",
    score: 0
}

let MaxScore = () => {
    max=parseInt(prompt('Enter the minimum score to win: '));
    if (!max>0)
        {
            max=30;
            alert("Since you have not entered any number, by default the wining score is 30");
        }
    document.getElementById("Heading").innerText='Who ever will score '+max+" first will win!!"
}

window.onload = () => {
    MaxScore();
    //Decide who is gonna roll first
    selectTurn();
    //Update the text on the button
    updateButtonText();
    //Update the initial score
    updateScore();
    //Update team names
    updateNames();
}

let selectTurn = () => {
    turn=Math.round(Math.random())+1;
}

let updateButtonText = () => {
    var button = document.getElementById("striker-button");
    var result = document.getElementById("result");
    result.style.visibility="";
    //check if game is over or not
    if(team1.score>=max || team2.score>max){
        button.remove();
    //To check who wins the match
    result.textContent=team1.score===team2.score?'Match Draw':`${team1.score>team2.score? team1.name : team2.name} Wins`;
    }
    else{
        turn=turn===1?2:1;
        button.textContent = `${turn === 1? team1.name : team2.name} Roll the dice`;
    }
}

let updateScore = () => {
    document.getElementById("team-1-score").textContent=team1.score;
    document.getElementById("team-2-score").textContent=team2.score;
    console.log("Team 1: "+team1.score);
    console.log("Team 2: "+team2.score);
    //updateRuns();
}

let updateNames = () => {
    document.getElementById("team-1").textContent=team1.name;
    document.getElementById("team-2").textContent=team2.name;
}

var ButtonClick = () => {
    var runs = score[Math.floor(Math.random()*5)+1];
    if (runs===1)
    {
        document.getElementById("Dice").innerHTML='<img src="1.jpeg" alt="Dice Score 1">';
    }
    else if (runs===2)
    {
        document.getElementById("Dice").innerHTML='<img src="2.jpeg" alt="Dice Score 2">';
    }
    else if (runs===3)
    {
        document.getElementById("Dice").innerHTML='<img src="3.jpeg" alt="Dice Score 3">';
    }
    else if (runs===4)
    {
        document.getElementById("Dice").innerHTML='<img src="4.jpeg" alt="Dice Score 4">';
    }
    else if (runs===5)
    {
        document.getElementById("Dice").innerHTML='<img src="5.jpeg" alt="Dice Score 5">';
    }
    else
    {
        document.getElementById("Dice").innerHTML='<img src="6.jpeg" alt="Dice Score 6">';
    }

    if(turn==1){
        team1.score+=runs;
        console.log("team1.runs: "+runs)
    }
    else{
        team2.score+=runs;
    }
    updateButtonText();
    updateScore();
}



/*var updateRuns = () =>{


    //console.log(team1.runs.length);
    //var button = document.getElementById("striker-button");
    //turn=team1.runs.length===6?2:team2.runs.length===6?1:turn;
    //button.textContent = `${turn === 1? team1.name : team2.name} Batting`;

    team1.runs.forEach ((runs,index) =>{
        teamOne[index].textContent=runs;
    })
    team2.runs.forEach ((runs,index) =>{
        teamTwo[index].textContent=runs;
    })
}*/
