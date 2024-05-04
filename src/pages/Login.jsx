import { Link } from 'react-router-dom';
import img from '../assets/images/login/login.svg'
import toast, { Toaster } from 'react-hot-toast';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';

const Login = () => {
    const { signIn } = useContext(AuthContext);
    const handleLogin = async event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        try {
            //User Login
            const result = await signIn(email, password)
            console.log(result)
            toast.success('Signin Successful')
        } catch (err) {
            console.log(err)
            toast.error(err?.message)
        }

    }
    return (
        <div>
            <div className='flex gap-20'>
                <div>
                    <img src={img} alt="" className='hidden lg:block' />
                </div>

                <div className='font-inter border px-16 py-14 rounded-lg'>
                    <h2 className='text-4xl font-semibold text-center mb-14'>Log In</h2>
                    <form onSubmit={handleLogin}>

                        <div className='flex flex-col mt-8'>
                            <label htmlFor="" className='font-semibold'>
                                Email
                            </label>
                            <input type="text" name='email' placeholder='Email' className='w-[461px] h-14 p-4 border-2 rounded-xl border-[#E8E8E8] mt-5'required />
                        </div>
                        <div className='flex flex-col mt-8'>
                            <label htmlFor="" className='font-semibold'>
                                Password
                            </label>
                            <input type="password" name='password' placeholder='Password' className='w-[461px] h-14 p-4 border-2 rounded-xl border-[#E8E8E8] mt-5' />
                        </div>

                        <input type="submit" value="Log In" className='bg-[#FF3811] w-[461px] h-14 text-white text-xl font-semibold btn mt-8' />
                        <Toaster />
                        <h2 className='text-center mt-4 font-open-sans font-medium'>Or Sign In with</h2>

                        <div className='mt-5'>
                            <button type="button" className="flex w-[461px] h-14 items-center justify-center  px-6 py-5 mx-2 text-sm font-medium text-white transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:bg-blue-400 focus:outline-none">
                                <svg className="w-4 h-4 mx-2 fill-current" viewBox="0 0 24 24">
                                    <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z">
                                    </path>
                                </svg>

                                <span className="hidden mx-2 sm:inline">Sign in with Google</span>
                            </button>
                        </div>
                        <h2 className='mt-8 text-center'>Do not have an account <span className='text-[#FF3811]'><Link to='/register'>Register</Link> </span> </h2>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;