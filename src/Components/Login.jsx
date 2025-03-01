
    import { useState } from "react"
    import {useRef} from 'react'
    import { checkValidData } from "../Utils/validata"; 

    import { createUserWithEmailAndPassword} from "firebase/auth";
    import { auth } from "../Utils/firebase";

            const Login = () => {

                const [isLogin, setIsLogin] = useState(false)

                const emailRef = useRef(null); // Create reference for email input
                const passwordRef = useRef(null); // Create reference for password input
                const [error, setError] = useState("");

                const handleAuthToggle = () => {
                    setIsLogin(!isLogin);
                };

                const handleButtonClick = (e) => {   
                    e.preventDefault();

                    // Validate the Form Data 
                    // If the form is valid, redirect to the Dashboard
                    // Else, show an error message  
                    const email = emailRef.current.value;
                    const password = passwordRef.current.value;

                     // Check validation
                    const validationError = checkValidData(email, password);
                    if (validationError) {
                    setError(validationError);
                    return ;}


                    if(!isLogin){
                                
                        // Sign Up  the user
                        // If the user is successfully signed up, redirect to the Dashboard
                        // Else, show an error message
                        createUserWithEmailAndPassword(auth, email, password)
                          .then((userCredential) => {
                            // Signed up 
                            const user = userCredential.user;
                            console.log(user)
                            // ...
                          })
                          .catch((error) => {
                            const errorCode = error.code;
                            const errorMessage = error.message;
                            setError(errorCode + " " + errorMessage)
                          });





                    }else{  
                        // Login the user
                        // If the user is successfully logged in, redirect to the Dashboard
                        // Else, show an error message

                    }

    }
                




            return (
                <div className="flex justify-center items-center min-h-screen bg-base-200">

                    <div className="card shadow-2xl w-96">
                    <div className="card-body">
                        {isLogin ? ( <form>
                    <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
                    
                    <div className="form-control">
                        <label className="label">
                        <span className="label-text">Email</span>
                        </label>
                        <input 
                        ref={emailRef} 
                        type="email" 
                        placeholder="email@example.com" 
                        className="input input-bordered" 
                        />
                    </div>
                    
                    <div className="form-control mt-4">
                        <label className="label">
                        <span className="label-text">Password</span>
                        </label>
                        <input 
                         ref={passwordRef}
                        type="password" 
                        placeholder="Password" 
                        className="input input-bordered" 
                        />
                        <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    
                    <div className="form-control mt-6">
                        <button className="btn btn-primary" onClick={handleButtonClick}>Login</button>
                    </div>
                    
                    <div className="text-center mt-4">
                        <p>Dont have an account? 
                        <a className="link link-primary ml-1 " onClick={handleAuthToggle}>
                            Sign up
                        </a>
                        </p>
                        {error && <p style={{ color: "red" }}>{error}</p>}
                    </div>
                    </form>)  : 
                    <form>
                    <h2 className="text-2xl font-bold text-center mb-4">Sign Up</h2>
                    
                    <div className="form-control">
                        <label className="label">
                        <span className="label-text">Name</span>
                        </label>
                        <input 
                        type="text" 
                        placeholder="John Doe" 
                        className="input input-bordered" 
                        />
                    </div>
                    
                    <div className="form-control mt-4">
                        <label className="label">
                        <span className="label-text">Email</span>
                        </label>
                        <input 
                        ref={emailRef} 
                        type="email" 
                        placeholder="email@example.com" 
                        className="input input-bordered" 
                        />
                    </div>
                    
                    <div className="form-control mt-4">
                        <label className="label">
                        <span className="label-text">Password</span>
                        </label>
                        <input 
                         ref={passwordRef}
                        type="password" 
                        placeholder="Password" 
                        className="input input-bordered" 
                        />
                    </div>
                    
                    <div className="form-control mt-4">
                        <label className="label">
                        <span className="label-text">Confirm Password</span>
                        </label>
                        <input 
                         ref={passwordRef}
                        type="password" 
                        placeholder="Confirm Password" 
                        className="input input-bordered" 
                        />
                    </div>
                    
                    <div className="form-control mt-6">
                        <button className="btn btn-primary" onClick={handleButtonClick}>Sign Up</button>
                    </div>
                    
                    <div className="text-center mt-4">
                        <p>Already have an account? 
                        <a className="link link-primary ml-1"  onClick={handleAuthToggle} >
                            Login
                        </a>
                        </p>
                        {error && <p style={{ color: "red" }}>{error}</p>}
                    </div>
                    </form>
                    
                    
                    }
                

                    </div>
                    </div>
                </div>
                    

            )
            }

            export default Login
