 var firebaseConfig = {
    apiKey: "AIzaSyCsAxYkJ5MTnryBa4MQfZYXY5mv-TGiUIE",
    authDomain: "kwitter-project-f7b49.firebaseapp.com",
    databaseURL: "https://kwitter-project-f7b49-default-rtdb.firebaseio.com",
    projectId: "kwitter-project-f7b49",
    storageBucket: "kwitter-project-f7b49.appspot.com",
    messagingSenderId: "371961483723",
    appId: "1:371961483723:web:b5bb12d7efa01f2c03e64e"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
  Room_names = childKey;
 console.log("room name-" + Room_names);
 row="<div class='room_name' id="+Room_names +" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
 document.getElementById("output").innerHTML+=row;
 });});}
getData();

function addRoom(){
  room_name = document.getElementById("room_name").value;
 firebase.database().ref("/").child(room_name).update({
  purpose : "adding room name" });
 localStorage.setItem("room_name", room_name);
 window.location = "kwitter_page.html";
 }
 function redirectToRoomName(name){
       console.log(name);
       localStorage.setItem("room_name",name);
       window.location="kwitter_page.html";
 }
 

