import axios from 'axios';

export const getCategories =  async ()=>{
    return axios.get(`${process.env.REACT_APP_BASE_URL}/vendor/category`)
    .then((res)=>{
        return res;
    })
    .catch((e)=>{
        return [];
    })
}

export const requestCategory = (name)=>{
    return axios.post(`${process.env.REACT_APP_BASE_URL}/vendor/category`,{"userData":name})
    .then((res)=>{
        return res.data.categories;
    })
    .catch((e)=>{
        return "Something went wrong!"
    })
}
