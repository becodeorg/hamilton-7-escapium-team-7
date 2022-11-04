async function init()
{
    // get url parameters
    var url = window.location.search;
    console.log(url);
    var urlParams = new URLSearchParams(url);
    var name = urlParams.get('room');

    let data = await loadJS(name);
    let room = await search(data, name);
    // console.log("room : "+room);
    updatePage(room);
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
            tmp = data;

        })
                        
        return tmp;

}

function search(data, room)
{
    for (let i = 0; i < data.length; i++) {
        if (data[i].name == room) {
            return data[i];
        }
    }
}

function updatePage(room)
{
    //update h1
    document.getElementsByTagName('h1')[0].innerHTML = room.name;
    // console.log("ici: "+room.name);

    let lockContainer = document.getElementById('dificult');
    // lockContainer.innerHTML = "";
    //create a lock
    for (let i = 0; i < room.difficulty; i++) {//rooms.difficulty
        let lock = document.createElement('i');
        lock.className = 'fa fa-lock redColor';
        lockContainer.appendChild(lock);
    }
    for (let i = 0; i < 5-room.difficulty; i++) {//rooms.difficulty
        let lock = document.createElement('i');
        lock.className = 'fa fa-lock whiteColor';
        lockContainer.appendChild(lock);
    }

    //create data player
    generate('fa fa-user','player',room.players);
    //create data time
    generate('fa fa-clock-o','minute',room.minutes);

    generate('fa fa-phone','phone',room.phone);
    generate('fa fa-envelope','mail',room.email);
    generate('fa fa-skype','skype',room.skype);
    generate('fa fa-map-marker','adress',room.location);

}

function generate(classe,id,data)
{
    let elemtime = document.getElementById(id);
    // elemtime.innerHTML = "";
    let ibalise = document.createElement('i');
    ibalise.className = classe;//'fa fa-clock-o';
    let text = document.createTextNode(data);//rooms.players;
    
    elemtime.appendChild(ibalise);
    elemtime.appendChild(text);
}

init();
