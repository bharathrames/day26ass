import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Base from '../Base/Base'
import { useHistory } from 'react-router-dom'

const UpdateStudents = ({students, setStudents, editidx}) => {
  const history = useHistory()
    const {id} = useParams()
    const editstudent = students[id]
    const [name, setName] = useState("")
    const [batch, setBatch] = useState("")
    const [gender, setGender] = useState("")
    const [qualification, setQualification] = useState("")

    useEffect(()=>{
       setName(editstudent.name)
       setBatch(editstudent.batch)
       setGender(editstudent.gender)
       setQualification(editstudent.qualification)
    },[editstudent])

    function updatestudent(){
     const updatedobj = {
      name,
      batch,
      gender,
      qualification
     }
     students[id] = updatedobj
     setStudents([...students])
     history.push("/student")
    }
  return (
    <Base
    title={"Edit a Students"}
    description={"We can Edit a Student data"}
    >
    <div className='updateinput'>
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
    onClick={updatestudent}
    >Update Students</button>
</div>
</Base>
  )
}

export default UpdateStudents