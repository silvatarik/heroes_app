import { types } from "../types/types";

interface action_ {
    type: string,
    payload: {}
}
type MyState = {
    name: string,logged:boolean
}

export const authReducer = (state:MyState={name:'',logged:false}, action: action_) => {
    switch (action?.type) {
        case types.login:
            return {
                ...action.payload,logged:true
            }
        case types.logout:
            return {
                name:'',
                logged:false
            }
        default:
            return state;
    }
}