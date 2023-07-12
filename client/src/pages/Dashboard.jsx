import { useNavigate } from "react-router-dom";
import AdminDashboard from './dashboard/AdminDashboard';
import VendorDashboard from './dashboard/VendorDashboard';
import UserDashboard from './dashboard/UserDashboard';

const Dashboard = ()=>{
    
    const navigate = useNavigate();

    const type = localStorage.getItem("type");

    if(type == null){
        navigate('/')
    }

    const displayComp = ()=>{
        if(type === "admin"){
            return <AdminDashboard />
        }else if(type === "vendor"){
            return <VendorDashboard />
        }else if(type === "user"){
            return <UserDashboard />
        }else{
            navigate('/')
        }
    }

    return<>
        {displayComp()}
    </>
}

export default Dashboard;