import { useEffect, useState } from "react";
import Menubar from "../../components/Menubar";
import Navbar from "../../components/Navbar";
import Category from '../../components/category/Category';
import Account from '../../components/accounts/Account';
import { getCategories } from "../../services/admin/categoryAPI.handler";
import { getAccounts } from "../../services/admin/accounts.handler";
import ImageCardAdmin from "../../components/posts/ImageCard.admin";

const AdminDashboard = ()=>{

    const [selected,setSelected] = useState('Posts');

    const [cats,setCats] = useState([]);

    const [userAccounts,setUserAccounts] = useState([]);

    const [vendorAccounts,setVendorAccounts] = useState([]);

    const menuItems = ["Posts","Category","Accounts"]


    useEffect(()=>{
        getCategories().then(
            (res)=>{
                console.log(res);
                setCats(res.data.categories)
            }
        ).catch((e)=>setCats([]))
    },[])

    useEffect(()=>{
        getAccounts().then((res)=>{
            console.log(res.data);
            setUserAccounts(res.data.users)
            setVendorAccounts(res.data.vendors);
            
        }).catch((e)=>{
            setUserAccounts([]);
            setVendorAccounts([]);
        })
    },[])


    const displayComp = ()=>{
        if(selected === "Posts"){
            return <ImageCardAdmin />
        }else if(selected === "Category"){
            return <Category categoryList={cats} type="admin"/>
        }else if(selected === "Accounts"){
            return <>
                <p className="font-semibold m-2">User Accounts</p>
                <Account accountList={userAccounts}/>
                <p className="font-semibold m-2">Vendor Accounts</p>
                <Account accountList={vendorAccounts}/>
            </> 
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

export default AdminDashboard;