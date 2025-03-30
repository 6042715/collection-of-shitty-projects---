const time = [];

const clock = document.getElementById("clock");

function randomNum(min, max) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(Math.floor(Math.random() * (max - min + 1)) + min);
        }, 50);
    });
}

async function generateTime() {
    console.log("page loaded!");
    //generates all time!!!

    //hours
    time.push(await randomNum(0, 23));
    //minutes
    time.push(await randomNum(0, 59));
    //seconds
    time.push(await randomNum(0, 59));

    console.log("time generated:" + time.join(":"));

    clock.innerHTML = time.join(":");

    //initializes loop, but the loop is slightly too long, so that it doesn't work well!!
    setInterval(updateTime, 1053);

    
}

function updateTime(){
    console.log("mm yeah");
    time[2] += 1

    //clock logic (duhhh)
    //time[0] = hours
    //time[1] = minutes
    //time[2] = seconds

    if(time[2] == 60){
        time[1]++;
        time[2] = 0;
    }
    if(time[1] == 60){
        time[0]++;
        time[1] = 0;
    }
    if(time[0] == 24){
        time[0] = 0;
    }

    clock.innerHTML = "<p>" + time.join("<span>:</span>") + "</p>";
}

//executes starting code
generateTime();