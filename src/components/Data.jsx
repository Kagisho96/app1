import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";



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
    setList(prevList => [ ...prevList, userData]);
    localStorage.setItem('list', JSON.stringify(list));
    // list.push(userData);
    console.log(list);
    event.target.reset();



    // alert(' Form submitted successfully!');
    window.alert(newMessage);
    // window.location.reload();
  };

  return (
        <form id="registration" onSubmit={handleSubmit}> 
        <fieldset name="REGISTRATION" id="fieldset">
        <legend>SIGN-IN:</legend>
        <label>NAME: </label>
         <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} required placeholder="name"/> <br />
        <label>SURNAME: </label>
         <input type="text" id="surname" name="surname" value={surname} onChange={(e) => setSurname(e.target.value)} required placeholder="surname"/> <br />
        <label>E-MAIL: </label>
         <input type="text" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="email@gmail.com"/> <br />
        <label>PHONE NUMBER: </label>
         <input type="text" id="phone" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required placeholder="+27712345678"/> <br />
        <label>ADDRESS: </label>
         <input type="text" id="address" name="address" value={address} onChange={(e) => setAddress(e.target.value)}/> <br />
        <label>DOB:</label>
         <input type="date" id="birthday" name="birthday" />
         </fieldset>
        <button id="submitButtonData" type="submit">Submit</button> 
        <br />
        <br />


        <h2>{message}</h2>
    </form> 
  );
  
};
