
    import { useState } from "react"


            const Login = () => {

                const [isLogin, setIsLogin] = useState(false)


                const handleAuthToggle = () => {
                    setIsLogin(!isLogin);
                };

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
                        type="password" 
                        placeholder="Password" 
                        className="input input-bordered" 
                        />
                        <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                    
                    <div className="text-center mt-4">
                        <p>Dont have an account? 
                        <a className="link link-primary ml-1 " onClick={handleAuthToggle}>
                            Sign up
                        </a>
                        </p>
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
                        type="password" 
                        placeholder="Confirm Password" 
                        className="input input-bordered" 
                        />
                    </div>
                    
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Sign Up</button>
                    </div>
                    
                    <div className="text-center mt-4">
                        <p>Already have an account? 
                        <a className="link link-primary ml-1"  onClick={handleAuthToggle} >
                            Login
                        </a>
                        </p>
                    </div>
                    </form>
                    
                    
                    }
                

                    </div>
                    </div>
                </div>
                    

            )
            }

            export default Login
