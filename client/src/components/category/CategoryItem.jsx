import { acceptCategory, deleteCategory } from "../../services/admin/categoryAPI.handler";

const CategoryItem = ({name,approved,type})=>{

    const handleReject = ()=>{
        deleteCategory(name)
    }

    const handleApprove = ()=>{
        acceptCategory(name)
    }

    return <>
        <div className="p-4 flex flex-col gap-2 bg-slate-500 m-2 rounded-lg text-white ">
            <h3 className="">Category Name: <span className="font-bold">{name}</span></h3>
            <p>Approved: <span className="font-bold ">{(approved.toString())}</span></p>
            {type === "admin" ? <button className="border-2 bg-green-400 text-slate-800" onClick={handleApprove}>Approve</button>:null}
            {type === "admin"? <button className="border-2 bg-red-400 " onClick={handleReject}>Reject</button>:null}
        </div>
    </>
}

export default CategoryItem;