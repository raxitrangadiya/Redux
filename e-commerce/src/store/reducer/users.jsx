import { RETRIVE_ALL_LOGIN, RETRIVE_ALL_USERS ,RETRIVE_ALL_REGISTER} from '../action/type.jsx'
const initialState = {};
const usersReducer = (users = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case RETRIVE_ALL_USERS:
            console.log("RETRIVE_ALL_USERS");
            return { ...payload }
        case RETRIVE_ALL_LOGIN:
            console.log("RETRIVE_ALL_LOGIN");
            return { ...payload }
        case RETRIVE_ALL_REGISTER:
            console.log("RETRIVE_ALL_REGISTER");
            return { ...payload }
        default:
            return users
    }
}
export const selectUsers = (state) => state.users
export default usersReducer