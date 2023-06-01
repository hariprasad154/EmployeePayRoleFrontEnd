// import React from 'react';
import '../css/Home.css';

import React, { useState ,useEffect} from 'react';
import profile1 from '../assets/profile-images/Ellipse -1.png';
import profile2 from '../assets/profile-images/Ellipse -2.png';
import profile3 from '../assets/profile-images/Ellipse -3.png';
import profile4 from '../assets/profile-images/Ellipse -4.png';
import EmployeeService from '../Service/EmployeePayrollService';
import Logo from '../assets/images/logo.png'
import { Link,useNavigate,useParams } from 'react-router-dom';
function Home(props) {
    const nav=useNavigate();
    let values = {
        name:'',
        department:["HR","Sales","Finance","Engineer","Others"],
        departmentValue:[],
        day:'',
        month:'',
        year:'',
        salary:'',
        gender:'',
        profile:'',
        startDate:'',
        notes:'',
    };


    const onDepartmentChange = (event) => {
        let departmentName =  event.target.value;
        console.log(departmentName);
        let index = formValue.departmentValue.indexOf(departmentName);
        console.log(index);
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

    
    // let save = () =>{
    //     let object = {
    //         name: formValue.name,
    //         startDate: `${formValue.day}-${formValue.month}-${formValue.year}`,
    //         salary: formValue.salary,
    //         notes: formValue.notes,
    //         gender: formValue.gender,
    //         department: formValue.departmentValue,
    //         profilePic:formValue.profile,
    //     }
    //     console.log(object);
    //     EmployeeService.addEmployee(object)
    //         .then((response) => {
    //             console.log(response);
    //             alert("Data Added ");
    //     })
    //         .catch((error) => {
    //             console.log(error);
    //     });
    // };
    

    let onSubmit = () =>{
        let object = {
            name: formValue.name,
            startDate: `${formValue.day}-${formValue.month}-${formValue.year}`,
            salary: formValue.salary,
            notes: formValue.notes,
            gender: formValue.gender,
            department: formValue.departmentValue,
            profile:formValue.profilePic,
        }


        if(formValue.isUpdate){
            var ans = window.confirm("Confirm the Changes");
            if(ans === true){
                EmployeeService.updateEmployee(params.id, object)
                .then((data)=>{
                    console.log(data.data.data);
                    nav('/');
                    alert("Data updated successfully..!!");
                })
                .catch((error)=>{
                    console.log(error);
                });
            }   
        }else{
        console.log(object);
        EmployeeService.addEmployee(object)
            .then((response) => {
                console.log(response);
                alert("Data Added ");
        })
            .catch((error) => {
                console.log(error);
        });
    }
       
    };
    
    const params = useParams();
    useEffect(()=>{
        console.log("useEffect Starting...");
        if(params.id){
            console.log("intio ");
            getDateById(params.id);
        }
    },[params.id]);

    
    const getDateById = (id)=>{
        EmployeeService.getEmployeeById(id)
        .then((response)=>{
            console.log(response.data.data.name);
            let object = response.data.data;
            // console.log(object);
            setData(object);
            //setValue({...formValue, [response.target.name]:object});
        })
        .catch((error) => {
            console.log("error is " + error);
        });
    }


    

    const setData = (obj) => {
        let array = obj.startDate;
        console.log(obj);

        setValue({
            ...formValue,
            ...obj,
            id:obj.empId,
            name:obj.name,
            department: obj.department,
            profile:obj.profilePic,
            isUpdate:true,
            day: array[0] + array[1],
            month: array[3] + array[4] + array[5],
            year: array[7] + array[8] + array[9] + array[10],
            notes: obj.note,

        });
        
    }
    const getChecked = (name) => {
        return (
            formValue.departmentValue && formValue.departmentValue.includes(name)
        );
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
                <input class="input"  onChange={onChangeFormValue}  type="text" id="name" name="name" placeholder="Enter Your Name" value={formValue.name} required/>
                <error-output class = "name-error" for="name"></error-output>
            </div>
            <div className="row-content">
            <label class="label text" for="profile">Profile image</label>
                    <div class="profile-radio-content">
                    <label>
                            <input type="radio" className="profile" name="profile"
                            value='../assets/profile-images/Ellipse -1.png' checked={formValue.profilePic === "../assets/profile-images/Ellipse -1.png"}  onChange={onChangeFormValue} required />
                            <img class="profile-image" className="image"  src={profile1} alt="profile-img not found" />
                        </label>
                        <label>
                            <input type="radio" className="profile" name="profile"
                            value="../assets/profile-images/Ellipse -2.png"
                            checked={formValue.profilePic === "../assets/profile-images/Ellipse -2.png"} onChange={onChangeFormValue} required />
                            <img class="profile-image" className="image" src={profile2} alt="profile-img not found" />
                        </label>
                        <label>
                            <input type="radio" className="profile" name="profile"
                            value="../assets/profile-images/Ellipse -3.png" checked={formValue.profilePic === "../assets/profile-images/Ellipse -3.png"}  onChange={onChangeFormValue} required />
                            <img class="profile-image" className="image"  src={profile3} alt="profile-img not found" />
                        </label>
                    <label>
                        <input type="radio" id = "profile4" name="profile" 
                        value="../assets/profile-images/Ellipse -4.png" 
                        checked={formValue.profile === "../assets/profile-images/Ellipse -4.png"}
                        onChange={onChangeFormValue}  required/>
                        <img class="profile" id = "image4" src={profile4} alt=" logo "/>
                    </label>
                    </div>
            </div>
            <div className="row-content">
            <label class="label text" for="gender">Gender</label>
                    <div>
                        <input type="radio" id="male" name="gender" onChange={onChangeFormValue} value="male" checked={formValue.gender === "male"}/>
                        <label class="text" for="male">Male</label>

                        <input type="radio" id="female" name="gender" onChange={onChangeFormValue}  value="female" checked={formValue.gender === "female"}/>
                        <label class="text" for="female">Female</label>
                        
                        <input type="radio" id="other" name="gender" onChange={onChangeFormValue}  value="other" checked={formValue.gender === "other"}/>
                        <label class="text" for="other">Other</label>
                    </div>
            </div>
                <div class="row-content">
                    <label class="label text" for="department">Department</label>
                    <div>
                    <input class="checkbox" type="checkbox" id="hr" name="department" onChange={onDepartmentChange} checked={getChecked("HR")}  value="HR"/>
                    <label class="text" for="hr">HR</label>
                    <input class="checkbox" type="checkbox" id="sales" name="department" onChange={onDepartmentChange}  checked={getChecked("Sales")}   value="Sales"/>
                    <label class="text" for="sales">Sales</label>
                    <input class="checkbox" type="checkbox" id="finance" name="department"  onChange={onDepartmentChange} checked={getChecked("Finance")}   value="Finance"/>
                    <label class="text" for="finance">Finance</label>
                    <input class="checkbox" type="checkbox" id="engineer" name="department" onChange={onDepartmentChange} checked={getChecked("Engineer")}    value="Engineer"/>
                    <label class="text" for="engineer">Engineer</label>
                    <input class="checkbox" type="checkbox" id="others" name="department" onChange={onDepartmentChange} checked={getChecked("Others")}    value="Others"/>
                    <label class="text" for="others">Others</label>
                </div>
                </div>
                <div class="row-content">
                    <label class="label text" for="salary">Salary</label>
                    <div>
                        <select name="salary" class="Salary-option" value={formValue.salary} onChange={onChangeFormValue}>
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
                        <select name="day" id="day" value={formValue.day}  onChange={onChangeFormValue} >
                        <option value="" disabled selected hidden>Day</option>
                            <option value="01">01</option>
                            <option value="02">02</option>
                            <option value="03">03</option>
                            <option value="04">04</option>
                            <option value="05">05</option>
                            <option value="06">06</option>
                            <option value="07">07</option>
                            <option value="08">08</option>
                            <option value="09">09</option>
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
                        <select name="month" id="month" value={formValue.month}  onChange={onChangeFormValue}>
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
                        <select name="year" id="year" value={formValue.year}  onChange={onChangeFormValue}>
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
                <textarea id="notes" class="input" name="notes"  className="notes" value={formValue.notes}  onChange={onChangeFormValue} placeholder="" ></textarea>{/* style="height:100px" */}
                </div>
                <div class="buttonParent">
                 {/* <a href="/pages/home.html" class="cancelButton button">Cancel</a> */}
                 <div class="submit-reset"><nav>
                     <Link to='/'> <button type="submit" class="button submitButton" id="submitButton" onClick={onSubmit}>{formValue.isUpdate ? "Update" : "Submit"}</button> </Link>
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















