import { useEffect, useState } from "react"
import { createEmployee, getEmployee, updateEmployee } from "../service/EmployeeService";
import {useNavigate,useParams} from 'react-router-dom';


function EmployeeComponent() {

  const [firstName, setFirstName] = useState('')
  const [lastName, setlastName] = useState('')
  const [email, setEmail] = useState('')
  const navigate = useNavigate();

  const {id} = useParams()

  const [error,setError] = useState({
    firstName:'',
    lastName:'',
    email:''
  })

  useEffect(()=>{
    if(id){
      getEmployee(id).then((res)=>{
        setFirstName(res.data.firstName)
        setlastName(res.data.lastName)
        setEmail(res.data.email)
      }).catch(error => console.log(error))
    }
  },[id])

  function saveorUpdateEmployee(e){
    e.preventDefault();
    
    if(validateForm()) {
      const employee = {firstName,lastName,email}
      console.log(employee);
      if(id){
        updateEmployee(id,employee).then((res)=>{
          console.log(res.data);
          navigate('/')
        })
      }else{
        createEmployee(employee).then((res)=>{
          console.log(res.data);
          navigate('/')
        })
      }
      
      setFirstName('')
      setlastName('')
      setEmail('')
    }
    
  }
  
  function validateForm(){
    let valid=true;
    const errorsCopy={... error}
    
    if(firstName.trim()){
      errorsCopy.firstName=''
    } else {
      errorsCopy.firstName='FirstName required'
      valid = false
    }

    if(lastName.trim()){
      errorsCopy.lastName=''
    } else {
      errorsCopy.lastName='LastName required'
      valid = false
    }

    if(email.trim()){
      errorsCopy.email=''
    } else {
      errorsCopy.email='Email required'
      valid = false
    }
    setError(errorsCopy)
    return valid
  }

  function pageTitle(){
    if(id){
      return <h2 className="text-center">Edit Employee</h2>
    }else{
      return <h2 className="text-center">Add Employee</h2>
    }
  }

  return (
    
    <div className="container">
      <br />
      <div className="row">
        <div className="card col-md-10 offset-md-1 ">
          {
            pageTitle()
          }
          <br />
          <br />
          <div className="card-body">
            <form action="">
              <div className="form-group mb-2">
                <label className="form-label">First Name:</label>
                <input type="text" 
                  placeholder="Enter First Name" 
                  name="firstName" 
                  value={firstName} 
                  className={`form-control ${error.firstName ? 'is-invalid' :''}`}
                  onChange={(e) => setFirstName(e.target.value)} />
                  {error.firstName && <div className="invalid-feedback">{error.firstName}</div>}
              </div>
              <div className="form-group mb-2">
                <label className="form-label">Last Name:</label>
                <input type="text" 
                  placeholder="Enter Last Name" 
                  name="lastName" value={lastName} 
                  className={`form-control ${error.lastName ? 'is-invalid' :''}`} 
                  onChange={(e) => setlastName(e.target.value)} />
                  {error.lastName && <div className="invalid-feedback">{error.lastName}</div> }
              </div>
              <div className="form-group mb-2">
                <label className="form-label">Email:</label>
                <input type="text" 
                  placeholder="Enter Email" 
                  name="firstName" 
                  value={email} 
                  className={`form-control ${error.email ? 'is-invalid' :''}`}
                  onChange={(e) => setEmail(e.target.value)} />
                  {error.email && <div className="invalid-feedback">{error.email}</div> }
              </div>
              <button className="btn btn-success" onClick={saveorUpdateEmployee}>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EmployeeComponent