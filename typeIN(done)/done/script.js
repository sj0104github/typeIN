

    const setOfWords =[" Global warming is the latest alarm bell for the earth’s environment. ",
                       "Racism was something that he was acutely aware of as he grew up",
                       "Born on April 14th, 1891, Bhimrao Ramji Ambedkar was an Indian nationalist, jurist, Dalit leader, and Buddhist revivalist",
                       "Born into a Jewish family on 14th March 1879 in Germany, Einstein had early speech difficulties, still he was a topper at the elementary school "];
    const msg = document.getElementById('msg');
    const typedWords = document.getElementById('words');


    

    const textArea = document.getElementById('words');
    let randomNumber = Math.floor(Math.random()*setOfWords.length);
    msg.innerText = setOfWords[randomNumber];
    typedWords.placeholder = msg.innerText;
    let startTime, endTime,count = 0,timeInterval;
    const playGame = () =>{
        let date = new Date();
         count = 0;
        startTime = getInSecond(date.getTime())
        console.log('st',startTime)
        btn.innerText = "Done";
        // setTimeout(()=>alert('time up'),5000);
        // changeTime()
        timeInterval = setInterval(changeTime,1000)
        
      document.getElementById('msg');
    }
    // setTimeout(()=>()=>{
    //         document.getElementsByClassName('timer').innerText = ++count;
    // },1000)
    /*const changeTime = () =>{
        console.log('setiing')
        document.getElementById('timer').innerHTML = ++count;
        // setInterval(changeTime,1000)
        if(count === 10) {
            clearInterval(timeInterval)
        }
    }
    */
    const endPlay = () =>{
        let date = new Date();
        endTime = date.getTime();
        let totalTime = ((endTime - startTime)/ 1000);
        console.log(totalTime); 

        let totalStr = typedWords.value;
        let wordCount = wordCounter(totalStr);

        let speed = Math.round((wordCount / totalTime)*60)


        let finalmsg =  +speed+ "wpm  ";

        finalmsg += comparewords(msg.innerText,totalStr);

        msg.innerText = finalmsg;
    }

    const comparewords = (str1, str2) =>{
        let words1 = str1.split(" ");
        let words2 = str2.split(" ");
        let cnt =0;

        words1.forEach(function (item, index){
            if (item == words2[index]){
                cnt++
            }
        })
        let errorwords = (words1.length - cnt);
        return (cnt + " " + "correct out of" +" "+ words1.length + "words and the total number of errors are"+" " + errorwords + "."
        )

    }
    const getInSecond = (time) => Math.floor(time/1000);
    const wordCounter = (str) =>{
        let response = str.split(" ").length
        console.log(response);
        return response
    }
    typedWords.addEventListener('keydown',(e)=>{
        btn.style.display = 'none';
        console.log(typedWords.value,e.key)
        if(typedWords.value=='' && !(e.key === 'Alt' ||  e.key === 'Control' || e.key === 'Tab')) {
            console.log('started');
            typedWords.disabled=false;
            playGame();
        }
    })
    btn.addEventListener('click', function(e){
        console.log('e',e,this.innerText)
        if(this.innerText == 'Start'){
            typedWords.focus();
            btn.style.display = 'none';
            typedWords.disabled=false;
            
            playGame();
         } else if(this.innerText == "Done"){
                typedWords.disabled = true;
                btn.innerText = "Start";
                endPlay();
            }
        }
    )
    typedWords.focus();
    btn.style.display = 'none';
    // typedWords.disabled=false;

    // playGame();
