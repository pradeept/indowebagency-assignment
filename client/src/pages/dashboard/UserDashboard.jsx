import Navbar from "../../components/Navbar";
import ImageCardPost from "../../components/posts/ImageCard.user";



const UserDashboard = ()=>{



    return <>
        <div className="w-screen h-screen overflow-y-scroll overflow-x-hidden bg-slate-100">
           <div className="flex flex-col">
                <div>
                    <Navbar />
                </div>
                
           </div>
           <div>
                <ImageCardPost />
           </div>
        </div>
    </>
}

export default UserDashboard;