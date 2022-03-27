import React,{useState,useEffect} from 'react'
import './Style.css';
 import Table from './Table'

 //getting data from LS
 
  const getDatafromLS=()=>{
    const data =localStorage.getItem('user');
    if (data){
      return JSON.parse(data);
    }else{
      return []
    }
  } 


export const  App=() =>{
  //input states value
 const[name, setName]=useState('');
//console.log(name);
  const[age, setAge] =useState('');
//console.log(age);
  
  //arr of user data
const[user,setUser]=useState(getDatafromLS());
//console.log(user);
//var userdata= JSON.parse(localStorage.getItem('userdata')|| "[]");
 
  //form submit
  const SubmitUser =(e)=>{
    e.preventDefault();
   // var userdata= JSON.parse(localStorage.getItem('userdata')|| "[]");
    var userObj ={
     fname:name,
     Yage:age
  }
 // userdata.push(userObj);
 //console.log(userobj);
 //localStorage.setItem('userdata',JSON.stringify(userdata));
   setUser([...user,userObj]);
   //console.log(setUser);
}
//saving data to localStorage;
useEffect(()=>{
  localStorage.setItem('user',JSON.stringify(user));
  },[user]);
  
//clear input
const ClearInput =()=>{
  setName('');
   setAge('');
}
  
//delete  user
// const DeleteUser =(age)=>{
// console.log(age);
// }

  return (<>
    <div className="App">
      <div className="heading">ToDo</div>
      <div className="page">
     
     <div className='adduserinfo'>

    <div className="userform">
    <div className="adduser">Add User</div>

    <form action="" >
      <label htmlFor="name">Full Name:</label> <br />
      <input type="text" name="name" value={name}  className='input'
       placeholder='enter your fname' 
      onChange={(e)=>setName(e.target.value)} /> <br />
      <label htmlFor="age">Age:</label> <br />
      <input type="number" name="age" value={age} className='input'
       placeholder='enter your digit' 
      onChange={(e)=>setAge(e.target.value)} /> <br />
      </form> 
  <div className="buttondiv">
      <button  onClick={SubmitUser} className='save btn'>SAVE</button>
      <button onClick={ClearInput} className='clear btn'>CLEAR</button>
      </div>
</div>
  </div>

 <div className="userdatapage">
  <div className='datapage'>
   <div className="headpage">Users</div> 

<div className="table">
   <table className="datatable">
  <thead className='hello'>
    <tr>
      <th>Name</th>
      <th>Age</th>
      <th>Action</th>
    </tr>
  </thead> 
{user.lenght>0&&<>
  <tbody>
    <Table user={user}  />
  </tbody>
  </>}
  {user.lenght<1&& <div>No data available</div>}
     </table>
     </div>
  
<div className="Cbutton">
<button className="clearAll btn">CLEAR ALL</button>
</div>
 </div> 
 </div>  
  
  </div>
  </div>
    </>
  );
}

export default App;
