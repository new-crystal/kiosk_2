
const bgSound = new Audio("./assets/bg.mp3");

async function requestMicrophonePermissionAndPlaySound() {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        playSound(bgSound);
    } catch (error) {
        console.error(`마이크 사용 권한이 거부되었습니다: ${error}`);
    }
}

window.onload = function () {
    requestMicrophonePermissionAndPlaySound();
};

function playSound(sound) {
    const bgsong = sound.play();
    sound.loop = true;
    sound.volume = 0.2;
    if (bgsong !== undefined) {
        bgsong;
    }
}