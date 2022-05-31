import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';

const useUserInfo = () => {
    const [user] = useAuthState(auth);
    const [userInfo, setUserInfo] = useState([])
    useEffect(() => {
        const url = `https://fast-depths-70621.herokuapp.com/user?email=${user?.email}`
        fetch(url)
            .then(res => res.json())
            .then(data => data.map(signUser => setUserInfo(signUser)))
    }, [user])
    return [userInfo, setUserInfo]
};

export default useUserInfo;