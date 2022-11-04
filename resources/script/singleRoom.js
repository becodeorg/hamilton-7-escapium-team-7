async function init()
{
    // get url parameters
    var url = window.location.search;
    console.log(url);
    var urlParams = new URLSearchParams(url);
    var name = urlParams.get('room');

    let data = await loadJS(name);
    let room = search(data, name);

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
            return generateRoom(data[i]);
        }
    }
}

init();
