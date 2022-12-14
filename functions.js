let api = "P5kvawJa0JTIebx4dPquWg==YQTCY97msGwjjE81";

function getHobby(event){
    let category = 'general';

    var xhttp2 = new XMLHttpRequest();
    xhttp2.onreadystatechange = function() {    

       
        if (this.readyState == 4 && this.status == 200) {

            
            var hobby = JSON.parse(this.responseText);

            console.log(hobby);
            document.getElementById("newHobby").innerHTML = hobby.hobby;
            document.getElementById("learn").innerHTML ="<a href=" + hobby.link +">Learn!</a>" ;
            
           
        } else if (this.readyState == 4) {
            console.log(this.responseText);
        }
    };

    xhttp2.open("GET", 'https://api.api-ninjas.com/v1/hobbies?category=' + category, true);

    xhttp2.setRequestHeader("Content-type", "application/json");
    xhttp2.setRequestHeader("x-api-key", api);
    
    xhttp2.send();
}

let listCount = 0;
let answer = "";

function getBucketList(event){
    let category = 'general';

    var xhttp2 = new XMLHttpRequest();
    xhttp2.onreadystatechange = function() {    

       
        if (this.readyState == 4 && this.status == 200) {

            
            var item = JSON.parse(this.responseText);
            let parent = document.getElementById("list");
            if(listCount>4){
                while(parent.firstChild){
                    parent.removeChild(parent.firstChild);
                }
                listCount = 0;
            }
            
            console.log(item);
            newItem = document.createElement("li");
            newItem.appendChild(document.createTextNode(item.item));
            parent.appendChild(newItem);
            listCount++;
            //document.getElementById("learn").innerHTML ="<a href=" + hobby.link +">Learn!</a>" ;
            
           
        } else if (this.readyState == 4) {
            console.log(this.responseText);
        }
    };
    xhttp2.open("GET", 'https://api.api-ninjas.com/v1/bucketlist', true);

    xhttp2.setRequestHeader("Content-type", "application/json");
    xhttp2.setRequestHeader("x-api-key", api);
    
    xhttp2.send();
}

function getRiddle(event){
   

    var xhttp2 = new XMLHttpRequest();
    xhttp2.onreadystatechange = function() {    

       
        if (this.readyState == 4 && this.status == 200) {

            document.getElementById("answerBox").innerHTML = "";
            var riddle = JSON.parse(this.responseText);
            let length = riddle[0].question.length;
            console.log(length);
            console.log(riddle);
            if(length<166){
            document.getElementById("newRiddle").innerHTML = "Riddle: " + riddle[0].question;
            let thisButton = document.createElement("button");
            thisButton.setAttribute("id", "answer");
            thisButton.appendChild(document.createTextNode('Show Answer'));
            document.getElementById("newRiddle").appendChild(thisButton);
            answer = riddle[0].answer;
            console.log("answer in first function: " + answer);
            document.getElementById("answer").addEventListener("click", showAnswer);
            } else {
                getRiddle();
            }
           
        } else if (this.readyState == 4) {
            console.log(this.responseText);
        }
    };
    xhttp2.open("GET", 'https://api.api-ninjas.com/v1/riddles', true);

    xhttp2.setRequestHeader("Content-type", "application/json");
    xhttp2.setRequestHeader("x-api-key", api);
    
    xhttp2.send();
}


function showAnswer(event){
    console.log("answer in second function: " + answer);

    document.getElementById("answerBox").innerHTML = answer;
}



function getFacts(event){
console.log("in getFacts");

    var xhttp2 = new XMLHttpRequest();
    xhttp2.onreadystatechange = function() {    

       
        if (this.readyState == 4 && this.status == 200) {

            
            var object = JSON.parse(this.responseText);
            
            document.getElementById("newFact").innerHTML = object[0].fact;
            
            
            
            
            
           
        } else if (this.readyState == 4) {
            console.log(this.responseText);
        }
    };
    xhttp2.open("GET", 'https://api.api-ninjas.com/v1/facts', true);

    xhttp2.setRequestHeader("Content-type", "application/json");
    xhttp2.setRequestHeader("x-api-key", api);
    
    xhttp2.send();
}



document.getElementById("hobbyButton").addEventListener("click", getHobby);
document.getElementById("bucketButton").addEventListener("click", getBucketList);
document.getElementById("riddleButton").addEventListener("click", getRiddle);
document.getElementById("factButton").addEventListener("click", getFacts);