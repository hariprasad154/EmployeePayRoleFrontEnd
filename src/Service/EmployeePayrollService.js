import axios from 'axios';

class EmployeePayrollServices{
    baseUrl = "http://localhost:8080";
    addEmployee(data) {
        return axios.post( `http://localhost:8080/add`,data);
    }
    getAllData(data) {
        return axios.get( `http://localhost:8080/`,data);
    }
    deleteEmployee(id){
        return axios.delete(`http://localhost:8080/delete${id}`);
    }
    updateEmployee(id, data){
        return axios.put(`http://localhost:8080/put/${id}`,data);
    }
    getEmployeeById(id){
        return axios.get(`http://localhost:8080/${id}`);
    }
}

export default new EmployeePayrollServices();