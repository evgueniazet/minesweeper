const createInfo = () => {
    const contentWrapper = document.querySelector('.content-wrapper')

    const info = document.createElement('div');
    info.classList.add('info');
    contentWrapper.appendChild(info);

    const time = document.createElement('div');
    time.classList.add('time');
    info.appendChild(time);

    const iconClock = '<svg class="icon" fill="#000000" width="800px" height="800px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">\
    <title>alt-clock</title>\
    <path d="M4 20q0 3.264 1.6 6.048t4.384 4.352 6.016 1.6 6.016-1.6 4.384-4.352 1.6-6.048-1.6-6.016-4.384-4.352-6.016-1.632-6.016 1.632-4.384 4.352-1.6 6.016zM8 20q0-3.296 2.336-5.632t5.664-2.368 5.664 2.368 2.336 5.632-2.336 5.664-5.664 2.336-5.664-2.336-2.336-5.664zM12 4q0 1.664 1.184 2.848t2.816 1.152 2.816-1.152 1.184-2.848-1.184-2.816-2.816-1.184-2.816 1.184-1.184 2.816zM14.016 20q0 0.832 0.576 1.44t1.408 0.576 1.408-0.576 0.608-1.44q0-0.48-0.512-1.984t-0.992-2.752l-0.512-1.248q-1.984 4.896-1.984 5.984zM14.016 4q0-0.832 0.576-1.408t1.408-0.576 1.408 0.576 0.608 1.408-0.608 1.44-1.408 0.576-1.408-0.576-0.576-1.44z"></path>\
    </svg>';
    time.innerHTML = iconClock;

    const timeText = document.createElement('span');
    timeText.classList.add('text');
    time.appendChild(timeText);
    timeText.innerText = '00:00';

    const move = document.createElement('div');
    move.classList.add('move');
    info.appendChild(move);

    const iconStep = '<svg class="icon" fill="#000000" width="800px" height="800px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">\
    <title>alt-console-1</title>\
    <path d="M0 26.016q0 2.496 1.76 4.224t4.256 1.76h20q2.464 0 4.224-1.76t1.76-4.224v-20q0-2.496-1.76-4.256t-4.224-1.76h-20q-2.496 0-4.256 1.76t-1.76 4.256v20zM4 26.016v-18.016h24v18.016q0 0.832-0.576 1.408t-1.408 0.576h-20q-0.832 0-1.44-0.576t-0.576-1.408zM4 4q0-0.832 0.576-1.408t1.44-0.576 1.408 0.576 0.576 1.408-0.576 1.44-1.408 0.576-1.44-0.576-0.576-1.44zM12 18.016h2.016v-2.016h-2.016v2.016zM12 14.016h2.016v-2.016h-2.016v2.016zM14.016 16h1.984v-1.984h-1.984v1.984zM16 20h4v-1.984h-4v1.984z"></path>\
    </svg>';
    move.innerHTML = iconStep;

    const moveText = document.createElement('span');
    moveText.classList.add('text');
    move.appendChild(moveText);
    moveText.innerText = '0';

    const buttons = document.createElement('div');
    buttons.classList.add('buttons')
    info.appendChild(buttons);

    const buttonStop = document.createElement('button');
    buttonStop.classList.add('button');
    buttons.appendChild(buttonStop);

    const iconStop = '<svg class="icon"  fill="#000000" width="800px" height="800px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">\
        < title > pause</>\
            <path d="M5.92 24.096q0 0.832 0.576 1.408t1.44 0.608h4.032q0.832 0 1.44-0.608t0.576-1.408v-16.16q0-0.832-0.576-1.44t-1.44-0.576h-4.032q-0.832 0-1.44 0.576t-0.576 1.44v16.16zM18.016 24.096q0 0.832 0.608 1.408t1.408 0.608h4.032q0.832 0 1.44-0.608t0.576-1.408v-16.16q0-0.832-0.576-1.44t-1.44-0.576h-4.032q-0.832 0-1.408 0.576t-0.608 1.44v16.16z"></path>\
    </svg > ';
    buttonStop.innerHTML = iconStop;

    const buttonRestart = document.createElement('button');
    buttonRestart.classList.add('button');
    buttons.appendChild(buttonRestart);

    const iconRestart = '<svg class="icon"  fill="#000000" width="800px" height="800px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">\
    <title>revert</title>\
    <path d="M0.032 16.416q0.128 0.576 0.544 0.992l4 4q0.608 0.608 1.44 0.608 0.8 0 1.376-0.608l4.032-3.968q0.416-0.448 0.544-1.024t-0.128-1.184q-0.224-0.544-0.736-0.896t-1.088-0.32h-1.824q0.704-3.456 3.456-5.728t6.368-2.272q2.72 0 5.024 1.344t3.616 3.648 1.344 4.992-1.344 5.024-3.616 3.648-5.024 1.344q-2.336 0-4.352-1.024t-3.424-2.752l-2.848 2.592q0 0.032-0.032 0.032t-0.064 0.064-0.064 0.032q1.984 2.368 4.768 3.712t6.016 1.344q2.816 0 5.408-1.088t4.48-3.008 2.976-4.448 1.12-5.472-1.12-5.44-2.976-4.448-4.48-2.976-5.408-1.12q-2.624 0-4.992 0.928t-4.224 2.528-3.072 3.808-1.568 4.736h-2.144q-0.608 0-1.12 0.32t-0.736 0.896-0.128 1.184zM16 16q0 0.832 0.576 1.44t1.44 0.576h4q0.8 0 1.408-0.576t0.576-1.44-0.576-1.408-1.408-0.576h-2.016v-2.016q0-0.832-0.576-1.408t-1.408-0.576-1.44 0.576-0.576 1.408v4z"></path>\
    </svg> ';
    buttonRestart.innerHTML = iconRestart;

    const chooseLevel = document.createElement('button');
    chooseLevel.classList.add('choose-level');
    info.appendChild(chooseLevel);
    chooseLevel.innerText = 'Choose a level'
};

export default createInfo;