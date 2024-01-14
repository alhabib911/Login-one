
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo-light.svg'
import LeftBar from '../Shared/LeftBar';
import OthersLogin from '../Shared/OthersLogin';

const Login = () => {
    return (
        <div className='flex'>
            <div className='w-2/5 pl-20 pt-28'>
                <LeftBar></LeftBar>
            </div>
            <div className='w-3/5 bg-[#064E89] h-screen'>
                <div className='pl-52 pt-28'>
                    <div>
                        <img className='w-24' src={Logo} alt="" />
                    </div>
                    <div className='pt-20 text-white'>
                        <div className='flex gap-3 text-sm'>
                            <div>
                                <Link className='font-semibold' to='/'>Login</Link>
                            </div>
                            <div>
                                <Link className='font-light' to='/register'>Register</Link>
                            </div>
                        </div>
                        <div className='pt-4 font-light text-sm'>
                            <div>
                                <input className='w-1/2 rounded-sm py-1 pl-2 outline-none text-black' type="text" name="" id="" placeholder='E-mail Address' />
                            </div>
                            <div className='pt-2'>
                                <input className='w-1/2 rounded-sm py-1 pl-2 outline-none text-black' type="password" name="" id="" placeholder='Password' />
                            </div>
                        </div>
                        <div className='flex gap-5 pt-5 font-light text-xs'>
                            <div className='font-semibold'>
                                <button className='bg-white px-5 py-2 rounded-md text-[#064E89]' type="submit">Login</button>
                            </div>
                            <div className='font-semibold flex'>
                                <button>Forget password?</button>
                            </div>
                        </div>
                        <OthersLogin></OthersLogin>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;