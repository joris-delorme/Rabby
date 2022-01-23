import rabbyLogo from '../../images/logo.png'
const Footer = () => {
    return (
        <footer className='mb-20 px-20'>
            <div className="h-[1px] my-20 bg-[rgba(255,255,255,0.5)] mx-auto"></div>
            <div className="flex">
                <img src={rabbyLogo} className='w-32' alt="logo" />
            </div>
        </footer>
    );
}

export default Footer