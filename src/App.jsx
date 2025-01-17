import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
const App = ()=>{

  const submitHandler = (jaankaari)=>{
    jaankaari.preventDefault()
    console.log('form submitted')

    if(password.length < 8){
      setError('Password must be 8 characters long')
      return;
    }
    if(password != confirmPassword){
      setError('Password and Confirm Password must be same')
      return;
    }
    if(!/[!@#$%&*]/.test(password)){
      setError('Password must contain any special character  !@#$%&* ')
      return;
    }
    if(!/[A-Z]/.test(password)){
      setError('Password must contain a Capital Alphabet')
      return;
    }
    setError('')
    setFullname('')
    setEmail('')
    setPassword('')
    setConfirmPassword('')

    toast.success('Account Created Successfully', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });
  }

  const [fullname, setFullname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')

  return (
    
    <div className='h-screen flex items-center justify-center'>
      <div className='bg-white rounded-lg p-6 w-96'>
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
          <h2 className="text-2xl font-bold mb-4 text-gray-800 text-center">Create an Account</h2>
          <form onSubmit={(jaankaari)=>{
            submitHandler(jaankaari)
          }} className="flex flex-col gap-4">
            <input className="w-full border border-gray-300 px-4 py-2 text-sm rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              type="text"           
              placeholder="Enter Your Name"
              required
              value={fullname}
              onChange={(jaankaari)=>{
                setFullname(jaankaari.target.value)
               }}           
             />
            <input className="w-full border border-gray-300 px-4 py-2 text-sm rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              type="email"
              placeholder="Enter Your Email"
              required
              value={email}
              onChange={(jaankaari)=>{
                setEmail(jaankaari.target.value)
              }}
            />
            <input className="w-full border border-gray-300 px-4 py-2 text-sm rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              type="password"              
              placeholder="Enter Password"
              required
              value={password}
              onChange={(jaankaari)=>{
                setPassword(jaankaari.target.value)
              }}
            />
            <input className="w-full border border-gray-300 px-4 py-2 text-sm rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              type="password"
              placeholder="Confirm Password"
              required
              value={confirmPassword}
              onChange={(jaankaari)=>{
                setConfirmPassword(jaankaari.target.value)
              }}
            />
            {error && (
                <p className='text-red-500 font-medium text-sm text-center'>{error}</p>
            )}

            <button
              className="text-sm px-4 py-2 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full mt-3"
            >
              Submit
            </button>
          </form>

          <p className="text-xs text-gray-600 mt-4 text-center">
            By registering, you agree to our <span className="text-indigo-600">Terms & Conditions</span> and <span className="text-indigo-600">Privacy Policy</span>.
          </p>
        </div>
        <ToastContainer/>
      </div>
    </div>
    )
}

export default App