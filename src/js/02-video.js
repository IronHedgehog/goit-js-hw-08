import Player from '@vimeo/player';

import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);


 const COUNTER = "videoplayer-current-time";

player.on('timeupdate', throttle(currentTime, 1000));


function currentTime (data) {
    localStorage.setItem(COUNTER,JSON.stringify(data.seconds))
}

const savedCounter = localStorage.getItem(COUNTER);
player.setCurrentTime(savedCounter);