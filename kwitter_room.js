var firebaseConfig = {
    apiKey: "AIzaSyBNSplbKgHwEM7PR-BitN8o-szoww83fWg",
    authDomain: "let-chat-web-app-b3c9a.firebaseapp.com",
    databaseURL: "https://let-chat-web-app-b3c9a-default-rtdb.firebaseio.com",
    projectId: "let-chat-web-app-b3c9a",
    storageBucket: "let-chat-web-app-b3c9a.appspot.com",
    messagingSenderId: "704920552104",
    appId: "1:704920552104:web:5b1024c7fff7bd26cd389d",
    measurementId: "G-ND2L0VPGS5"
};
firebase.initializeApp(firebaseConfig);

var user_name = localStorage.getItem("User_Name");
document.getElementById("user_name").innerHTML = "welcome!  " + user_name;

function addRoom(){

    var room_name=document.getElementById("room_name").value;
    localStorage.setItem("room_name" , room_name);
}