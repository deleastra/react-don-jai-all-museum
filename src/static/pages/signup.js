import { Button } from 'react-bootstrap';
import { FaFacebookF, FaGoogle, FaLinkedinIn } from "react-icons/fa";

function SignUp() {
  return (
    <div className='sign-up'>
        <div className='row'>
            <div className='col'></div>
            <div className='col-3'>
                <div className='row text-center justify-content-center hello'>
                    <div className='col-12 font-25 font-w-500 pb-4'>Hello, welcome!</div>
                    <div className='col-6 pb-4'>Enter your personal detail and start journery with us</div>
                    <div className='col-12'><Button className='px-5'>Sign in</Button></div>
                </div>
            </div>
            <div className='col-4'>
                <div className='row text-center create-account'>
                    <div className='col-12 font-25 font-w-500 header pt-5'>Create Account</div>
                    <div className='col-12 d-flex justify-content-center'>
                        <div className='svg-border'><FaFacebookF /></div>
                        <div className='svg-border'><FaGoogle /></div>
                        <div className='svg-border'><FaLinkedinIn /></div>
                    </div>
                    <div className='col-12 text'>Or use your email for registration:</div>
                    <div className='col-8'><input type="text" name="name" placeholder='&#xf007;  Name' className='form-control'/></div>
                    <div className='col-8'><input type="text" name="email" placeholder='&#xf0e0;  Email' className='form-control'/></div>
                    <div className='col-8'><input type="text" name="password" placeholder='&#xf023;  Password' className='form-control'/></div>
                    <div className='col-8 pb-5'><Button className='px-5'>Sign up</Button></div>
                </div>
            </div>
            <div className='col'></div>
        </div>
    </div>
  );
}

export default SignUp;
