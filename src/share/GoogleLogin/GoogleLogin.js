import React, { useEffect } from 'react';
import axios from 'axios';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useToken from '../../hooks/useToken';

const GoogleLogin = () => {
    const navigate = useNavigate()
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    // const [token] = useToken(user)


    // Login with google
    const handleGoogleLogin = async () => {
        signInWithGoogle()
    }
    if (user) {
        navigate('/')
    }
    return (
        <div className=' text-center'>
            <button onClick={handleGoogleLogin} className="btn btn-outline">Continue with google</button>
        </div>
    );
};

export default GoogleLogin;