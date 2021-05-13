
  import firebase from "firebase"
  const firebaseApp = firebase.initializeApp({
    
        apiKey: "AIzaSyB6H5t0hAFor2-NPgciWpTDgvpS-ivQ70k",
        authDomain: "todo-app-16596.firebaseapp.com",
        projectId: "todo-app-16596",
        storageBucket: "todo-app-16596.appspot.com",
        messagingSenderId: "751248328731",
        appId: "1:751248328731:web:5aa4fe2fa5a2b5116710be",
        measurementId: "G-MD8LJZCVTK"
      

  });

  const db = firebaseApp.firestore();

  export default  db ;