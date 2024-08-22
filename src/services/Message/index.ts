import { postRequest } from "../api";

const sendMessage = async (data: any) => {
    try {
        const res = await postRequest("/message", data);
        return res;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export { sendMessage };