import { useState } from "react"
export default function SignIn() {
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
              <h1  className="text-3xl text-center mt-6 font-bold">SignIn</h1>
              <div className="flex justify-center items-center px-6 py-12 max-w-6xl mx-auto ">
                  <div className=" md:w-[70%] lg:w-[50%] mb-12 md:mb-6 ">
                      <img src="https://plus.unsplash.com/premium_photo-1678208875073-046e2f7a29e0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGtleXxlbnwwfHwwfHx8MA%3D%3D" alt="key" srcset="" className="w-full rounded-2xl" />
                  </div>
                  <div className="w-full md:w-[70%] lg:w[50%] lg:ml-20 sm:ml-10">
                      <form>
                          <input className="w-full px-4 py-2 bg-white text-xl text-gray-700 rounded border-gray-300 transition ease-in-out mb-6" type="email" id="email"
                           value={email} onChange={onChange}
                           placeholder="Email address" />

<input className="w-full px-4 py-2 bg-white text-xl text-gray-700 rounded border-gray-300 transition ease-in-out" type="password" id="password"
                           value={password} onChange={onChange}
                           placeholder="Password" />
                      </form>
                  </div>
              </div>
         </section>
    )
}



