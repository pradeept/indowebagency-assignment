import axios from "axios"

export const getAccounts = ()=>{

    return axios.get(`${process.env.REACT_APP_BASE_URL}/admin/accounts`)
    .then((res)=>{
        return res;
    })
    .catch((e)=>{
        return "something went wrong!"
    })
}


//creating accounts is not implemented in front-end but it has API hand

export const editAccount = (userData)=>{
    const {name,email,password,subscription,id} = userData;
    const type = subscription===undefined?"internal":"external";
    let data 
    if(type === "internal"){
        data ={
            id:id,
            name:name,
            email:email,
            password:password,
            type:"internal"   
        }
    }else{
        data ={
            id:id,
            name:name,
            email:email,
            password:password,
            type:"external",
            subscription:subscription   
        }
    }
    return axios.put(`${process.env.REACT_APP_BASE_URL}/admin/accounts`,{"userData":data})
    .then((res)=>{
        return res;
    })
    .catch((e)=>{
        return "Something went wrong!"
    })
}

export const deleteAccount = (id,subscription)=>{
    const type = subscription===undefined?"internal":"external";

    axios.delete(`${process.env.REACT_APP_BASE_URL}/admin/accounts/${id}/${type}`)
    .then((res)=>{
        return res;
    })
    .catch((e)=>{
        return "Something went wrong!"
    })
} 