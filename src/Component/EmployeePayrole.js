import React from 'react';
import '../css/EmployeePayRole.css';
import Logo from '../assets/images/logo.png';
import deleteimg from '../assets/icons/delete-black-18dp.svg';
import editimg from '../assets/icons/create-black-18dp.svg';
import adduserimg from '../assets/icons/add-24px.svg';
import img from "../assets/profile-images/Ellipse -3.png";
function EmployeePayrole() {
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
            <img src={adduserimg} alt=""/>Add User</a>
        </div>
        <div class="table-main">
            <table id="table-display" class="table">
                <tbody>
                   <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Gender</th>
                    <th>Department</th>
                    <th>salary</th>
                    <th>startDate</th>
                    <th>action</th>
                    </tr> 
                    <tr>
                        <td><img class="profile" alt="" src={img}/> </td>
                        <td>G Hariprasad</td>
                        <td>male</td>
                        <td> <div class="dept-label">HR</div></td>
                        <td>317300</td>
                        <td>1/2/2023</td>
                        <td>
                <img id="6" onclick="remove(this)" alt="delete" src={deleteimg}/>
                <img id="6" onclick="update(this)" alt="edit" src={editimg}/>
            </td>
                    </tr>
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
}

export default EmployeePayrole