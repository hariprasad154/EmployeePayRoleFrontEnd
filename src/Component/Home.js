import React from 'react';
import '../css/Home.css';
import profile1 from '../assets/profile-images/Ellipse -1.png';
import profile2 from '../assets/profile-images/Ellipse -2.png';
import profile3 from '../assets/profile-images/Ellipse -3.png';
import profile4 from '../assets/profile-images/Ellipse -4.png';
import logo from '../logo.svg';
// import { Link } from "react-router-dom";
import Logo from '../assets/images/logo.png'
import { Link } from 'react-router-dom';
function Home() {
  return (
    <div>
        <body>
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

        <div class="form-content">
        <form class="form" action="../pages/home.html" onreset="resetForm()">
            <div class="form-head">Employee Payroll form</div>
            <div class="row-content">
                <label class="label text" for="name">Name</label>
                <input class="input" type="text" id="name" name="name" placeholder="Enter Your Name" required/>
                <error-output class = "name-error" for="name"></error-output>
            </div>
            <div class="row-content">
                <label class="label text" for="profile">Profile Image</label>
                <div class="profile-radio-content">
                    <label>
                        <input type="radio" id = "profile1" name="profile" value={profile1} required/>
                        <img class="profile" id = "image1" src={profile1} alt=" logo "/>
                    </label>
                    <label>
                        <input type="radio" id = "profile2" name="profile" value={profile2} required/>
                        <img class="profile" id = "image2" src={profile2} alt=" logo " />
                    </label>
                    <label>
                        <input type="radio" id = "profile3" name="profile" value={profile3} required/>
                        <img class="profile" id = "image3" src={profile3} alt=" logo "/>
                    </label>
                    <label>
                        <input type="radio" id = "profile4" name="profile" value={profile4} required/>
                        <img class="profile" id = "image4" src={profile4} alt=" logo "/>
                    </label>
                </div>
            </div>
            <div class="row-content">
                <label class="label text" for="gender">Gender</label>
                <div>
                    <input type="radio" id="male" name="gender" value="male"/>
                    <label class="text" for="male">Male</label>
                    <input type="radio" id="female" name="gender" value="female"/>
                    <label class="text" for="male">Female</label>
                </div>
            </div>
            <div class="row-content">
                <label class="label text" for="department">Department</label>
                <div>
                    <input class="checkbox" type="checkbox" id="hr" name="department" value="HR"/>
                    <label class="text" for="hr">HR</label>
                    <input class="checkbox" type="checkbox" id="sales" name="department" value="Sales"/>
                    <label class="text" for="sales">Sales</label>
                    <input class="checkbox" type="checkbox" id="finance" name="department" value="Finance"/>
                    <label class="text" for="finance">Finance</label>
                    <input class="checkbox" type="checkbox" id="engineer" name="department" value="Engineer"/>
                    <label class="text" for="engineer">Engineer</label>
                    <input class="checkbox" type="checkbox" id="others" name="department" value="Others"/>
                    <label class="text" for="others">Others</label>
                </div>
            </div>
            <div class="row-content">
                <label class='label text' for='salary' >Salary</label>
                <div class='salary'>
                    <select name='salary' id='salary'>
                    <option value="" disabled selected hidden>select Salary</option>
                    {/* <option value="0">Enter Your Salary</option> */}
                    <option value="10000">10000</option>
                        <option value="20000">20000</option>
                        <option value="30000">30000</option>
                        <option value="40000">40000</option>
                        <option value="50000">50000</option>
                        <option value="60000">60000</option>
                        <option value="70000">70000</option>
                        <option value="80000">80000</option>
                        <option value="90000">90000</option>
                        <option value="100000">100000</option>
                        <option value="110000">110000</option>
                        <option value="120000">120000</option>
                        <option value="130000">130000</option>
                        <option value="140000">140000</option>
                        <option value="150000">150000</option>
                        <option value="160000">160000</option>
                        <option value="170000">170000</option>
                        <option value="180000">180000</option>
                        <option value="190000">190000</option>
                        <option value="200000">200000</option>
                        <option value="210000">210000</option>
                        <option value="220000">220000</option>
                        <option value="230000">230000</option>
                        <option value="240000">240000</option>
                        <option value="250000">250000</option>
                        <option value="260000">260000</option>
                        <option value="270000">270000</option>
                        <option value="280000">280000</option>
                        <option value="290000">290000</option>
                        <option value="300000">300000</option>
                        <option value="310000">310000</option>
                    </select>
                </div>
                {/* <label class="label text" for="salary">Salary</label>
                <input class="input" type="range" name="salary" id="salary" min="10000" max="500000" step="5000" value="400000"/>
                <output class="salary-output text" for="salary">400000</output> */}
            </div>
            <div class="row-content">
                <label class="label text" for="startDate">Start Date</label>
                <div class="startDate">
                    <select name="Day" id="day">
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
                    <select id = "month" name="Month">
                    <option value="" disabled selected hidden>Month</option>
                        <option value="January">January</option>
                        <option value="February">February</option>
                        <option value="March">March</option>
                        <option value="April">April</option>
                        <option value="May">May</option>
                        <option value="June">June</option>
                        <option value="July">July</option>
                        <option value="August">August</option>
                        <option value="September">September</option>
                        <option value="October">October</option>
                        <option value="November">November</option>
                        <option value="December">December</option>
                    </select>
                    <select id="year" name="Year">
                    <option value="" disabled selected hidden>Year</option>
                        <option value="2023">2023</option>
                        <option value="2020">2020</option>
                        <option value="2019">2019</option>
                        <option value="2018">2018</option>
                        <option value="2017">2017</option>
                        <option value="2016">2016</option>
                    </select>
                </div>
                <error-output class = "date-error" for="startDate"></error-output>
            </div>
            <div class="row-content">
                <label class="label text" for="notes">Notes</label>
                <textarea id="notes" class="input" name="Notes" ></textarea>{/* style="height:100px" */}
    
            </div>
            <div class="buttonParent">
                <a href="/pages/home.html" class="cancelButton button">Cancel</a>
                <div class="submit-reset">
                    <button type="submit" class="button submitButton" id="submitButton">Submit</button>
                    <button type="reset" class="resetButton button">Reset</button>
                </div>
            </div>
        </form>
    </div>
    </body>
    </div>
  )
}

export default Home;