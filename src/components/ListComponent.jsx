import { listEmployees } from "../service/EmployeeService"
import { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom'
import { deleteEmployee } from '../service/EmployeeService'
 function ListComponent() {

  const [employees,setEmployee]=useState([])
  
  const navigator = useNavigate()

  useEffect(()=>{
    getAllEmployee()
  },[])

  function getAllEmployee() {
    listEmployees().then((res)=>{
      setEmployee(res.data)
    }).catch(error =>{
      console.error(error);
    })
  }

  function addNewEmployee() {
    navigator('/add-employee')
  }

  function updateEmployee(id) {
      navigator(`/edit-employee/${id}`)
  }

  function deletedEmployee(id) {
    if(confirm("do you want to delete")){
      deleteEmployee(id).then((res)=>{
        getAllEmployee()
      })
    }
  }

  return (
    <div className="container">
      <h2 className="text-center">List of Employees</h2>
      <button className="btn btn-primary mb-2" onClick={addNewEmployee}>Add employee</button>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Employee Id</th>
            <th>Employee First Name</th>
            <th>Employee Last Name</th>
            <th>Employee Email </th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
            {
              employees.map(e => 
                <tr key={e.id}>
                  <td>{e.id}</td>
                  <td>{e.firstName}</td>
                  <td>{e.lastName}</td>
                  <td>{e.email}</td>
                  <td>
                    <button className="btn btn-info " onClick={()=> updateEmployee(e.id)}>Update</button>
                    <button className="btn btn-danger " onClick={()=> deletedEmployee(e.id)} style={{marginLeft: '10px'}} >Delete</button>
                  </td>
                  
                </tr>
                )
            } 
        </tbody>
      </table>
    </div>
  )
}

export default ListComponent