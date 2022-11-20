import React from 'react'
import { admin, jobSeeker, userAuth } from "../services/auth/atom";
import { useRecoilState } from 'recoil'
import { forgotPassword, loginRequest, registerBusinessRequest, registerInterviewRequest, resetPassword, verifyOTP } from '../services/auth';
import { useRouter } from 'next/router';

function useAuth() {
    const router = useRouter()
    const [auth, setAuth] = useRecoilState(userAuth)
    const [jobSeekerAuth, setJobSeekerAuth] = useRecoilState(jobSeeker)
    // for admin recoil
    const [adminAuth, setAdminAuth] = useRecoilState(admin)

    const login = async (data) => {
        setAdminAuth(null)
        setJobSeekerAuth(null)
        setAuth(null)
        const res = await loginRequest(data);
        if (!res?.api_error) {
            let dataToStrore={
                token: res?.api_data?.token,
                userRole: res?.api_data?.type,
                fname: res?.api_data?.first_name,
            }
            if (res?.api_data?.type === "Job Seeker") {
                setJobSeekerAuth(dataToStrore)
                router.push('/jobseeker/dashboard')
            } else if (res?.api_data?.type === "ADMIN") {
                setAdminAuth(dataToStrore)
                router.push('/superadmin/dashboard')
            } else {
                setAuth(dataToStrore)
                router.push('/business/dashboard')
            }

        } else {
            return res
        }
    }
    const loginOnCalendar = async (data,onclose) => {
        setAdminAuth(null)
        setJobSeekerAuth(null)
        setAuth(null)
        const res = await loginRequest(data);
        if (!res?.api_error && res?.api_data?.type === "Job Seeker") {
            let dataToStrore={
                token: res?.api_data?.token,
                userRole: res?.api_data?.type,
                fname: res?.api_data?.first_name,
            }
            setJobSeekerAuth(dataToStrore)
            onclose()
        } else {
            return {res,error:true}
        }
    }

    const register_business = async (data, setError) => {
        const res = await registerBusinessRequest(data);
        if (!res.api_error) {
            setAuth({ token: res.api_data?.token });
            router.push({
                pathname: '/login',
                query: { email: data?.email }
            })

        } else {
            console.log(res?.api_data);
            setError(res?.api_data);
        }
    }

    const register_jobseeker = async (data, setError) => {
        const res = await registerInterviewRequest(data);
        if (!res?.api_error) {
            setAuth({ token: res?.api_data?.token });

            router.push({
                pathname: '/login',
                query: { email: data?.email }
            })
            // used temp windows we will replace later with router
            // window.location.href = `http://localhost:3000/login?mail=${email}`;
        } else {
            setError(res?.api_data);
        }
    }

    const forgot_password = async (data) => {
        const res = await forgotPassword(data);
        return res
    }
    const verify = async (data) => {
        const res = await verifyOTP(data);
        return res
    }
    const reset_password=async (data, token) => {
        const res = await resetPassword(data,token);
      return res
    }

    return {
        login,
        register_business,
        register_jobseeker,
        forgot_password,
        verify,
        reset_password,
        loginOnCalendar
    }
}

export default useAuth