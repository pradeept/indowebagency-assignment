import axios from 'axios';

export const getCategories =  async ()=>{
    
    return axios.get(`${process.env.REACT_APP_BASE_URL}/admin/category`)
    .then((res)=>{
        return res;
    })
    .catch((e)=>{
        return "something went wrong"
    })
}



export const acceptCategory = (name)=>{
    const data = {
        name:name
    }
    return axios.put(`${process.env.REACT_APP_BASE_URL}/admin/category`,{"userData":data})
    .then((res)=>{
        return res
    })    
    .catch((e)=>{
        return "Something went wrong!"
    })
}

export const deleteCategory = (name)=>{
    
    return axios.delete(`${process.env.REACT_APP_BASE_URL}/admin/category/${name}`)
    .then((res)=>{
        return res
    })
    .catch((e)=>{
        return "Something went wrong!"
    })
}