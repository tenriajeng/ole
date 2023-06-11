import axios from "axios";
import apiConfig from "../config/apiConfig";
import appConfig from "../config/appConfig";

const headers = apiConfig.headers;
const host = appConfig.host;
const port = appConfig.port;

async function getList(page) {
    try {
        const response = await axios.get(
            `${host}:${port}/api/courses?page=${page}`
        );
        return response.data;
    } catch (error) {
        throw error;
    }
}

async function getCourseBySlug(slug) {
    try {
        const response = await axios.get(`${host}:${port}/api/courses/${slug}`);
        return response.data;
    } catch (error) {
        throw error;
    }
}

async function create(data) {
    try {
        const response = await axios.post(
            `${host}:${port}/api/courses`,
            data,
            headers
        );
        return response.data;
    } catch (error) {
        throw error;
    }
}

export default {
    getList,
    getCourseBySlug,
    create,
};
