import { useState } from 'react';
import './User.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function User() {

   const [list,setList] = useState([])
   const [task,setTask] = useState("")
   const [selectedDate, setSelectedDate] = useState(null);


   const addTask =() =>{
    setList([...list, {text:task , complete:false}])
    setTask("")
   }

   const remove =(index)=>{
    const updateList = [...list];
    updateList.splice(index,1);
    setList(updateList)
   }

   const completed =(index)=>{
    const updateList = [...list];
    updateList[index].complete = !updateList[index].complete;
    setList(updateList);
   }

   
  const handleDateChange = date => {
    setSelectedDate(date);
  };

  return (
    <div className="app">
     <h1>Active Users</h1>

     <div className="usercontainer">
      <input type="text"  placeholder='Add active user...'
      onChange={(e)=>setTask(e.target.value)}
      value={task}
      />
      <div>
      <button onClick={addTask}>Add</button>
      </div>
     </div>

     <div className="list">
      <ul>
      {list.map((data,index)=>{
        return <li className={data.complete ? "complete" : ""} key={index} >
          <span>{data.text}</span>
          <button  onClick={()=>completed(index)} >Active</button>
          <DatePicker className='date'
          placeholderText='Date'
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="MM/dd/yyyy" />
          <button className='dlt' onClick={()=>remove(index)} >Delete</button>
        </li>
      })}
      </ul>
     </div>
    </div>
  );
}

export default User;

