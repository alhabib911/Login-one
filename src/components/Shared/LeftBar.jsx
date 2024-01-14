import Image from '../../assets/graphic5.svg'
const LeftBar = () => {
    return (
        <div>
            <h3 className='font-bold text-xl text-blue-900'>Get more things done with <br /> Loggin platform.</h3>
                <h4 className='pt-6 text-gray-500'>Access to the most powerfull tool in the <br /> entire design and web industry.</h4>
                <img className='w-2/3 pt-10' src={Image} alt="" />            
        </div>
    );
};

export default LeftBar;