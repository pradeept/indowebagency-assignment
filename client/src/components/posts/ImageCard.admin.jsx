import { useEffect, useState } from "react";
import ImageItem from './ImageItem'
import { getPosts } from "../../services/admin/posts.handler";

const ImageCardAdmin = ()=>{

    const [posts,setPosts] = useState([]);


    useEffect(()=>{
        getPosts()
        .then((res)=>{
            console.log(res);
            setPosts(res.data.posts);
        })
        .catch((e)=>setPosts([]))
    },[])

    return <>
        <div className="grid grid-cols-1 md:grid-cols-2">
           {
                posts.map((item,index)=>{
                    return <ImageItem key={index} src={item.image.data} name={item.name} likes={item.likes} dislikes={item.dislikes} price={item.price}/>
                })
           }
        </div>
    </>
}


export default ImageCardAdmin;