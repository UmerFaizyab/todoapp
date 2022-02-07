// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-analytics.js";

import {
  getDatabase,
  push,
  ref,
  set,
  get,
  child,
} from "https://www.gstatic.com/firebasejs/9.6.3/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyBwZZ9r5o6F2qSSpCL5sfj1TPjcpOJATkg",
    authDomain: "fir-prac-920ab.firebaseapp.com",
    databaseURL: "https://fir-prac-920ab-default-rtdb.firebaseio.com",
    projectId: "fir-prac-920ab",
    storageBucket: "fir-prac-920ab.appspot.com",
    messagingSenderId: "913400640075",
    appId: "1:913400640075:web:24a63c9186b618fa4213ce",
    measurementId: "G-3KYVYBDYLP"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase();










var todotext = document.getElementById("todotext")
var todoarray = [];




// --------------------------------------------------------

// ADD TEXT FUNCTION

document.addtodo = function(){
    todoarray.push(todotext.value)
    one.innerHTML += `<div class="todo col-md-12  py-3">
    <div class="row d-flex justify-content-center align-items-center">
    <div class="val col-md-10 my-2">
    <textarea class="form-control fs-3" ${"disabled"}>${todotext.value}</textarea>
                
     </div>
    <div class="col-md-2 my-2 d-flex justify-content-center">
    <div class="">
    <button type="button" class="btn btn-danger px-4 fs-5 mx-1"  onclick="del(this,'${todotext.value}')">Delete</button>
    </div>
    <div class="">
    <button type="button" class="btn btn-success px-4 fs-5 mx-1" onclick="edit(this)">Edit</button>
    </div>
    </div>
    </div>
    </div>`
    todotext.value = ""
    document.getElementById("delAll").style.display = "block"
}


// ADD TEXT FUNCTION

// --------------------------------------------------------

// DELETE FUNCTION

document.del = function(txt,b){
    console.log(txt.parentNode.parentNode.parentNode.parentNode.remove())
    // arr.replace(b,"")
    for(var i = 0;i<todoarray.length;i++){
        if(todoarray[i] == b){
            todoarray.splice(i, 1);
            break
        }
    }
}

// DELETE FUNCTION

// --------------------------------------------------------

// EDIT FUNCTION

document.edit = function(a){
    a.parentNode.parentNode.parentNode.parentNode.innerHTML = `
    <div class="row d-flex justify-content-center align-items-center">
        <div class="val col-md-10 my-2">
                <textarea class="form-control fs-3" ${"disabled"}>${prompt()}</textarea>

        </div>
        <div class="col-md-2 my-2 d-flex justify-content-center">
            <div class="">
                <button type="button" class="btn btn-danger px-4 fs-5 mx-1" onclick="del(this)">Delete</button>
            </div>
            <div class="">
                <button type="button" class="btn btn-success px-4 fs-5 mx-1" onclick="edit(this)">Edit</button>
            </div>
        </div>
    </div>`
}

// EDIT FUNCTION

// --------------------------------------------------------

// DELETE ALL FUNCTION


document.deleteAll = function(){
    one.innerHTML = ""
    document.getElementById("delAll").style.display = "none"
    
}

// DELETE ALL FUNCTION