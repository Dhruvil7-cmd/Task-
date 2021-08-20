import React,{useEffect, useState} from 'react'
//import axios from 'axios'
function User() {
    const [mem, setmem] = useState([])
//Fetching data from the API
    const fetchdata = async()=>{
        const res = await fetch("http://dummy.restapiexample.com/api/v1/employees");
        const response = await res.json();
        setmem(response.data);
    }

    useEffect(() => {
        fetchdata();
    }, []);

    return (
        <div>
            {
                //Displaying the data through mapping
                mem.map((meml)=>{
                    return(
                        <h4>{meml.employee_name}</h4>
                        
                    )
                })
            }       
        </div>
    )
}

export default User
