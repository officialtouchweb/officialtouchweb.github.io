//toggle
document.addEventListener('DOMContentLoaded', () => {
    const menu = document.getElementById('menu');
    const hamburger = document.getElementById('hamburger');
    const overlay = document.getElementById('overlay');

    hamburger.addEventListener('click', () => {
        menu.classList.toggle('active'); // Toggle active class for menu
        overlay.style.display = menu.classList.contains('active') ? 'block' : 'none'; // Show/Hide overlay
    });

    // Close menu if clicking outside of it
    overlay.addEventListener('click', () => {
       menu.classList.remove('active'); // Remove active class to hide menu
       overlay.style.display = 'none'; // Hide overlay
    });

    // Prevent clicks inside the menu from closing it
    menu.addEventListener('click', (event) => {
      event.stopPropagation(); // Prevent click from bubbling up to overlay
    });
});

//database
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

function writedata(name, email, number, blog, id){
  set(ref(db, "blog_website/" + id),{
    name:name,
    email:email,
    number:number,
    blog:blog
  })
}

document.getElementById('submit').addEventListener('click', () => {
  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let num = document.getElementById('number').value;
  let blog = document.getElementById('blog').value;

  if (name === "" || email === "" || num === "" || blog === "") {
    alert("You can't leave anything blank.");
  } else {
    let id_parts = email.split("@");
    let id = id_parts[0];
    writedata(name, email, num, blog, id);
    alert("Your form is submitted. Don't submit it again with the same credentials. If everything is correct, we will contact you within 3 days.");
    console.log(id)
  }
});