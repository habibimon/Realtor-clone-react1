import { useState } from "react"
import { FaEye,FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import OAtuh from "../components/OAuth";
export default function SignIn() {
    const [showPassword,setShowPassword] = useState(false);
    const [formData,setFormData] = useState({
        email:"",
        password:"",
    });
    const {email,password} = formData;
    function onChange(e){
        setFormData((prevState) =>({
            ...prevState,
            [e.target.id]: e.target.value,
        }));
    }
    return (
         <section>
              <h1  className="text-3xl text-center mt-6 font-bold">Sign In</h1>
              <div className="flex justify-center items-center px-6 py-12 max-w-6xl mx-auto ">
                  <div className=" md:w-[70%] lg:w-[50%] mb-12 md:mb-6">
                      <img src="https://plus.unsplash.com/premium_photo-1678208875073-046e2f7a29e0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGtleXxlbnwwfHwwfHx8MA%3D%3D" alt="key" srcset="" className="w-full rounded-2xl" />
                  </div>
                  <div className="w-full md:w-[70%] lg:w[50%] lg:ml-20 sm:ml-10">
                      <form>
                          <input className="w-full px-4 py-2 bg-white text-xl text-gray-700 rounded border-gray-300 transition ease-in-out mb-6" type="email" id="email"
                           value={email} onChange={onChange}
                           placeholder="Email address" />

                          <div className="relative">
                          <input className="w-full px-4 py-2 bg-white text-xl text-gray-700 rounded border-gray-300 transition ease-in-out mb-6" type={showPassword ? "text" : "password"} id="password"
                          value={password} onChange={onChange}
                          placeholder="Password" />
                          {showPassword ?<FaEye className="absolute right-3 top-3 text-xl cursor-pointer" onClick={()=>setShowPassword((prevState)=> !prevState)}/>: <FaEyeSlash className="absolute right-3 top-3 text-xl cursor-pointer" onClick={()=>setShowPassword((prevState)=> !prevState)}/> }
                          </div>
                          <div className="flex justify-between whitespace-nowrap text-sm sm:text-lg">
                          <p className="mb-6">Don't have an account? <Link to="/signUp" className="text-red-600 hover:text-red-700 transition duration-200 ease-in-out ml-1">Register</Link></p>
                          <p><Link to="/forgotPassword" className="text-blue-600 hover:text-blue-800 transition duration-200 ease-in-out ">Forgot password</Link></p>
                      </div>

                      <button className="btn btn-outline w-full">Sign in</button>
                      <div className=" my-4 items-centerflex before:border-t before:flex-1 before:border-gray-300 after:border-t after:flex-1 after:border-gray-300">
                          <p className="text-center font-semibold mx-4">OR</p>
                      </div>
                      <OAtuh />
                      </form>
                  
                  </div>
              </div>
         </section>
    )
}



