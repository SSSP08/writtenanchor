// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, doc, getDoc, updateDoc, setDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// 🔥 REPLACE THIS WITH YOUR OWN CONFIG FROM FIREBASE
const firebaseConfig = {
  apiKey: "AIzaSyDaYvM-qIm87UNWXooDLejflRAOBK5B9jU",
  authDomain: "writtenanchor.firebaseapp.com",
  projectId: "writtenanchor",
  storageBucket: "writtenanchor.firebasestorage.app",
  messagingSenderId: "292669837484",
  appId: "1:292669837484:web:169fdfd77b20b19e150f09"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Reference to a document called "visits" inside collection "stats"
const visitRef = doc(db, "stats", "visits");

async function updateVisitCount() {
    const docSnap = await getDoc(visitRef);

    if (docSnap.exists()) {
        let current = docSnap.data().count;
        current++;

        await updateDoc(visitRef, {
            count: current
        });

        document.getElementById("visits").innerText = current;
    } else {
        await setDoc(visitRef, { count: 1 });
        document.getElementById("visits").innerText = 1;
    }
}

updateVisitCount();