import axios from "axios";
const API = import.meta.env.VITE_API;

export const changePassword = async (formData) => {
    try {
        const res = await axios.patch(`${API}/api/user`,
            formData,
            { withCredentials: true }
        );
        return res.data;
    } catch (error) {
        console.log(error?.response?.data?.error || "Can't update password")
        throw error;
    }
}


export const loginHistory = async () => {
    try {
        const res = await axios.get(`${API}/api/user/logins`,
            { withCredentials: true }
        );
        return res.data;
    } catch (error) {
        console.log(error?.response?.data?.error || "Can't show login history")
        throw error;
    }
}