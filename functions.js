let api = "P5kvawJa0JTIebx4dPquWg==YQTCY97msGwjjE81";

function getHobby(event){
    let category = 'general';

    var xhttp2 = new XMLHttpRequest();
    xhttp2.onreadystatechange = function() {    

       
        if (this.readyState == 4 && this.status == 200) {

            
            var hobby = JSON.parse(this.responseText);

            console.log(hobby);
            document.getElementById("newHobby").innerHTML = hobby.hobby;
            document.getElementById("learn").innerHTML = "Learn How Here:"+ "<br>" + hobby.link;
            
           
        } else if (this.readyState == 4) {
            console.log(this.responseText);
        }
    };

    xhttp2.open("GET", 'https://api.api-ninjas.com/v1/hobbies?category=' + category, true);

    xhttp2.setRequestHeader("Content-type", "application/json");
    xhttp2.setRequestHeader("x-api-key", api);
    
    xhttp2.send();
}

document.getElementById("hobbyButton").addEventListener("click", getHobby);