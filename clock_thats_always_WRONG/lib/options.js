const Tclock = document.getElementById("clock");

function changeTheme(theme){
    switch(theme){
        case 'dark':
            changeClock([['b', 'black'], ['t', 'white']]);
            console.log("check");
            break;
        case 'default':
            changeClock([['b', 'white'], ['t', 'black']]);
            break;
        case 'blue':
            changeClock([['b', '#00030f'], ['t', '#4d6dff']]);
            break;
        case 'red':
            changeClock([['b', '#210000'], ['t', '#ff8a8a']]);
            break;
        case 'green':
            changeClock([['b', '#081700'], ['t', '#a5ff78']]);
            break;
        case 'purple':
            changeClock([['b', '#0a0012'], ['t', '#c675ff']]);
            break;
    }
}

function changeClock(styles){
    for(var style of styles){
        switch(style[0]){
            case 't':
                Tclock.style.color = style[1];
                break;
            case 'b':
                document.body.style.backgroundColor = style[1];
                break;
            default:
                console.log("error!");
                break;
        }
    }
}