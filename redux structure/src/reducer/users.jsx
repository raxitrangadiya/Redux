import { RETRIVE_ALL_USERS} from "../actions/type.jsx"

const initialState = {}
// console.log("called main reducer out");

const usersReducer = (users = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case RETRIVE_ALL_USERS:
            console.log("called reducer RETRIVE_ALL_USERS");
            return {...payload}
        default:
            return users
    }
}
export const selectUser = (state)=>state.users
export default usersReducer
