import { React, useEffect, useState } from "react";


const Body = () => {
    let API = "https://attendance-api-zoga.vercel.app/attendance"
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
      
<div class="relative overflow-x-auto shadow-md sm:rounded-lg my-10 px-3">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Name
                </th>
                <th scope="col" class="px-6 py-3">
                    Time Stamp
                </th>
            </tr>
        </thead>
        <tbody>{
                users.map((currUser)=>{
                   const {name, time} = currUser;

                   return(
                    <tr class="border-b border-gray-200 dark:border-gray-700" key={time}>
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">{name}</th>
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">{time}</th>
                    </tr>
                   )
                    })
                }
        </tbody>
    </table>
</div>

        </div>
    );
}

export default Body;