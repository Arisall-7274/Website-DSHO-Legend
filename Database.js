// fetch('http://localhost:5000/users')
fetch('http://localhost:5000/users', {
    mode: 'no-cors',
    method: "post",
    headers: {
         "Content-Type": "application/json"
    }
})


.then(function (response) {
    return response.json();
})
.then(function (data) {
    appendData(data);
})
.catch(function (err) {
    console.log('error: ' + err);
});

function appendData(data) {
let mainContainer = document.getElementById("myData");
for (let i = 0; i < data.length; i++) {
    console.log(data[i])
    let div = document.createElement("div");
    div.innerHTML = data[i].Player + ' ' + data[i].Stars + ' ' + data[i].Shards;
    mainContainer.appendChild(div);
}
}


var obj = {
    table: []
};


obj.table.push({id: 1, square:2});

var json = JSON.stringify(obj);
