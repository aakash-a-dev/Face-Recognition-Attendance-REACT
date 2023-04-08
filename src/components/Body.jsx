import { React, useEffect, useState } from "react";


const Body = () => {
    let API = "https://jsonplaceholder.typicode.com/users"
    const [users, setUsers] = useState([])
    const fetchAPIData = async (url) => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            if(data.length > 0){
                setUsers(data);
            }
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        fetchAPIData(API);
    },[])
    
    return (
        <div>
           <h1
        class="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
      >
        Attendance Sheet
      </h1>
            <table border="1" className="mx-auto max-w-4xl w-full whitespace-nowrap rounded-lg bg-white divide-y divide-gray-300">
                <thead className="bg-gray-900 ">
                <tr className="text-white text-left">
                    <td className="font-semibold text-sm uppercase px-6 py-4">ID</td>
                    <td className="font-semibold text-sm uppercase px-6 py-4">Author</td>
                    <td className="font-semibold text-sm uppercase px-6 py-4">Type</td>
                    <td className="font-semibold text-sm uppercase px-6 py-4">Username</td>
                </tr>
                </thead>{
                    users.map((currUser)=>{
                   const {id, name, email, username} = currUser;

                   return(
                    <tr className="text-left"key={id}>
                        <td>{id}</td>
                        <td>{name}</td>
                        <td>{email}</td>
                        <td>{username}</td>
                    </tr>
                   )
                    })
                }
            </table>
        </div>
    );
}

export default Body;