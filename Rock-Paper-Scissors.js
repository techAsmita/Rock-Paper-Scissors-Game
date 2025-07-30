//for reseting score we add all properties 
            //back to zero
    let score=JSON.parse(localStorage.getItem('score')) || 
    {
        wins:0,
        losses:0,
        ties:0  
    };

    updatescoreelem();

    let compmove=' ';

    function playgame(playermove)
    {
        const compmove=pickCompmove();

        result=' ';

        if(playermove==='Scissors')
        {
            if(compmove==='Rock')
        {
            result='You Lose.';
        }else if(compmove==='Paper')
        {
            result='You Win.';
        }else if(compmove==='Scissors')
        {
            result='Tie.';
        }

        }else if(playermove==='Paper')
        {
            if(compmove==='Rock')
        {
            result='You Win.';
        }else if(compmove==='Paper')
        {
            result='Tie.';
        }else if(compmove==='Scissors')
        {
            result='You Lose.';
        }

        }else if(playermove==='Rock')
        {
            if(compmove==='Rock')
        {
            result='Tie.';
        }else if(compmove==='Paper')
        {
            result='You Lose.';
        }else if(compmove==='Scissors')
        {
            result='You Win.';
        }
        }

    if(result==='You Win.')
    {
        score.wins+=1;
    }else if(result==='You Lose.')
    {
        score.losses+=1;
    }else if(result==='Tie.')
    {
        score.ties+=1;
    }
    //only supports strings in local storage.
    localStorage.setItem('score', JSON.stringify(score));

    updatescoreelem();

    document.querySelector('.js-result').innerHTML=result;
    document.querySelector('.js-moves').innerHTML=`You <img src="all images/${playermove}-emoji.png" class="rock"><img src="all images/${compmove}-emoji.png" class="scissors"> Computer`;
        
    }

    function updatescoreelem()
    {
        document.querySelector('.js-score').innerHTML
        =`Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
    }
    
    function pickCompmove()
    {
        const randomN=Math.random();
        
        if (randomN>=0 && randomN<1/3)
        {
            compmove='Rock';
        }else if(randomN>=1/3 && randomN<2/3)
        {
            compmove='Paper';
        }else if(randomN>=2/3 && randomN<1)
        {
            compmove='Scissors';
        }
    return compmove;
    }