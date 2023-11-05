import httpreq from './http-comman.jsx'
const getUserlogin=(username,password)=>{
    console.log("called inside user services");
return httpreq.get(`users?username=${username}&password=${password}`)
}
const Userregis=(registerationwithRollid)=>{
    console.log("called inside user services");
return httpreq.post("users",registerationwithRollid)
}
const getAll=()=>{
return httpreq.get("users")
}
const Users=(id)=>{
    console.log("users",Users);
return httpreq.get(`users/${id}`)
}
const deleteUserbyid=(id)=>{
    console.log("deleteUser",deleteUserbyid);
return httpreq.delete(`users/${id}`)
}
const patchUsersbyid=(id)=>{
    console.log("patch from action",patchUsersbyid);
return httpreq.patch(`users/${id}`)
}
const PutUsersbyid=(id,inp)=>{
    console.log("put from action",PutUsersbyid);
return httpreq.put(`users/${id}`,inp)
}
const UserService ={
    getAll,
    getUserlogin,
    Userregis,
    deleteUserbyid,
    patchUsersbyid,
    PutUsersbyid,
    Users,
}
export default  UserService 