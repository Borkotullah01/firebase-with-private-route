
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import FirebaseProvider from '../FirebaseProvider/FirebaseProvider';

const Root = () => {
    return (
    <>
    <div className="z-50">
    <Navbar></Navbar>
    </div>
    <div className="w-full h-[80px]"></div>
    <div className='w-11/12 mx-auto z-10'>
        <Outlet></Outlet>
    </div>
    </>
        
    );
};

export default Root;