
import React,{useEffect,useState} from "react";
import deleteimg from '../assets/icons/delete-black-18dp.svg';
import editimg from '../assets/icons/create-black-18dp.svg';
import adduserimg from '../assets/icons/add-24px.svg';
import img from "../assets/profile-images/Ellipse -3.png";
import Logo from '../assets/images/logo.png';
import {Link,useNavigate} from 'react-router-dom';

import profile1 from '../assets/profile-images/Ellipse -1.png';
import profile2 from '../assets/profile-images/Ellipse -2.png';
import profile3 from '../assets/profile-images/Ellipse -3.png';
import profile4 from '../assets/profile-images/Ellipse -4.png';

import '../css/EmployeePayRole.css';


import EmployeeService from '../Service/EmployeePayrollService';

function EmployeePayrole() {
    const nav=useNavigate();

    useEffect(()=>{
        getAllEmployees();
        
        // getEmpData();
       // console.log("Use Effect in the employee Pay Role");
    },[])

    let valuesAssign={
        
        employeeArray:[],
        

    }
    
    
    const [formValue, setValue] = useState({valuesAssign});
    

    let getAllEmployees =()=>{
        //console.log("---------------into ----");
        //console.log(empList)
        EmployeeService.getAllData().then((responce)=>{
            //console.log("---into service");
            //console.log(responce.data)
            setValue({employeeArray:responce.data.data}) 
            
            
            //setValue({len:valuesAssign.employeeArray.length})
        }
        ).catch((err)=>{
            console.log(err);
        });
        
    }

    const len=valuesAssign.employeeArray.length;


    let deleteEmp = (id) => { 
        //console.log("-------deleteEmpbefore conform ---------"+id);
        var confirm = window.confirm(" Deleting conformantion ");
        if(confirm ){
        EmployeeService.deleteEmployee(id).then(()=>{
            window.location.reload();
            getAllEmployees();
        })
        .catch((error)=>{
            console.log(error);
        });
    }else{
        alert(" Not deleted ");
    }
    };
    // const getDateById = (id)=>{
    //     EmployeeService.getEmployeeById(id)
    //     .then((response)=>{
    //         console.log(response.data.name);
    //         let object = response.data.data;
    //         // console.log(object);
    //         setData(object);
    //         // setValue({...formValue, [response.target.name]:object});
    //     })
    //     .catch((error) => {
    //         console.log("error is " + error);
    //     });
    // }
    // const setData = (obj) => {
    //     let array = obj.startDate;
    //     console.log(array);
    //     console.log(obj);

    //     setValue({
    //         ...formValue,
    //         ...obj,
    //         id:obj.emp_id,
    //         name:obj.name,
    //         departmentValue: obj.departments,
    //         isUpdate:true,
    //         day: array[0] + array[1],
    //         month: array[3] + array[4] + array[5],
    //         year: array[7] + array[8] + array[9] + array[10],
    //         notes: obj.note,

    //     });
        
    // }


    let editEmp = (id) => {
        console.log(id);
        // getDateById(id);
        nav(`/${id}`)
        // nav(`/${id}`);
        
      };

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
                    Employee Details<div class="emp-count" id ="empcount">{len}</div>
                </div>
                <a href="http://localhost:3000/" class="add-button">
                <img src={adduserimg} alt="" />Add User</a>
            </div>
            <div class="table-main">
                <table id="table-display" class="table">
                    <thead>
                        <th>Profile</th>
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
                <td id="table body"><img class="profile" src={
                     employee.profilePic === "../assets/profile-images/Ellipse -1.png" ?profile1:
                     employee.profilePic=== "../assets/profile-images/Ellipse -2.png" ? profile2:
                     employee.profilePic=== "../assets/profile-images/Ellipse -3.png" ? profile3
                     : profile4
                    } alt=""/>
                    </td>
                 
                <td>{employee.name}</td>
                <td>{employee.gender}</td>

                <td  id="department"><td id="dept-labe">{""+employee.department}</td>
                </td>
                
                <td>{employee.salary}</td>
                <td>{employee.startDate}</td>
                
                <td>
                <img id="6"  alt="delete" src={deleteimg} onClick={()=>{deleteEmp(employee.empId)}}/>
                <img id="6" alt="edit" src={editimg} onClick={()=>{editEmp(employee.empId)}}/>
                    {/*<Link to='/'> <img src={Create} alt="Update_Logo" id="1" /> </Link>*/}
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