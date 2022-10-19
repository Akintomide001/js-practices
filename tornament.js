function tornamentwinner(competitions,result) {
    let scores= {}
    for(let i = 0; i< result.length; i++){
        const home = competitions[i][0]
        const away = competitions[i][1]
        if ( result [i]==0){
            if (scores[away]=== undefined) scores [away] = 0;
            scores = {...scores,[away]: scores[away] + 3};
            console.log(`${away} won against ${home}`);
        } else {
            if (scores[home]=== undefined) scores [home] = 0;
            scores = {...scores,[home]: scores[home] + 3};
            console.log(`${home} won against ${away}`);

        }
    }
    let winner;
    for (const team in scores){
        if (winner == undefined || scores[team] > scores[winner]){
            winner = team;
        }
        console.log (`${team} has ${scores[team]} points`);
    }
    console.log (`the winner is ${winner}`);
}

const competitions = [["HTML","C#"],["C#","Python"],["Python", "HTML"]];
const result = [0,0,1];

tornamentwinner(competitions,result)