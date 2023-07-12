import { useState } from "react";
import { requestCategory } from "../../services/vendor/categoryAPI.handler";

const CategoryEdit = ()=>{

    const [name,setName] = useState('')

    const handleSubmit = (e)=>{
        e.preventDefault();
        const res = requestCategory(name).then((res)=>{
            alert("requested!")
        })
        .catch((e)=>{
            alert('something went wrong')
        })
    }

    return<>
        <form onSubmit={handleSubmit}>  
            <div className="p-4 flex flex-col gap-2 bg-slate-500 m-2 rounded-lg  ">
                <h3 className="">Category Name: </h3>
                <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} className="p-2"/>
                <button className="border-2 bg-green-400 text-slate-800" >Request</button>
            </div>
        </form> 
        
    </>
}

export default CategoryEdit;