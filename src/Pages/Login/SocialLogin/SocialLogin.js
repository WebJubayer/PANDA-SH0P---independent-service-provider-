import React from 'react';
import google from '../../../Images/Social/google.png';
import facebook from '../../../Images/Social/facebook.png';
import github from '../../../Images/Social/github.png';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const SocialLogin = () => {
    const auth = getAuth();

    const provider = new GoogleAuthProvider(); 

    const signInWithGoogle = () => {
        signInWithPopup(auth, provider)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(error => {
          console.error(error);  
        })
    }
    
    
    
    
    const signInWithGithub = () => {
        console.log('github sign in clicked')
    }
    const signInWithFacebook = () => {
        console.log('facebook sign in clicked')
    }



    return (
        <div>
            <div className='d-flex align-items-center justify-content-center'>
                <div style={{ height: '1px' }} className='bg-primary w-50 '></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-primary w-50 '></div>
                
            </div>
            <div className=''>
                <button
                    onClick={() => signInWithGoogle()}
                    className='btn btn-info w-75 d-block mx-auto my-2'>
                    <img style={{ width: '30px' }} src={google} alt="" />
                    <span className='px-2'>Google</span>
                </button>
                <button
                    onClick={() => signInWithGithub()}
                    className='btn btn-info w-75 d-block mx-auto'>
                    <img style={{ width: '30px' }} src={github} alt="" />
                    <span className='px-2'>Github</span>
                </button>
                <button
                     onClick={() => signInWithFacebook()}
                    className='btn btn-info w-75 d-block mx-auto my-2'>
                    <img style={{ width: '30px' }} src={facebook} alt="" />
                    <span className='px-2'>Facebook</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;