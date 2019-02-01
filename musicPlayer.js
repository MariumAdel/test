var musicArr = ["music1.mp3", "music2.mp3", "music3.mp3", "music4.mp3"];
var musicSrc = document.getElementById("musicSrc");
var audioTag = document.getElementById("aud");
var trk1 = document.getElementById("trk1");
var trk2 = document.getElementById("trk2");
var trk3 = document.getElementById("trk3");
var trk4 = document.getElementById("trk4");
var repeat = document.getElementById("repeatBtn");
var shuffle = document.getElementById("shuffleBtn");
var repeatFlag = 0;
var shuffleFlag = 0;
var shuffleInd = 0;
var count = 0;
var sCount = 0;
var shuffledArr = [];
var randNum = 0;


trk1.addEventListener("click", function () {
    audioTag.src = musicArr[0];
    audioTag.play();
    count = 0;

})

trk2.addEventListener("click", function () {
    audioTag.src = musicArr[1];
    audioTag.play();
    count = 1;
})

trk3.addEventListener("click", function () {
    audioTag.src = musicArr[2];
    audioTag.play();
    count = 2;
})

trk4.addEventListener("click", function () {
    audioTag.src = musicArr[3];
    audioTag.play();
    count = 3;
})

repeat.addEventListener("click", function () {
    if (repeatFlag == 0) {
        repeat.style.backgroundColor = "green";
        repeatFlag = 1;
    }
    else {
        repeat.style.backgroundColor = "cornflowerblue";
        repeatFlag = 0;
    }

});

shuffle.addEventListener("click", function () {

    if (shuffleFlag == 0) {
        shuffledArr = [];
        for (var i = 0; i < 4; i++) {
            randNum = Math.floor(Math.random() * 10);
            while (randNum > 3.0) {
                randNum = Math.floor(Math.random() * 10);
            }

            for (var j = 0; j < shuffledArr.length; j++) {

                if (musicArr[randNum] == shuffledArr[j]) {
                    randNum = Math.floor(Math.random() * 10);
                    while (randNum > 3.0) {
                        randNum = Math.floor(Math.random() * 10);
                    }
                    j = -1;

                }

            }
            shuffledArr[j] = musicArr[randNum];
        }


        shuffle.style.backgroundColor = "green";
        shuffleFlag = 1;
    }
    else {
        shuffle.style.backgroundColor = "cornflowerblue";
        shuffleFlag = 0;
    }

})

audioTag.addEventListener("ended", function (e) {
    count++;

    if (count == 4 && repeatFlag == 1) {
        count = 0;
    }
    if (count < 4) {
        if (shuffleFlag == 0) {
            audioTag.src = musicArr[count];
        }
        else if (shuffleFlag == 1) {
            audioTag.src = shuffledArr[count];
        }
        audioTag.play();


    }



})


