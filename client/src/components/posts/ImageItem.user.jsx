import { Buffer } from 'buffer';
import {FcLike, FcDislike} from 'react-icons/fc';
import { editPost } from '../../services/user/posts.handler';

const ImageItemUser = ({src, name, price,likes,dislikes,id})=>{

    const handleLike = ()=>{
        const newLikes = likes+1;
        editPost(id,newLikes,dislikes)
    }

    const handleDisLike =()=>{
        console.log('clicked');
        const newDislikes = dislikes+1;
        editPost(id,likes,newDislikes)
    }


    return <>
        <div className="bg-slate-400 m-2 px-3 py-2 rounded-md">
            <div>
                <img src={`${Buffer.from(src,'base64')}`} alt="imagePost" />
            </div>
            <div className="flex justify-around">
                <div className='flex gap-2 justify-center place-items-center' onClick={handleLike}>
                    <FcLike />{likes}
                </div>
                <div className='flex gap-2 justify-center place-items-center' onClick={handleDisLike}>
                    <FcDislike />{dislikes}
                </div>
            </div>
            
            <div>
                <p>Name: {name}</p>
                <p>Price: {price}</p>
            </div>
            
        </div>
    </>
}

// 


export default ImageItemUser;