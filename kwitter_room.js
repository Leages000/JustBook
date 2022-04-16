

const firebaseConfig = {
      apiKey: "AIzaSyD4eyZQzlZnxrY06Wc9JaM0eI-9jRlzgFE",
      authDomain: "kwitter-version2.firebaseapp.com",
      databaseURL: "https://kwitter-version2-default-rtdb.firebaseio.com",
      projectId: "kwitter-version2",
      storageBucket: "kwitter-version2.appspot.com",
      messagingSenderId: "973479618360",
      appId: "1:973479618360:web:7c1cef8f025295e15503cd"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);

    user_name=localStorage.getItem("username");
    
    document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";

    function addRoom() {
          room_name=document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
                purpose:"adding room name"
          });
          localStorage.setItem("room_name",room_name);
          window.location="kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room name-"+Room_names );
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML +=row;
      //End code
      });});}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}

function logout()
{ localStorage.removeItem("room_name");
localStorage.removeItem("username");
      window.location="index.html";
}
