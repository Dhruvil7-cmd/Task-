import React,{useState} from 'react'

function Contact() {
    const handleSubmit = (e) => {
        e.preventDefault();
        if(Age>=25 && Age<=45){
               if(Email.includes('@')){
                   alert('Successfully Completed')
               }else{
                   alert('Invalid Email')
               }
            }
            else{
                alert('Invalid Age value')
            }
    
}
    const [Name, setName] = useState('')
    const [Age, setAge] = useState('')
    const [Email, setEmail] = useState('')
    return (
        <div>
            <form onSubmit={e => (handleSubmit(e))}>
            <label>Name:<input type="text" value={Name} onChange={e => setName(e.target.value) } required autoFocus/></label><br /><br/><br/>
            <label>Age:<input type="number" value={Age} onChange={e => setAge(e.target.value)} required/></label><br /><br/><br/>
            <label>Email:<input type="email" value={Email} onChange={e => setEmail(e.target.value)} required/></label><br /><br/><br/>    
            <label>Message:<textarea maxLength='255'/></label><br />
            <button type="submit" required>SUBMIT</button>
            </form>           
        </div>
    )
}

export default Contact
