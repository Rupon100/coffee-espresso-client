import footerImg from '../assets/logo1.png';
import footerBg from '../assets/13.jpg';
import footerBtm from '../assets/24.jpg'
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
    return (
        <div>

        
        <div className="flex justify-center items-center p-6 md:p-12"
        style={{
            background: `url(${footerBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }}
        >
            <footer>
                <div className="max-w-4xl mx-auto flex flex-col gap-4 justify-start text-black">
                    <img className='w-14' src={footerImg} alt="footer logo" />
                    <div className="flex flex-col gap-4 md:flex-row justify-center">
                        <div className='w-1/2 space-y-3'>
                           <h2 className='font-semibold text-xl md:text-2xl'>Espresso Emporium</h2>
                           <p>Always ready to be your friend. Come & Contact with us to share your memorable moments, to share with your best companion.</p>
                           <div className='flex gap-3'>
                              <FaFacebookF />
                              <FaLinkedin />
                              <FaInstagram />
                           </div>
                           <div className='space-y-2'>
                              <h2 className='font-semibold text-xl md:text-2xl'>Get inTouch</h2>
                              <div className='flex gap-2 items-center'>
                                <FaPhoneAlt />
                                <p>+8801842482658</p>
                              </div>
                              <div className='flex gap-2 items-center'>
                                <MdEmail />
                                <p>info@gmail.com</p>
                              </div>
                              <div className='flex gap-2 items-center'>
                                <FaLocationDot />
                                <p>72, Happy Homes, Tejgoan Dhaka</p>
                              </div>
                           </div>
                        </div>
                        <div className='w-1/2'>
                            <form className="flex justify-start flex-col gap-3">
                                <h2 className='text-xl md:text-2xl font-semibold'>Connect with Us</h2>
                                <label className="input input-bordered flex items-center gap-2">
                                  <input type="text" className="grow" placeholder="Username" />
                                </label>
                                <label className="input input-bordered flex items-center gap-2">
                                  <input type="text" className="grow" placeholder="Email" />
                                </label>
                                <textarea className="textarea textarea-bordered resize-none" placeholder="Message"></textarea>
                                <input className='self-start px-4 py-2 cursor-pointer border border-black rounded-xl' type="submit" value="Send" />
                            </form>
                        </div>
                    </div>
                </div>
            </footer>
            
        </div>
        <div className='h-12 flex justify-center items-center text-center p-2' style={{
                background: `url(${footerBtm})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}>
                <h3 className='text-center'>Copyright Espresso Emporim! All Rights Reserved!</h3>
            </div>
        </div>
    );
};

export default Footer;