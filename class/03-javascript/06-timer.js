let isStarted = false;

let auth = () => {

    if (isStarted == false){
        isStarted = true; // timer 작동 시작
        document.getElementById("finished").disabled = false;

        const token = String(Math.floor(Math.random() * 1000000)).padStart(6,"0");
        document.getElementById("target").innerText = token;
        document.getElementById("target").style.color = "#" + token;
    
        let time = 5
        let timer


        timer = setInterval(function(){
            if(time >= 0){
                let min = Math.floor(time / 60);
                let sec = String(time % 60).padStart(2, "0");
                document.getElementById("timer").innerText = min + ":" + sec;
                time = time - 1;
            }
            else{
                document.getElementById("finished").disabled = true;
                isStarted = false;
                clearInterval(timer)
            }
        },1000)
    }
    else {
        // 이미 작동중인 timer가 존재하면 아무것도 안함
    }


    
}