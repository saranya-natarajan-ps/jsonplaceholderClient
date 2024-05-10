"use strict";

window.onload = init;

function init(){
    let messagediv = document.getElementById("messageDiv");
    fetch("http://jsonplaceholder.typicode.com/todos/1")
    .then(response => response.json())
    .then(data => {
        let message = "User ID: " + data.userId;
        message = message +"<br>"+"id: " + data.id;
        message = message +"<br>"+"title: " + data.title;
        message = message +"<br>"+"completed: " + data.completed;
        messagediv.innerHTML = message;
     });

    const fetchUserBtn = document.getElementById("fetchUserBtn");
    fetchUserBtn.onclick = fetchUser;
}

function fetchUser(){
    const idInputField = document.getElementById("idInputField");
    let id = idInputField.value;
    let messagediv = document.getElementById("messageDiv");
    fetch("http://jsonplaceholder.typicode.com/todos/"+id)
    .then(response => response.json())
    .then(data => {
        let message = "User ID: " + data.userId;
        message = message +"<br>"+"id: " + data.id;
        message = message +"<br>"+"title: " + data.title;
        message = message +"<br>"+"completed: " + data.completed;
        messagediv.innerHTML = message;
     });

    const fetchUserBtn = document.getElementById("fetchUserBtn");
    fetchUserBtn.onclick = fetchUser;
}