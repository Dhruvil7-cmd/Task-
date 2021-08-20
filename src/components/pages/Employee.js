import React,{useState} from 'react'
//Using props passing the data from company.js
const Employee = ({ Fname }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    const [fname, setfname] = useState('')
    return (
        <div>
            <form onSubmit={e => {handleSubmit(e)}}>
                    <label>
                    ChildName:
                    {(() => {
                //passed value is displayed if valid else input box will be empty.
                if (Fname) {
                return (
                    <input type="text" value={Fname}/>
                )
                } else {
                return (
                    <input type="text" value={fname} onChange={e => setfname(e => e.target.value)}/>
                )
                }
            })()}
            </label>
            </form>
        </div>
    )
}

export default Employee
