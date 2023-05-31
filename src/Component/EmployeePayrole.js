
import React,{useEffect,useState} from "react";
import deleteimg from '../assets/icons/delete-black-18dp.svg';
import editimg from '../assets/icons/create-black-18dp.svg';
import adduserimg from '../assets/icons/add-24px.svg';
import img from "../assets/profile-images/Ellipse -3.png";
import Logo from '../assets/images/logo.png';


import profile1 from '../assets/profile-images/Ellipse -1.png';
import profile2 from '../assets/profile-images/Ellipse -2.png';
import profile3 from '../assets/profile-images/Ellipse -3.png';
import profile4 from '../assets/profile-images/Ellipse -4.png';

import '../css/EmployeePayRole.css';


import EmployeeService from '../Service/EmployeePayrollService';

function EmployeePayrole() {

    useEffect(()=>{
        getAllEmployees();
        // getEmpData();
        console.log("Use Effect in the employee Pay Role");
    },[])

    let valuesAssign={
        employeeArray:[],
    }
    const [formValue, setValue] = useState({valuesAssign});

    



    let getAllEmployees =()=>{
        console.log("---------------into ----");
        EmployeeService.getAllData().then((responce)=>{
            console.log("---into service");

            console.log(responce.data)
            setValue({employeeArray:responce.data.data})
            console.log("The get all employee method "+responce.data)
            
        }
        ).catch((err)=>{
            console.log(err);
        });
        
    }

    return (
        <div>
            <body>
            <header class="header-content header">
            <div class="logo-content">
                <img src={Logo} alt="logo"/>
                <div>
                    <span class="emp-text">EMPLOYEE</span><br/>
                    <span class="emp-text emp-payroll">PAYROLL</span>
                </div>
            </div>
        </header>
        <div class="main-content">
            <div class="header-content">
                <div class="emp-detail-text">
                    Employee Details<div class="emp-count" id ="empcount">1</div>
                </div>
                <a href="http://localhost:3000/" class="add-button">
                <img src={adduserimg} alt="" />Add User</a>
            </div>
            <div class="table-main">
                <table id="table-display" class="table">
                    <thead>
                        <th></th>
                        <th id="name">Name</th>
                        <th id="gender">Gender</th>
                        <th>Department</th>
                        <th>salary</th>
                        <th>startDate</th>
                        <th>action</th>
                    </thead>
                    <tbody>
        {
            formValue.employeeArray && formValue.employeeArray.map((employee, index)=>(
            <tr className="dash" key={`${index}`}>
                <td><img class="profile" src={
                     employee.profilePic === "../assets/profile-images/Ellipse -1.png" ?profile1:
                     employee.profilePic=== "../assets/profile-images/Ellipse -2.png" ? profile2:
                     employee.profilePic=== "../assets/profile-images/Ellipse -3.png" ? profile3
                     : profile4
                    } alt=""/>
                    </td>
                 
                <td>{employee.name}</td>
                <td>{employee.gender}</td>

                <td>{" "+employee.department}
                </td>
                
                <td>{employee.salary}</td>
                <td>{employee.startDate}</td>
                
                <td>
                <img id="6" onClick="remove(this)" alt="delete" src={deleteimg}/>
                <img id="6" onClick="update(this)" alt="edit" src={editimg}/>
                    {/* <img src={Create} alt="Update_Logo" id="1" /> */}
                </td>
            </tr>
            
        ))}
        </tbody>
                </table>
            </div>
        </div>
        <div class='table-main'>
            <div id="table-display" class="table"></div>
                
        </div>
        </body>
        </div>
      )
}export default EmployeePayrole;