import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { db } from "./Firebase"
// import {initializeApp } from "firebase/app"
import { collection, addDoc, onSnapshot} from "firebase/firestore"


// // Firebase configurations
// const firebaseConfig = {
//   apiKey: "AIzaSyCNcqogtkV2d3EKES9Czzl4bB486s3jStw",
//   authDomain: "agritech-app-70ee6.firebaseapp.com",
//   projectId: "agritech-app-70ee6",
//   storageBucket: "agritech-app-70ee6.appspot.com",
//   messagingSenderId: "221466055006",
//   appId: "1:221466055006:web:9672d714626a58a7f2bfcf"
// };

// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);



export const Data = () => {
    <Link to={`/register`}></Link>
    // Defining state variables 
    const [message, setMessage] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState ('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [password, setPassword] = useState('');
    const [list, setList] = useState([]);

    const handleSubmit = async (event) => {
    event.preventDefault();  
    const userData = {name, surname, email, phone, address, password};

    await addDoc(collection(db, "list"),userData);
    console.log("Document written to firebase");

    const newMessage = `You're now registered Mr ${event.target.name.value} ${event.target.surname.value} `;
    window.alert(newMessage);

    // Clearing the inputs fields
    setName("");
    setSurname("");
    setEmail("");
    setPhone("");
    setAddress("");
    event.target.reset();
  };


  // Retrieving data from Firebase
  useEffect(() => {
    const userDataRef = collection(db, "list");

    const unsubscribe = onSnapshot(userDataRef, (querySnapshot) => {
      const data = [];
      querySnapshot.forEach((doc) => {
        data.push({
          id: doc.id,  // Include document ID in data
        ...doc.data()
        });
      });
      setList(data);
    })
    return () => unsubscribe();
    
  }, [db]);
  // console.log(list);

  return (

    <form id="registration" onSubmit={handleSubmit} className="max-w-md mx-auto mt-6">
  <fieldset name="REGISTRATION" id="fieldset" className="border p-4 rounded-lg">
    <legend className="text-lg font-medium mb-2">SIGN-IN:</legend>
    <div className="mb-4">
      <label htmlFor="name" className="block font-medium mb-2">NAME:</label>
      <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} required placeholder="name" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"/>
    </div>
    <div className="mb-4">
      <label htmlFor="surname" className="block font-medium mb-2">SURNAME:</label>
      <input type="text" id="surname" name="surname" value={surname} onChange={(e) => setSurname(e.target.value)} required placeholder="surname" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"/>
    </div>
    <div className="mb-4">
      <label htmlFor="email" className="block font-medium mb-2">E-MAIL:</label>
      <input type="text" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="email@gmail.com" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"/>
    </div>
    <div className="mb-4">
      <label htmlFor="password" className="block font-medium mb-2">PASSWORD:</label>
      <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required placeholder="password" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"/>
    </div>
    <div className="mb-4">
      <label htmlFor="phone" className="block font-medium mb-2">PHONE NUMBER:</label>
      <input type="text" id="phone" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required placeholder="+27712345678" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"/>
    </div>
    <div className="mb-4">
      <label htmlFor="address" className="block font-medium mb-2">ADDRESS:</label>
      <input type="text" id="address" name="address" value={address} onChange={(e) => setAddress(e.target.value)} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"/>
    </div>
    <div className="mb-4">
      <label htmlFor="birthday" className="block font-medium mb-2">DOB:</label>
      <input type="date" id="birthday" name="birthday" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"/>
    </div>
  </fieldset>
  <button id="submitButtonData" type="submit" className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">Submit</button>
  <br />
  <br />
  <h2 className="text-center mt-4">{message}</h2>
</form>
  );
  
};
