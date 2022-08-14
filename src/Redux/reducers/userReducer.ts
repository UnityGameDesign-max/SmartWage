import {UserModel} from "../../Utility/UserModel";

const initialState = {
    user: "Mike Metelerkamp",
    company: "McDonalds"
}
type Action = {type: "VIEW_USER", payload: string}
export const userReducer = (state: UserModel = initialState, action: Action) => {
    switch(action.type){
        case "VIEW_USER":
            return {...state}
        default:
            return state;
    }
}