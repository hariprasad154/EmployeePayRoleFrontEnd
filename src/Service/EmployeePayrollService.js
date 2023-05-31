import axios from 'axios';

class EmployeePayrollServices{
    baseUrl = "http://localhost:8080";

    addEmployee(data) {
        return axios.post( `http://localhost:8080/add`,data);
    }
    getAllData(data) {
        return axios.get( `http://localhost:8080/`,data);
    }
}

export default new EmployeePayrollServices();