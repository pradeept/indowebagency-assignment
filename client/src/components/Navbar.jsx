import { useNavigate } from "react-router-dom";


const Navbar = ()=>{

    const navigate = useNavigate();


    const handleclick = ()=>{
        localStorage.removeItem("token");
        localStorage.removeItem("type");
        navigate('/')
    }

    return<>
        <nav className="h-10 bg-slate-800 text-white flex justify-end w-screen">
            <p className="p-2 me-4">{`Welcome !`}</p>
            <button className="bg-blue-500 hover:bg-blue-700 px-3 me-6 my-1 rounded-md" onClick={handleclick}>Logout</button>
        </nav>
    </>
}

export default Navbar;