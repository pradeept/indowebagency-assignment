import axios from "axios"

export const getPosts = (userType)=>{

    return axios.get(`${process.env.REACT_APP_BASE_URL}/user/posts/${userType}`)
    .then((res)=>{
        console.log(res.data);
        return res;
    })
    .catch((e)=>{
        return "something went wrong"
    })
}

export const editPost =(id,likes,dislikes)=>{
    const data ={
        id,
        likes,
        dislikes
    }
    return axios.post(`${process.env.REACT_APP_BASE_URL}/user/posts`,{"userData":data})
    .then((res)=>{
        console.log(res.data);
        return res;
    })
    .catch((e)=>{
        return "something went wrong"
    })
}
