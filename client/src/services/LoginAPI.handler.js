import axios from 'axios';


export const userLogin = (name,password)=>{
    const data = {
        name:name,
        password:password
    }
    return axios.post(`${process.env.REACT_APP_BASE_URL}/user/login`,{"userData":data})
    .then((res)=>{
        //receive token
        return res;
    })
    .catch((e)=>{
        return e
    })
}

export const vendorLogin = (name,password)=>{
    const data = {
        name:name,
        password:password
    }
   return axios.post(`${process.env.REACT_APP_BASE_URL}/vendor/login`,{"userData":data})
    .then((res)=>{
        //receive token
        return res;
    })
    .catch((e)=>{
        return e
    })
}

export const adminLogin = (name,password)=>{
    const data = {
        name:name,
        password:password
    }
    return axios.post(`${process.env.REACT_APP_BASE_URL}/admin/login`,{"userData":data})
    .then((res)=>{
        return res
    })
    .catch((e)=>{
        return e
    })
} 

