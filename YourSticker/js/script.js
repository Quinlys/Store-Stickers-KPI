

// Переход на следующий уровень //

function nextLevel() {
    let firstLevel = document.getElementsByClassName('level-one');
    let secondLevel = document.getElementsByClassName('level-two');
    let info = (firstLevel[0].style.display === "block");
    if (info) {
        let colOp = 1;
        function fadeOutFunk() {                            // Функция на исчезновение объекта.
            colOp -= 0.05;
            firstLevel[0].style.opacity=colOp.toString();
        }

        let timer = setInterval(fadeOutFunk, 25);

        function func() {
            clearInterval(timer);
            firstLevel[0].style.display = "none";

            secondLevel[0].style.display = "block";
        }
        setTimeout(func, 500);

        let colOpUp=0;
        function fadeUpFunk() {
            console.log("f2 "+ colOpUp.toString());
            colOpUp+=0.05;
            secondLevel[0].style.opacity=colOpUp.toString();
            secondLevel[1].style.opacity=colOpUp.toString();
        }
        let upTimer = setInterval(fadeUpFunk, 50);
        function func1() {
            clearInterval(upTimer);
        }

        setTimeout(func1, 1000);
        document.getElementsByClassName('accessCode')[0].style.display='block';
    }
}

function goToThirdLevel() {
    let thirdLevel = document.getElementsByClassName('level-three');
    let secondLevel = document.getElementsByClassName('level-two');

    let colOp=1;
    function fadeOutFunk() {
        console.log("n "+ colOp.toString());
        colOp-=0.1;
        secondLevel[1].style.opacity=colOp.toString();
    }

    let timer = setInterval(fadeOutFunk, 50);

    function func() {
        clearInterval(timer);
        secondLevel[1].style.display = "none";
        thirdLevel[0].style.display = "block";
        thirdLevel[1].style.display = "block";
    }

    setTimeout(func, 500);

    function ifCheck() {
        let colOpUp=0;
        function fadeUpFunk() {
            console.log('if '+colOp);
            colOpUp+=0.1;
            thirdLevel[0].style.opacity=colOpUp.toString();
            thirdLevel[1].style.opacity=colOpUp.toString();
        }
        let upTimer = setInterval(fadeUpFunk, 50);
        function func1() {
            clearInterval(upTimer);
        }
        setTimeout(func1, 500);
    }
    setTimeout(ifCheck, 500);
}
