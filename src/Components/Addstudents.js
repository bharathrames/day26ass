import React, { useState } from 'react'
import Base from '../Base/Base'
import { useHistory } from 'react-router-dom'

const Addstudents = ({students, setStudents}) => {
  const history = useHistory()
 const [name, setName] = useState("")
 const [batch, setBatch] = useState("")
 const [gender, setGender] = useState("")
 const [qualification, setQualification] = useState("")

 function createstudents(){
const newStudents ={
    name,
    batch,
    gender,
    qualification
}
setStudents([...students, newStudents])
history.push("/student")
 }
  return (
    <Base
    title={"Add New Students"}
    description={"We can add new students data here"}
    >
    <div className='addinput'>
        <input
        placeholder='Enter Name'
        type='text'
        value={name}
        onChange={(e)=>setName(e.target.value)}
        />
        <input
        placeholder='Enter Batch'
        type='text'
        value={batch}
        onChange={(e)=>setBatch(e.target.value)}
        />
        <input
        placeholder='Enter Gender'
        type='text'
        value={gender}
        onChange={(e)=>setGender(e.target.value)}
        />
        <input
        placeholder='Enter Qualification'
        type='text'
        value={qualification}
        onChange={(e)=>setQualification(e.target.value)}
        />{" "}

        <button type="button" class="btn btn-success"
        onClick={createstudents}
        >Add Students</button>
    </div>
    </Base>
  )
}

export default Addstudents