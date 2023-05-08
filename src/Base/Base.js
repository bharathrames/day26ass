import React from 'react'
import { useHistory } from 'react-router-dom'

const Base = ({ title, description, children }) => {
    const history = useHistory()
    return (
        <div className='container'>
        <div className='main-component base-component'>
            <div className='topbutton'>
            <button
                onClick={() => history.push("/")}
            >Dashboard</button>
            
            <button
                onClick={() => history.push("/student")}
            >Students-List</button>
           
            <button
                onClick={() => history.push("/add")}
            >Add-Student</button>
            </div>
            <header>
                <h1 className='heading'>{title}</h1>
            </header>
            <main className='main-segment'>
                <h2>{description}</h2>
                <div>
                    {children}
                </div>
            </main>
        </div>
        </div>
    )
}

export default Base