import React,{useState} from 'react'
import Employee from './Employee'

function Company() {
    const [firstname, setfirstname] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <div>
            <form onSubmit={e => {handleSubmit(e)}}>
                {/* Input box of parent component */}
                <label>
                    FirstName:
                    <input type="text" value={firstname} onChange={e => setfirstname(e.target.value)} />
                </label>

            </form>
            <br />
            <br />
            <br />
            {/* Value is passed to the Employee.js */}
            <Employee Fname={firstname}  />
            
        </div>
    )
}

export default Company
