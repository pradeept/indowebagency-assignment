import axios from "axios"

export const getPosts = ()=>{

    return axios.get(`${process.env.REACT_APP_BASE_URL}/admin/posts`)
    .then((res)=>{
        return res;
    })
    .catch((e)=>{
        return "something went wrong"
    })
}

