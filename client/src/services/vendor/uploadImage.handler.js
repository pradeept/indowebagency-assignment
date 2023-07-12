import axios from "axios";

export const uploadImage = (base64,owner,category,price)=>{
    const image = {
        src:base64,
        owner:owner,
        category:category,
        price:price
    }
    return axios.post(`${process.env.REACT_APP_BASE_URL}/vendor/upload/${category}/image`,{"userData":image})
    .then((res)=>{
        return res;
    }).catch((e)=>{
        return "Failed to upload"
    })
}