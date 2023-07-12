import { useEffect, useState } from "react";
import ImageItem from './ImageItem'
import { getPosts } from "../../services/vendor/posts.handler";

const ImageCardPost = ()=>{

    const [posts,setPosts] = useState([]);



    useEffect(()=>{
        //implement fetching images of this vendor
        //implement base64 to image conversion
  
        const id = localStorage.getItem("user")
        getPosts(id).then((res)=>{
            setPosts(res.data.posts)
            console.log(res);
        })
 
    },[]);

    

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


export default ImageCardPost;