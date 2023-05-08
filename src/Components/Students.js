import React, { useState,  } from 'react'
import Base from '../Base/Base'
import data from '../Data/Data'
import Addstudents from './Addstudents'
import UpdateStudents from './UpdateStudents'
import { useHistory } from 'react-router-dom'


const Students = ({students, setStudents}) => {
    const history = useHistory()
    const [editidx, setEditidx] = useState({})
    const deleteStudent = (studId) => {
      const remainingstud = students.filter((stud, idx)=> idx !== studId)
      setStudents(remainingstud)
  }
    return (
        <Base
            title={"Students Dashboard📃"}
            description={"The page containes all students data"} >
            <div className='card-container'>
                {students.map((stud, idx) => (
                    <div className='card' key={idx}>
                        <div className='content'>
                        <h5>Name: {stud.name}</h5>
                        <p>Batch: {stud.batch}</p>
                        <p>Gender: {stud.gender}</p>
                        <p>Qualification: {stud.qualification}</p>
                        </div>
                        <div className='control'>
                        <button type="button" class="btn btn-info fa fa-pencil"
                        onClick={()=>history.push(`/edit/${idx}`)} 
                        >Edit</button>{" "}
                        <button type="button" class="btn btn-danger fa fa-trash-o"
                        onClick={()=>deleteStudent(idx)}
                        >Delete</button>
                        </div>
                    </div>
                ))}

            </div>
        </Base>
    )
}

export default Students