const music = document.querySelector('audio');
const music1 = document.querySelector('#audio');
const music2 = document.querySelector('#audio1');
const music3 = document.querySelector('#audio2');

const playButton = document.getElementById('play-btn');
const playButton1 = document.getElementById('play-btn1');
const playButton2 = document.getElementById('play-btn2');
const playButton3 = document.getElementById('play-btn3');

const pauseButton = document.getElementById('pause-btn');
const pauseButton1 = document.getElementById('pause-btn1');
const pauseButton2 = document.getElementById('pause-btn2');
const pauseButton3 = document.getElementById('pause-btn3');

const likeButton = document.getElementById('like-btn');
const likeButton1 = document.getElementById('like-btn1');
const likeButton2 = document.getElementById('like-btn2');
const likeButton3 = document.getElementById('like-btn3');

const progressBar = document.querySelector('progress');
const progressBar1 = document.querySelector('#progress');
const progressBar2 = document.querySelector('#progress1');
const progressBar3 = document.querySelector('#progress2');

let time = document.getElementById('start');
let time1 = document.getElementById('start1');
let time2 = document.getElementById('start2');
let time3 = document.getElementById('start3');

const musicDuration = document.getElementById('end');
const musicDuration1 = document.getElementById('end1');
const musicDuration2 = document.getElementById('end2');
const musicDuration3 = document.getElementById('end3');

let minuteField;
let minuteField1;
let minuteField2;
let minuteField3;

let secondField;
let secondField1;
let secondField2;
let secondField3;

// Duração da Música
musicDuration.textContent = secondForMinute(Math.floor(music.duration));
musicDuration1.textContent = secondForMinute1(Math.floor(music1.duration));
musicDuration2.textContent = secondForMinute2(Math.floor(music2.duration));
musicDuration3.textContent = secondForMinute3(Math.floor(music3.duration));


// Add Event Listener: Musica
music.addEventListener('timeupdate', updateBar => {
    progressBar.style.width = Math.floor((music.currentTime / music.duration) * 100) + "%";
    time.textContent = secondForMinute(Math.floor(music.currentTime));
});

music1.addEventListener('timeupdate', updateBar => {
    progressBar1.style.width = Math.floor((music1.currentTime / music1.duration) * 100) + "%";
    time1.textContent = secondForMinute1(Math.floor(music1.currentTime));
});

music2.addEventListener('timeupdate', updateBar => {
    progressBar2.style.width = Math.floor((music2.currentTime / music2.duration) * 100) + "%";
    time2.textContent = secondForMinute(Math.floor(music2.currentTime));
});

music3.addEventListener('timeupdate', updateBar => {
    progressBar3.style.width = Math.floor((music3.currentTime / music3.duration) * 100) + "%";
    time3.textContent = secondForMinute(Math.floor(music3.currentTime));
});


// Function
function secondForMinute(second) {
    minuteField = Math.floor(second / 60);
    secondField = second % 60;

    if(secondField < 10) {
        secondField = '0' + secondField;
    }

    return minuteField+':'+secondField;
}

function secondForMinute1(second1) {
    minuteField1 = Math.floor(second1 / 60);
    secondField1 = second1 % 60;

    if(secondField1 < 10) {
        secondField1 = '0' + secondField1;
    }

    return minuteField1+':'+secondField1;
}

function secondForMinute2(second2) {
    minuteField2 = Math.floor(second2 / 60);
    secondField2 = second2 % 60;

    if(secondField2 < 10) {
        secondField2 = '0' + secondField2;
    }

    return minuteField2+':'+secondField2;
}

function secondForMinute3(second3) {
    minuteField3 = Math.floor(second3 / 60);
    secondField3 = second3 % 60;

    if(secondField3 < 10) {
        secondField3 = '0' + secondField3;
    }

    return minuteField3+':'+secondField3;
}

// Add Event Listener: Botões
playButton.addEventListener('click', playMusic => {
    music.play();
});

playButton1.addEventListener('click', playMusic => {
    music1.play();
});

playButton2.addEventListener('click', playMusic => {
    music2.play();
});

playButton3.addEventListener('click', playMusic => {
    music3.play();
});


pauseButton.addEventListener('click', pauseMusic => {
    music.pause();
});

pauseButton1.addEventListener('click', pauseMusic => {
    music1.pause();
});

pauseButton2.addEventListener('click', pauseMusic => {
    music2.pause();
});

pauseButton3.addEventListener('click', pauseMusic => {
    music3.pause();
});

likeButton.addEventListener('click', likeMusic => {
    likeButton.style.color = "red"
});

likeButton1.addEventListener('click', likeMusic1 => {
    likeButton1.style.color = "red"
});

likeButton2.addEventListener('click', likeMusic2 => {
    likeButton2.style.color = "red"
});

likeButton3.addEventListener('click', likeMusic3 => {
    likeButton3.style.color = "red"
});


/* MODAL */

// Abrir Modal
function abrir() {
    const modal1 = document.getElementById('modal1');
    modal1.style.display = "block";
}

function abrir1() {
    const modal2 = document.getElementById('modal2');
    modal2.style.display = "block"
}

function abrir2() {
    const modal3 = document.getElementById('modal3');
    modal3.style.display = "block"
}

function abrir3() {
    const modal4 = document.getElementById('modal4');
    modal4.style.display = "block"
}


// Fechar Modal
function fechar1() {
    const modal1 = document.getElementById('modal1');
    modal1.style.display = "none";
}

function fechar2() {
    const modal2 = document.getElementById('modal2');
    modal2.style.display = "none";
}

function fechar3() {
    const modal3 = document.getElementById('modal3');
    modal3.style.display = "none";

}

function fechar4() {
    const modal4 = document.getElementById('modal4');
    modal4.style.display = "none";
}