import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
// import { Firebase } from "./Firebase"



export const Data = () => {
    <Link to={`/register`}></Link>

    // let list = [];
    const [message, setMessage] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState ('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [list, setList] = useState([]);


    useEffect(() => {
        const  data = localStorage.getItem('list'); 
        if(data) {
            setList(JSON.parse(data));
        }
    }, []);

    const handleSubmit = (event) => {
    event.preventDefault();    

    const newMessage = `You're now registered Mr ${event.target.name.value} ${event.target.surname.value} `;
    const userData = {name, surname, email, phone, address};
    // const db = firebase.database();
    // db.ref("users").push(userData); // write the data to the "users" collection in Firebase
    setList(prevList => [ ...prevList, userData]);
    localStorage.setItem('list', JSON.stringify(list));
    // list.push(userData);
    console.log(list);
    event.target.reset();
    window.alert(newMessage);
    // setMessage(newMessage);
    // setName("");
    // setSurname("");
    // setEmail("");
    // setPhone("");
    // setAddress("");
    event.target.reset();
  };

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

export const AddBlogPost = () => {
  const [postData, setPostData] = useState({
    title: "",
    description: "",
    body: []
  })

  const formatText = (text)=>{
    return text.split(",")
  }
const handlChange = (event) => {
  event.preventDefault();
  const { name, value } = event.target;
  // console.log(name, value);
  setPostData({
    ...postData,
      [name]: name==="body"? formatText(value): value
    })
}
const postBlog = (event) => {
  event.preventDefault();
  console.log(postData);
}
  return <>
    <Link to={`/blok`}></Link>
    <form class="max-w-2xl mx-auto mt-6 p-4 bg-white rounded-lg shadow-md" onChange={handlChange} onSubmit={postBlog}>
  <div class="mb-4">
    <label class="block text-gray-700 font-bold mb-2" htmlFor="title">
      Blog title
    </label>
    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" id="title" name='title' placeholder='Title' />
  </div>

  <div class="mb-4">
    <label class="block text-gray-700 font-bold mb-2" htmlFor="description">
      Blog description
    </label>
    <textarea class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="description" name='description' placeholder='Description'></textarea>
  </div>

  <div class="mb-4">
    <label class="block text-gray-700 font-bold mb-2" htmlFor="body">
      Blog Body
    </label>
    <textarea class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="body" name='body' placeholder='Blog post body, separated by commas'></textarea>
  </div>

  <div class="flex items-center justify-between">
    <input class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" value="Post Blog" />
  </div>
</form>
  </>
}
