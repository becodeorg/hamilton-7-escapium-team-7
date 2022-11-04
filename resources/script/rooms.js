

function generateRoom(rooms) {

    // var tmp = readRooms();
    // var rooms = tmp[0];

    //create a whith class rooms__grid__item
    let conteneur = document.createElement('a');
    conteneur.className = 'rooms__grid__item';
    conteneur.href = './singleRoom.html?room='+rooms.name;
    
    let body = document.createElement('a');
    body.className = 'rooms__grid__item__body';

    // insert body in conteneur
    conteneur.appendChild(body);

    // create a lockContainer
    let lockContainer = document.createElement('em');
    lockContainer.className = 'rooms__grid__item__body__dificulty';
    //insert lockContainer in body
    body.appendChild(lockContainer);

    //create a lock
    for (let i = 0; i < rooms.difficulty; i++) {//rooms.difficulty
        let lock = document.createElement('i');
        lock.className = 'fa fa-lock redColor';
        lockContainer.appendChild(lock);
    }
    for (let i = 0; i < 5-rooms.difficulty; i++) {//rooms.difficulty
        let lock = document.createElement('i');
        lock.className = 'fa fa-lock whiteColor';
        lockContainer.appendChild(lock);
    }

    //create a title
    let title = document.createElement('h2');
    title.className = 'rooms__grid__item__body__title';
    title.innerHTML = rooms.name;//rooms.name;
    //insert title in body
    body.appendChild(title);

    //create a data
    let data = document.createElement('p');
    data.className = 'rooms__grid__item__body__data';

    //create data player
    let dataPlayer = document.createElement('span');
    dataPlayer.className = 'rooms__grid__item__body__data__item';
    let ibalise = document.createElement('i');
    ibalise.className = 'fa fa-user';
    dataPlayer.appendChild(ibalise);
    data.appendChild(dataPlayer);
    let text = document.createTextNode(rooms.players);//rooms.players;
    dataPlayer.appendChild(text);

    //create data time
    let dataTime = document.createElement('span');
    dataTime.className = 'rooms__grid__item__body__data__item';
    ibalise = document.createElement('i');
    ibalise.className = 'fa fa-clock-o';
    dataTime.appendChild(ibalise);
    data.appendChild(dataTime);
    //add textin dataTime
    text = document.createTextNode(rooms.minutes);//rooms.minutes;
    dataTime.appendChild(text);


    //create data location
    let dataLocation = document.createElement('span');
    dataLocation.className = 'rooms__grid__item__body__data__item';
    ibalise = document.createElement('i');
    ibalise.className = 'fa fa-map-marker';
    dataLocation.appendChild(ibalise);
    data.appendChild(dataLocation);
    text = document.createTextNode(rooms.location);//rooms.location;
    dataLocation.appendChild(text);

    //insert data in body
    body.appendChild(data);

    //insert conteneur in rooms__grid
    document.getElementsByClassName('rooms__grid')[0].appendChild(conteneur);
}

async function loadJS()
{
    let tmp;
    // read local JSON file in javascript
    await fetch("../resources/script/rooms.json")
        .then(function (response) {
        return response.json();
        })
        .then(function (data) {
            console.log ("in then : "+data);
            // return data;
            tmp = data;
            // for (let i = 0; i < data.length; i++) {
            //     generateRoom(data[i]);
            // }
        })
                        
        return tmp;

}


async function init(difficult)
{
    let data = await loadJS();
    let min = 1;
    let max = 5;
    // delet space of text
    difficult = difficult.trim();

    switch (difficult) {
        case "Easy":
            // console.log("Easy");
            max = 2;
            break;
        case "Normal":
            // console.log("Normal");
            min = 2;
            max = 4;
            break;
        case "Hard":
            // console.log("Hard");
            min = 4;
            break;
        default:
            // console.log("All");
            min = 1;
            max = 5;
            break;
    }

    //clear rooms__grid
    document.getElementsByClassName('rooms__grid')[0].innerHTML = '';

    for (i = 0, j = 0; i < data.length && j<8; i++) {

        if (data[i].difficulty >= min && data[i].difficulty <= max) {
        generateRoom(data[i]);
        j++;
        }
    }
}


init("All");

//event listener for radio button

let radio = document.getElementsByClassName('rooms__filter__button');
for (let i = 0; i < radio.length; i++) {
    radio[i].addEventListener('click', function () {
        // reset class button
        for (let j = 0; j < radio.length; j++) {
            radio[j].classList.remove('rooms__filter__button--active');
        }
        // add class button
        this.classList.add('rooms__filter__button--active');
        
        // take the text 
        
        let difficult = this.textContent;

        init(difficult);
    });
}