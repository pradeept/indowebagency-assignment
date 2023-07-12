import { useState } from "react";
import AdminLogin from "../components/login/AdminLogin";
import UserLogin from "../components/login/UserLogin";
import VendorLogin from "../components/login/VendorLogin";

const Login = ()=>{

    const [type,setType] = useState('user');

    const toDisplay = ()=>{
        if(type === "user"){
            return <UserLogin/>
        }else if(type === "vendor"){
            return <VendorLogin />
        }else{
            return <AdminLogin />
        }
    }

    return <>
        <div className="h-screen w-screen bg-slate-500 flex flex-wrap justify-center place-content-center ">
            <div className="bg-white md:w-1/3 w-screen flex flex-col mx-6 p-2 rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
                <div className="grid grid-cols-3 border-2 m-2">
                    <button onClick={()=>setType("user")} className={type==="user"?"bg-slate-400 p-2":"bg-slate-100"}>User</button>
                    <button onClick={()=>setType("vendor")} className={type==="vendor"?"bg-slate-400 p-2":"bg-slate-100"}>Vendor</button>
                    <button onClick={()=>setType("admin")} className={type==="admin"?"bg-slate-400 p-2":"bg-slate-100"}>Admin</button>
                </div>
                <div className="border-2 mx-2 py-2">
                    {
                        toDisplay()
                    }
                </div>
            </div>
        </div>
    </>
}

export default Login;