import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, getDocs, addDoc, deleteDoc, doc, query, orderBy } 
from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// 🔥 YOUR FIREBASE CONFIG HERE
const firebaseConfig = {
  apiKey: "AIzaSyDaYvM-qIm87UNWXooDLejflRAOBK5B9jU",
  authDomain: "writtenanchor.firebaseapp.com",
  projectId: "writtenanchor",
  storageBucket: "writtenanchor.firebasestorage.app",
  messagingSenderId: "292669837484",
  appId: "1:292669837484:web:169fdfd77b20b19e150f09"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const postsContainer = document.getElementById("posts");

async function loadPosts() {
  const q = query(collection(db, "posts"), orderBy("createdAt", "desc"));
  const querySnapshot = await getDocs(q);

  postsContainer.innerHTML = "";

  querySnapshot.forEach((docSnap) => {
    const post = docSnap.data();

    const postDiv = document.createElement("div");
    postDiv.className = "series-card";

    postDiv.innerHTML = `
      <h2>${post.title}</h2>
      <p>${post.content}</p>
    `;

    postsContainer.appendChild(postDiv);
  });
}

loadPosts();