import { useState } from "react";
import { deleteAccount, editAccount } from "../../services/admin/accounts.handler";

const AccountItem = ({name,email,password,external,subscription,id})=>{

    
    const [inputData, setInputData] = useState({
        name:'',
        email:'',
        password:'',
        subscription:undefined
    });

    console.log(inputData)
    const [edit,setEdit] = useState(false)
    
   

    const handleEdit = (e)=>{
        setEdit((prev)=>{return !prev});
        // if edit is false / button text is done 
        //call api
        if(edit){
            editAccount(inputData)
        }
    }

    const handleDelete = ()=>{
        //call api and update list
        deleteAccount(id,subscription)
    }

    const nameEl = <input type="text" className="font-semibold"  value={inputData.name} onChange={(e)=>setInputData((prev)=>{return {...prev,name:e.target.value}})} />
    const emailEl = <input className="font-semibold"  value={inputData.email} onChange={(e)=>setInputData((prev)=>{return {...prev,email:e.target.value}})}/>
    const passwordEl =  <input className="font-semibold"  value={inputData.password} onChange={(e)=>{setInputData((prev)=>{return {...prev,password:e.target.value}})}}/>
    const subscriptionEl =  <input className="font-semibold"  value={inputData.subscription} onChange={(e)=>{setInputData((prev)=>{return {...prev,subscription:e.target.value}})}}/>
            
    return <>
    <div className="p-4 flex flex-col gap-2 bg-slate-500 m-2 rounded-lg ">
            {edit?nameEl :<label className="text-white">Name: {name}</label> }
            {edit?emailEl:<label className="text-white">Email: {email}</label>}            
            {edit?passwordEl:<label className="text-white">Password: {password}</label>}
            {edit ?subscriptionEl:<label className="text-white font-bold">{subscription}</label>}
            <button className="border-2 bg-blue-500 text-white" onClick={handleEdit}>{edit?"Done":"Edit"}</button>
            <button className="border-2 bg-red-400 text-white" onClick={handleDelete}>Delete</button>
        </div> 
    </>
}

export default AccountItem;