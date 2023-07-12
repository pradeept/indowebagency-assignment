import { useState } from "react";

const Menubar = ({menuItems,setSelected})=>{

    const [select,setSelect] = useState(0);


    const active = "font-extrabold underline text-blue-600";

    const handleClick = (index,item)=>{
        setSelect(index);
        setSelected(item);
    } 

    return<>
    <div className="m-2 flex flex-row flex-wrap justify-around py-2 bg-slate-300">   
    {
            menuItems.map((item,index)=>{
                return <div className="" key={index}>
                    <button 
                        onClick={()=>handleClick(index,item)} 
                        className={`hover:text-blue-800 ${(select===index?active:"")}` } 
                        key={index}
                        >
                            {item}
                        </button>
                </div>
            })
        }
    </div>
        
    </>
}

export default Menubar;