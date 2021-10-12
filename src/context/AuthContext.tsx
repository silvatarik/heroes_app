import { createContext } from "react";

interface MyState {
    name: '',logged:boolean
}
interface MyAction {
    type: string;
    payload: any;
}
interface MyContext {
    state: MyState;
    dispatch: React.Dispatch<MyAction>
}

export const AuthContext = createContext<MyContext | null>(null);