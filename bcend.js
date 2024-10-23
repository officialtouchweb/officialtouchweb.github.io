// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.0/firebase-app.js";
import { getDatabase ,set,get,ref,child} from "https://www.gstatic.com/firebasejs/11.0.0/firebase-database.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBj18sVn8urGEOBSAiofHUI7CiQJrtYGDQ",
  authDomain: "webdev-course-882a5.firebaseapp.com",
  projectId: "webdev-course-882a5",
  storageBucket: "webdev-course-882a5.appspot.com",
  messagingSenderId: "1026962099237",
  appId: "1:1026962099237:web:e1e3b9b37093a7618ec3cc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app)

function writedata(name, email, number, id){
    set(ref(db, "students/" + id),{
        name:name,
        email:email,
        number:number
    })
}

document.getElementById('submit').addEventListener('click', () => {
  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let num = document.getElementById('number').value;

  if (name === "" || email === "" || num === "") {
    alert("You can't leave anything blank.");
  } else {
    let id_parts = email.split("@");
    let id = id_parts[0];
    writedata(name, email, num, id);
    alert("Your form is submitted. Don't submit it again with the same credentials. If everything is correct, we will contact you within 3 days.");
  }
});
