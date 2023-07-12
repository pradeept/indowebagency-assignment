import axios from "axios"

export const getPosts = (id)=>{

    return axios.get(`${process.env.REACT_APP_BASE_URL}/vendor/posts/${id}`)
    .then((res)=>{
        return res;
    })
    .catch((e)=>{
        return "something went wrong"
    })
}

