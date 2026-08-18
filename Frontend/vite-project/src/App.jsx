import { signInWithPopup } from 'firebase/auth';
import react from 'react'
import { auth, googleProvider } from '../utils/firebase';
import api from '../utils/axios';

const App = () => {

const handleLogin=async (token)=>{
try {
  const {data}=await api.post('/auth/login',{token})
  console.log(data)
} catch (error) {
  console.log(error)
}
}


  const googleLogin=async ()=>{
   const data= await signInWithPopup(auth,googleProvider)
   await handleLogin(await data.user.getIdToken())
   console.log(data)
  }
  return (
    <div className='w-full h-screen flex items-center justify-center bg-black'>
      <button className="rounded-2xl w-[200px] h-[50px] bg-white text-black" onClick={googleLogin}>
        Start with google
      </button>
    </div>
  );
};

export default App;