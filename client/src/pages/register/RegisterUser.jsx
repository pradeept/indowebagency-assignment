import {useState} from 'react';
import { useNavigate } from 'react-router-dom';


const RegisterUser = ()=>{

    const navigate = useNavigate();

    const [userInput,setUserInput] = useState({
        name:'',
        email:'',
        password:'',
        subsciption:''
    });

    const [response,setResponse] = useState('');

    const handleError = (res)=>{
        setResponse(res);
        setUserInput( {
            name:'',
            email:'',
            password:''
        });
    }

    const handleSubmit = async (e)=>{
        e.preventDefault();
       console.log(userInput)
    }

    return <>
        <div className='flex justify-center bg-slate-500 w-screen h-screen items-center'>
            <form onSubmit={handleSubmit} className='bg-white w-4/5  flex flex-col gap-6 p-10 rounded-md lg:w-2/5'>
                <div className='flex flex-col gap-2'>
                    <label className='font-semibold'>Username</label>
                    <input 
                        type="text" 
                        value={userInput.name} 
                        onChange={(e)=>setUserInput({...userInput,"name":e.target.value})}
                        placeholder='Enter name'
                        className='border-b-2 p-2'
                        onFocus={()=>setResponse('')}
                    />
                </div>

                <div className='flex flex-col gap-2'>
                    <label className='font-semibold'>Email</label>
                    <input 
                        type="text" 
                        value={userInput.email} 
                        onChange={(e)=>setUserInput({...userInput,"email":e.target.value})}
                        placeholder='Enter email'
                        className='border-b-2 p-2'
                    />
                </div>

                <div className='flex flex-col gap-2'>
                    <label className='font-semibold'>Password</label>
                    <input 
                        type="password" 
                        value={userInput.password} 
                        onChange={(e)=>setUserInput({...userInput,"password":e.target.value})}
                        placeholder='Enter password'
                        className='border-b-2 p-2'
                    />
                </div>
                <div className='flex flex-col gap-2'>
                    <label className='font-semibold'>Subscription</label>
                    <div onChange={(e)=>{setUserInput({...userInput,subsciption:e.target.value})}} className='flex justify-center place-content-center gap-2'>
                        <input 
                            type="radio" 
                            name='free'
                            value="free" 
                            className='border-b-2 p-2'
                        />Free
                        <input 
                            type="radio" 
                            name='premium'
                            value="premium" 
                            className='border-b-2 p-2'
                        />Premium
                    </div>
                </div>
                <small className='text-red-500'>{response}</small>
                <button type="submit" className="p-2 m-2 bg-blue-600 text-white hover:bg-blue-500">Register</button>
            </form>
        </div>
    </>
}

export default RegisterUser;