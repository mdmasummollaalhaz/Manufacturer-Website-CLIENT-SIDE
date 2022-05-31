import { useEffect, useState } from "react"
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../firebase.init";

const useAdmin = () => {
    const navigate = useNavigate()
    const [admin, setAdmin] = useState(false);
    const [user] = useAuthState(auth)
    // const [adminLoading, setAdminLoading] = useState(true);
    useEffect(() => {
        const url = `https://fast-depths-70621.herokuapp.com/user/admin?email=${user.email}`
        fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    navigate('/login')
                }
                return res.json()
            })
            .then(data => setAdmin(data))
    }, [])

    return [admin]
}

export default useAdmin;