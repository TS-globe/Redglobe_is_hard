const firebaseConfig = {
      apiKey: "AIzaSyAuMP8gDYE2lzkOEBU67qVb_X1QQdFkRFs",
      authDomain: "redglobe-base.firebaseapp.com",
      databaseURL:"https://redglobe-base-default-rtdb.firebaseio.com/",
      projectId: "redglobe-base",
      storageBucket: "redglobe-base.appspot.com",
      messagingSenderId: "515569703116",
      appId: "1:515569703116:web:e3b7881714fc442c4cca69"
    };

    firebase.initializeApp(firebaseConfig);
storage = localStorage.getItem("username");
document.getElementById("Welcome").innerHTML += storage;




function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  console.log(Room_names);
                  document.getElementById("output").innerHTML+="<div onclick='function3(this.id)' class='room_name' id=" + Room_names + ">"+"#" + Room_names + "</div>"
                  //Start code

                  //End code
            });
      });
}
getData();


function function3(t)
{
      console.log(t);
      localStorage.setItem("Th", t);
      window.location = "kwitter_page.html"
}


function function1() {
      value_1 = document.getElementById("room_text").value;
      firebase.database().ref("/").child(value_1).update(
            {
                  Group: value_1
            }
      )
      localStorage.setItem("room_name", value_1);
}

function logout() {
      localStorage.removeItem("username")
      localStorage.removeItem("password")
      window.location = "index.html";
}
