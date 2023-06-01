import React, {useState} from 'react'

const Register = () => {
   //const [text, setText] = useState("");
  //const refContainer=useRef()
  const [name,setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Number, setNumber] = useState(0);
const [data,setData] = useState([]);

  const handleOnClickName = (e) =>{
setName(e.target.value)
  }
  const handleOnClickEmail = (e) =>{
    setEmail(e.target.value)
  }
  const handleOnClickPassword = (e) =>{
    setPassword(e.target.value)
  }
  const handleOnClickNumber = (e) =>{
    setNumber(e.target.value)
  }
  
  const handleOnclickSubmit = (e) =>{
   e.preventDefault()
   //console.log(refContainer.current.value)
    
    setData((prevValue)=>[...prevValue,{name,email,password}])
    
    setNumber((prevNum)=> prevNum+10)
    //setData({name,email,password})
    setName("");
    setEmail("")
    setPassword("")
  }

    return ( 
     <>
     <div className="container">
       <form >
  <div className="mb-3">
 
    <label htmlFor="exampleIn" className="form-label" >Enter Your Name</label>
    <input type="text" value={name} className="form-control"  id="exampleInputName"onChange={handleOnClickName} aria-describedby="emailHelp"/>
    
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" value={email} className="form-control" id="exampleInputEmail1" onChange={handleOnClickEmail} aria-describedby="emailHelp"/>
    
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" value={password} className="form-control" onChange={handleOnClickPassword} id="exampleInputPassword1"/>
  </div>
  
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Number</label>
    <input type="text" value={Number} className="form-control" onChange={handleOnClickNumber} id="exampleInputPassword1"/>
  </div>
  
  
  <button  className="btn btn-primary" onClick={handleOnclickSubmit}>Submit</button>
  
</form>
</div>
 <div className="targets">
  {data.map((item)=>{return (<div>{item.name}</div>)})}
  {data.map((item)=>{return (<div>{item.email}</div>)})}
  {data.map((item)=>{return (<div>{item.password}</div>)})}
  {/* <div>{data.name}</div>
  <div>{data.email}</div>
  <div>{data.password}</div> */}
  
  <div>{Number}</div>
</div> 
        </>
    )
};

/* const x = [
  {
    name: "Trisha",
    email: "trisha@email.com"
  },
  {
    name: "Tuhin",
    email: "tuhin@email.com"
  },
  {
    name: "Sandip",
    email: "sandip@email.com"
  },
  {
    name: "Puja",
    email: "puja@email.com"
  }
]
for(let i=0;i<x.length;i++){
  console.log(x[i].name)
}
x.map((item)=> {console.log(item.name)}) */
    

export default Register

