function generateRoom(rooms) {

    // var tmp = readRooms();
    // var rooms = tmp[0];

    //create a whith class rooms__grid__item
    let conteneur = document.createElement('a');
    conteneur.className = 'rooms__grid__item';
    
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

function loadJS()
{
    let tmp;
    // read local JSON file in javascript
    fetch("../resources/script/rooms.json")
        .then(function (response) {
        return response.json();
        })
        .then(function (data) {
            console.log ("in then : "+data);
            // return data;
            tmp = data;
            for (let i = 0; i < data.length; i++) {
                generateRoom(data[i]);
            }
        })
                        
        return tmp;

}





// console.log();
// init();

let data = loadJS();

//async await


console.log("out : "+data);
// generateRoom(data[1]);
// console.log("c'est moi");
// console.log("ici : "+data);
// generateRoom(data);
// readRooms();
// generateRoom()
