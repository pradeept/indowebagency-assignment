import { Buffer } from 'buffer';
import {FcLike, FcDislike} from 'react-icons/fc';

const ImageItem = ({src, name, price,likes,dislikes})=>{

console.log(src);
console.log(`${Buffer.from(src,'base64')}`);

    return <>
        <div className="bg-slate-400 m-2 px-3 py-2 rounded-md">
            <div>
                <img src={`${Buffer.from(src,'base64')}`} alt="imagePost" />
            </div>
            <div className="flex justify-around">
                <div className='flex gap-2 justify-center place-items-center'>
                    <FcLike />{likes}
                </div>
                <div className='flex gap-2 justify-center place-items-center'>
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


export default ImageItem;