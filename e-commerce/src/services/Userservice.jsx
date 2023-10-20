import httpreq from './http-comman.jsx'
const getAll=()=>{
    // console.log("called inside user services");
return httpreq.get("users")
}
const getUserlogin=(username,password)=>{
    console.log("called inside user services");
return httpreq.get(`users?username=${username}&password=${password}`)
}
const Userregis=(registerationwithRollid)=>{
    console.log("called inside user services");
return httpreq.post("users",registerationwithRollid)
}
const UserService ={
    getAll,
    getUserlogin,
    Userregis
}
export default  UserService 