import axios from "axios";
const API = import.meta.env.VITE_API;

export const sendMessage = async (formData) => {
    try {
        const res = await axios.post(`${API}/api/contact`,
            formData,
        )
        return res.data;
    } catch (error) {
        console.log(error?.response?.data?.error || "Something went wrong");
        throw error;
    }
}