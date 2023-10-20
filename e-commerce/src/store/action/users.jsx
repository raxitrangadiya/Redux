import UserService from '../../services/Userservice.jsx'
export const retriveUsers = () => async (dispatch) => {
    const ResData=await UserService.getAll()
    return dispatch ({type : "RETRIVE_ALL_USERS",payload: ResData })
} 
export const loginUsers = (uname,pass)=>async (dispatch)=>{
    const ResData = await UserService.getUserlogin(uname,pass);
    console.log("action :", ResData);
    return dispatch({type : "RETRIVE_LOGIN_ USERS" , payload : ResData})
}
export const RegisterUsers = (registerationwithRollid)=>async (dispatch)=>{
    const ResData = await UserService.Userregis(registerationwithRollid);
    console.log("action :", ResData);
    return dispatch({type : "RETRIVE_ALL_REGISTER" , payload : ResData})
}
