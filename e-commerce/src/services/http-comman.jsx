import axios from "axios";
export default axios.create({
    baseURL:"http://localhost:2214",
    headers:{
        "Content-Type":"application/json"
    }
}) 