import { useEffect, useState } from "react";
import Menubar from "../../components/Menubar"
import Navbar from "../../components/Navbar"
import Category from "../../components/category/Category";
import CategoryEdit from "../../components/category/CategoryEdit";
import Upload from "../../components/upload/Upload";
import ImageCardPost from "../../components/posts/ImageCard.post";
import { getCategories } from "../../services/vendor/categoryAPI.handler";

const VendorDashboard = ()=>{

    const [selected, setSelected] = useState("Your Posts");

    const [cats,setCats] = useState([]);

    const menuItems = ["Your Posts","Request Category","Upload"]
    
    
    useEffect(()=>{
        getCategories().then(
            (res)=>{
                console.log(res);
                setCats(res.data.categories)
            }
        ).catch((e)=>setCats([]))
    },[])

    // Sample list
    
    const displayComp = ()=>{
        if(selected === "Your Posts"){
            return <ImageCardPost />
        }else if(selected === "Request Category"){
            return <>
                <div>
                    <CategoryEdit />
                    <hr></hr>
                    <p className="font-bold p-2 text-blue-950">Available Categories:</p>
                    <Category categoryList={cats} type={"vendor"}/>
                </div>
            </>        
        }else if(selected === "Upload"){
            console.log(cats);
            return <Upload cats={cats}/>
        }else{
            return ;
        }
    }


    return <>
        <div className="w-screen h-screen overflow-y-scroll overflow-x-hidden bg-slate-100">
           <div className="flex flex-col">
                <div>
                    <Navbar userName={"Admin"}/>
                </div>
                <div>
                    <Menubar menuItems={menuItems} setSelected={setSelected}/>
                </div>
                <div>
                    {displayComp()}
                </div>
           </div>
        </div>
    </>
}

export default VendorDashboard;