import { useState } from "react";
import {vendorLogin} from '../../services/LoginAPI.handler';
import { useNavigate } from "react-router-dom";

const VendorLogin = ()=>{

    const navigate = useNavigate();

    const [inputData,setInputData] = useState({
        name:'',
        password:''
    })

    const handleSubmit = async (e)=>{
        e.preventDefault();
        const res = await vendorLogin(inputData.name, inputData.password);
        if(res.data){
            if(res.data.status === "ok"){
                console.log(res.data);
                const token = res.data.token;
                localStorage.setItem("token",token);
                localStorage.setItem("type","vendor");
                localStorage.setItem("user",res.data.user._id);
                navigate('/home')
            }else{
                alert('Something went wrong')
            }
        }else{
            alert(res);
        }
    }

    return <>
         <form onSubmit={handleSubmit} className="flex flex-col  mx-4 justify-center place-content-center gap-1 px-4">
                <label className="font-semibold">Username</label>
                <input type="text" 
                    placeholder="Enter Username" 
                    className="border-2 p-2"
                    value={inputData.name}
                    onChange={(e)=>setInputData((prev)=>{return {...prev,name:e.target.value}})}
                />

                <label className="font-semibold">Password</label>
                <input type="password" placeholder="Enter password" 
                    className="border-2 p-2" 
                    value={inputData.password} 
                    onChange={(e)=>setInputData((prev)=>{return {...prev,password: e.target.value}})}
                />
            <button type="submit" className="p-2 m-2 bg-blue-600 text-white hover:bg-blue-500">Login</button>
            <small className="text-slate-600 text-center">Don't have an account? <a href="/registerVendor" className="text-blue-800 underline">Register</a></small>
        </form>
    </>
}

export default VendorLogin;