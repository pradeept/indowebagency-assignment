import { useEffect, useState } from "react";
import DropDown from "./DropDown";
import convertImageToBase64 from "../../services/ImgToBase64";
import {uploadImage} from '../../services/vendor/uploadImage.handler';


const Upload = ({cats})=>{

    const [selected, setSelected] = useState('');
    const [selectedCat, setSelectedCat] = useState('')
    const [imageBase64, setImageBase64] = useState('');
    const [price,setPrice] = useState(0);
    console.log(selected.name)
    console.log(cats);

    const options =[
        {
            name:"Image",
        },
        {
            name:"Video",
        }
    ]

    const handleMedia = (e)=>{
        const file = e.target.files[0];
        if(file){
            convertImageToBase64(file)
            .then((base64)=>{
                setImageBase64(base64)
            })
            .catch((e)=>{
                console.log(e);
            })
        }
    }

    const handleUpload = async()=>{
        const owner = localStorage.getItem("user");
        console.log(selectedCat);
        const res = await uploadImage(imageBase64,owner,selectedCat.name,price)
        console.log(res);
        if(res.data){
            alert('upload success')
            setImageBase64('')
            setSelected('')
            setPrice(0)
            setSelectedCat('')
        }else{
            alert(res)
        }
    }

    return <>
        <div className="h-1/2 m-4 bg-slate-500 flex flex-col ">
            <div>   
                <div className="flex justify-center mt-4  p-6">
                    <DropDown options={options} onChange={setSelected} value={selected.name}/>
                    <DropDown options={cats} onChange={setSelectedCat} value={selectedCat}/>
                </div>
            </div>
            <div className="flex flex-col justify-center border-2 border-dotted p-6 gap-2 m-2 ">
                {selected.name ==="Image"? <input type="file" accept="image/*" className="font-semibold text-white" onChange={handleMedia}/>:null}
                {imageBase64 && <img src={imageBase64} alt="Uploaded" />}
                {imageBase64 && <input type="number" value={price} onChange={(e)=>setPrice(e.target.value)} placeholder="Enter price"/>}
                {imageBase64 && <button className=" py-2 font-semibold bg-blue-600 text-white hover:bg-blue-300" onClick={handleUpload}>Upload</button>}
            </div>
        </div>
    </>
}

export default Upload;