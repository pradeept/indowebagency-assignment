import { useEffect, useState } from "react";
import { getPosts } from "../../services/user/posts.handler";
import ImageItemUser from "./ImageItem.user";


const ImageCardPost = ()=>{

    const [posts,setPosts] = useState([]);



    useEffect(()=>{
        //implement fetching images of this vendor
        //implement base64 to image conversion
        
        const userType = localStorage.getItem("userType");
        getPosts(userType).then((res)=>{
            setPosts(res.data.posts)
        })

    },[]);

    

    

    return <>
        <div className="grid grid-cols-1 md:grid-cols-2">
           {
                posts.map((item,index)=>{
                    return <ImageItemUser key={index} src={item.image.data} name={item.name} likes={item.likes} dislikes={item.dislikes} price={item.price} id={item.id}/>
                })
           }
        </div>
    </>
}


export default ImageCardPost;