
function fetchApi() {
    
    var name = document.getElementById("name");
    var height = document.getElementById("height");
    var mass = document.getElementById("mass");
    var button = document.getElementsByClassName("btn-primary")

    var n = Math.floor((Math.random() * 10) + 1);
    var url = `https://swapi.py4e.com/api/people/${n}`

    fetch(url)
    .then(response => response.json())
    .then((data) =>{
        console.log(data);
        name.innerHTML ="Name : " + data.name;
        height.innerHTML = "Height : " + data.height;
        mass.innerHTML = "Mass : " + data.mass;
        });

}

