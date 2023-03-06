import axios from "axios";
import { Cookies } from "react-cookie";
import appConfig from "../config/appConfig";
const cookies = new Cookies();

const host = appConfig.host;
const port = appConfig.port;

const config = {
    headers: {
        Authorization: `Bearer ${cookies.get("auth_token")}`,
    },
};

async function login(data) {
    try {
        const response = await axios.post(`${host}:${port}/api/login`, data);
        return response.data;
    } catch (error) {
        throw error;
    }
}

async function authenticateUser() {
    try {
        const response = await axios.get(`${host}:${port}/api/profile`, config);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export default {
    login,
    authenticateUser,
    // signUp,
};
