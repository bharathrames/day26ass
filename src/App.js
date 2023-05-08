import { Switch } from 'react-router-dom';
import './App.css';
import Students from './Components/Students';
import { Route } from 'react-router-dom';
import Addstudents from './Components/Addstudents';
import UpdateStudents from './Components/UpdateStudents';
import data from './Data/Data';
import { useState } from 'react';
import Nopage from './Components/Nopage';
import Dashboard from './Components/Dashboard';


function App() {
  const [students, setStudents] = useState(data)
  return (
    <div className="App">
     <Switch>
      <Route exact path="/">
        <Dashboard/>
      </Route >

      <Route path="/student">
      <Students
         students = {students}
         setStudents = {setStudents}/>
      </Route>

      <Route  path="/add">
         <Addstudents
         students = {students}
         setStudents = {setStudents}
         />
      </Route>

      <Route  path="/edit/:id">
         <UpdateStudents
         students = {students}
         setStudents = {setStudents}
         />
      </Route>
      <Route path="/**">
        <Nopage/>
      </Route>
     </Switch>
    </div>
  );
}

export default App;
