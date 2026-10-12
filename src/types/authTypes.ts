import type { IUser } from "./userInterface";

export interface IRegisterType{
    firstName:string;
    lastName:string;
    email:string;
    password:string
}

export type LoginUserDetails={
    token:string;
    user:{
        roleName:string
    }&IUser
}

export type AuthContextType = {
    user:IUser|null;
    logout: () => void
    afterUserLogin:(newUser:IUser, newToken:string)=>void;
};