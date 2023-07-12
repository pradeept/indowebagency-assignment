import {Routes, Route} from 'react-router-dom';
import Login from './pages/Login' ;
import RegisterUser from './pages/register/RegisterUser';
import RegisterVendor from './pages/register/RegisterVendor';
import AdminDashboard from './pages/dashboard/AdminDashboard';
import VendorDashboard from './pages/dashboard/VendorDashboard';
import Dashboard from './pages/Dashboard';


const App = ()=>{

    return<>
        <Routes>
            <Route element={<Login/>} path='/'/>
            <Route element={<RegisterUser/>} path='/registerUser'/>
            <Route element={<RegisterVendor />} path='/RegisterVendor'/>
            <Route element={<Dashboard />} path='/home'/>
            <Route element={<AdminDashboard />} path='/adminDashboard'/> {/* Protect afterwards*/}
            <Route element={<VendorDashboard />} path='/vendorDashboard'/> {/* Protect afterwards*/}
        </Routes>
    </>
}

export default App;