// import React from 'react';
import '../css/Home.css';
import React, { useState } from 'react';
import profile1 from '../assets/profile-images/Ellipse -1.png';
import profile2 from '../assets/profile-images/Ellipse -2.png';
import profile3 from '../assets/profile-images/Ellipse -3.png';
import profile4 from '../assets/profile-images/Ellipse -4.png';
import EmployeeService from '../Service/EmployeePayrollService';
import Logo from '../assets/images/logo.png'
import { Link } from 'react-router-dom';
function Home(props) {
    let values = {
        name:'',
        department:["HR","Sales","Finance","Engineer","Others"],
        departmentValue:[],
        day:'',
        month:'',
        year:'',
        salary:'',
        gender:'',
        profilePic:'',
        startDate:'',
        notes:'',
    };


    let onDepartmentChange = (event) => {
        let departmentName =  event.target.value;
        let index = formValue.departmentValue.indexOf(departmentName);
        let checkArray = [ ...formValue.departmentValue];
        if(index > -1) {checkArray.splice(index,1);}
        else {checkArray.push(departmentName);}
        setValue({ ...formValue, departmentValue: checkArray});
    }
    // let onProfilepicChange =(event)=>{
    //     let profilePath=event.target.value;
    //     let index = formValue.profilePic.indexOf(profilePath);
    //     setValue({...formValue,profilePic:values.profiles[index]})
    // }

    const [formValue, setValue] = useState(values);

    let onChangeFormValue = (event) => {
        console.log(event.target.name);
        console.log(event.target.value);
        setValue({...formValue, [event.target.name]: event.target.value });  
    };
    

    let handleAutoSubmit = (event)=>{
        event.preventDefault();
    }

    
    let onSubmit = () =>{
        let object = {
            name: formValue.name,
            startDate: `${formValue.day}-${formValue.month}-${formValue.year}`,
            salary: formValue.salary,
            notes: formValue.notes,
            gender: formValue.gender,
            department: formValue.departmentValue,
            profilePic:formValue.profile,
        }
        console.log(object);
        EmployeeService.addEmployee(object)
            .then((response) => {
                console.log(response);
                alert("Data Added ");
        })
            .catch((error) => {
                console.log(error);
        });
    };
    
    

    
  return (
<>
     <div className="form-content">
        <form action="" className="form" onSubmit={handleAutoSubmit}>
        <header class="header-content header">
            <div class="logo-content">
            <Link to='/employeelist'>
                <img src={Logo} alt="logo"/></Link>
                <div>
                    <span class="emp-text">EMPLOYEE</span>
                    {/* {<Link to="/item">/* </Link> */} 
                    <span class="emp-text emp-payroll">PAYROLL</span>
                
                </div>
                
            </div>
        </header>
        
            <div className="form-body">
            <div class="row-content">
                <label class="label text" for="name">Name</label>
                <input class="input"  onChange={onChangeFormValue}  type="text" id="name" name="name" placeholder="Enter Your Name" required/>
                <error-output class = "name-error" for="name"></error-output>
            </div>
            <div className="row-content">
            <label class="label text" for="profile">Profile image</label>
                    <div class="profile-radio-content">
                    <label>
                        <input type="radio" id = "profile1" name="profile" 
                        value="../assets/profile-images/Ellipse -1.png"
                        onChange={onChangeFormValue} required/>
                        <img class="profile" id = "image1" src={profile1} alt=" logo "/>
                    </label>
                    <label>
                        <input type="radio" id = "profile2" name="profile" 
                        value="../assets/profile-images/Ellipse -2.png" 
                        onChange={onChangeFormValue}  required/>
                        <img class="profile" id = "image2" src={profile2} alt=" logo " />
                    </label>
                    <label>
                        <input type="radio" id = "profile3" name="profile" 
                        value="../assets/profile-images/Ellipse -3.png" onChange={onChangeFormValue}  required/>
                        <img class="profile" id = "image3" src={profile3} alt=" logo "/>
                    </label>
                    <label>
                        <input type="radio" id = "profile4" name="profile" 
                        value="../assets/profile-images/Ellipse -4.png" onChange={onChangeFormValue}  required/>
                        <img class="profile" id = "image4" src={profile4} alt=" logo "/>
                    </label>
                    </div>
            </div>
            <div className="row-content">
            <label class="label text" for="gender">Gender</label>
                    <div>
                        <input type="radio" id="male" name="gender" onChange={onChangeFormValue} value="male"/>
                        <label class="text" for="male">Male</label>

                        <input type="radio" id="female" name="gender" onChange={onChangeFormValue}  value="female"/>
                        <label class="text" for="female">Female</label>
                        
                        <input type="radio" id="other" name="gender" onChange={onChangeFormValue}  value="other"/>
                        <label class="text" for="other">Other</label>
                    </div>
            </div>
                <div class="row-content">
                    <label class="label text" for="department">Department</label>
                    <div>
                    <input class="checkbox" type="checkbox" id="hr" name="department" onChange={onDepartmentChange}  value="HR"/>
                    <label class="text" for="hr">HR</label>
                    <input class="checkbox" type="checkbox" id="sales" name="department" onChange={onDepartmentChange}  value="Sales"/>
                    <label class="text" for="sales">Sales</label>
                    <input class="checkbox" type="checkbox" id="finance" name="department"  onChange={onDepartmentChange} value="Finance"/>
                    <label class="text" for="finance">Finance</label>
                    <input class="checkbox" type="checkbox" id="engineer" name="department" onChange={onDepartmentChange}  value="Engineer"/>
                    <label class="text" for="engineer">Engineer</label>
                    <input class="checkbox" type="checkbox" id="others" name="department" onChange={onDepartmentChange}  value="Others"/>
                    <label class="text" for="others">Others</label>
                </div>
                </div>
                <div class="row-content">
                    <label class="label text" for="salary">Salary</label>
                    <div>
                        <select name="salary" class="Salary-option"  onChange={onChangeFormValue}>
                        <option class="Salary-option" value="" disabled selected hidden>Select Salary</option>
                            <option value="<100000" class="Salary-option">&lt;100000</option>
                            <option value="200000" >200000</option>
                            <option value="250000" >2800000</option>
                            <option value="300000">2900000</option>
                            <option value="350000" >3000000</option>
                            <option value="400000" >3100000</option>
                            <option value="450000" >300000</option>
                            <option value="500000" >400000</option>
                            <option value="550000" >500000</option>
                            <option value="600000" >600000</option>
                            <option value="900000" >900000</option>
                            <option value="1200000">1200000</option>
                            <option value="1500000">1500000</option>
                            <option value="1800000">1800000</option>
                            <option value="2000000">2000000</option>
                            <option value="2500000">2500000</option>
                            <option value="3000000">3000000</option>
                            <option value="3500000">3500000</option>
                            <option value="4000000">4000000</option>
                            <option value="4500000">4500000</option>
                            <option value="5000000">5000000</option>
                            <option value="5500000">5500000</option>
                            <option value="6000000">6000000</option>
                            <option value="6500000">6500000</option>
                            <option value="7000000">7000000</option>
                            <option value="7500000">7500000</option>
                            <option value="8000000">8000000</option>
                            <option value="8500000">8500000</option>
                            <option value="9000000">9000000</option>
                            <option value="9500000">9500000</option>
                            <option value="9500000 >">9500000&gt;</option>
                        </select>
                    </div>
                   
                </div>
                <div class="row-content">
                    <label class="label text" for="startDate" onChange={onChangeFormValue}>Start Date</label>
                    <div>
                        <select name="day" id="day"  onChange={onChangeFormValue} >
                        <option value="" disabled selected hidden>Day</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                            <option value="13">13</option>
                            <option value="14">14</option>
                            <option value="15">15</option>
                            <option value="16">16</option>
                            <option value="17">17</option>
                            <option value="18">18</option>
                            <option value="19">19</option>
                            <option value="20">20</option>
                            <option value="21">21</option>
                            <option value="22">22</option>
                            <option value="23">23</option>
                            <option value="24">24</option>
                            <option value="25">25</option>
                            <option value="26">26</option>
                            <option value="27">27</option>
                            <option value="28">28</option>
                            <option value="29">29</option>
                            <option value="30">30</option>
                            <option value="31">31</option>   
                        </select>
                        <select name="month" id="month" onChange={onChangeFormValue}>
                        <option value="" disabled selected hidden>Month</option>
                            <option value="Jan">January</option>
                            <option value="Feb">February</option>
                            <option value="March">March</option>
                            <option value="April">April</option>
                            <option value="May">May</option>
                            <option value="June">June</option>
                            <option value="July">July</option>
                            <option value="Aug">August</option>
                            <option value="Sept">September</option>
                            <option value="Oct">October</option>
                            <option value="Nov">November</option>
                            <option value="Dec">December</option>
                        </select>
                        <select name="year" id="year" onChange={onChangeFormValue}>
                        <option value="" disabled selected hidden>Year</option>
                            <option value="2022">2022</option>
                            <option value="2021">2021</option>
                            <option value="2020">2020</option>
                            <option value="2019">2019</option>
                            <option value="2018">2018</option>
                            <option value="2017">2017</option>
                            <option value="2016">2016</option>
                        </select>
                    </div>
                </div>
                <div class="row-content">
                <label class="label text" for="notes">Notes</label>
                <textarea id="notes" class="input" name="notes"  className="notes" onChange={onChangeFormValue} placeholder="" ></textarea>{/* style="height:100px" */}
                </div>
                <div class="buttonParent">
                 {/* <a href="/pages/home.html" class="cancelButton button">Cancel</a> */}
                 <div class="submit-reset"><nav>
                     <Link to='/'> <button type="submit" class="button submitButton" id="submitButton" onClick={onSubmit}>Submit</button> </Link>
                     {/* <button type="submit" class="button submitButton" id="submitButton" onClick={onSubmit}>Submit</button> */}
                     <button type="reset" class="resetButton button">Reset</button>
                 </nav>
                 </div>
                </div>
                </div>
        </form>
     </div>
   </>
  );
}

export default Home;