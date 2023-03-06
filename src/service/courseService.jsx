import axios from "axios";
import appConfig from "../config/appConfig";

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

export default {
    getList,
    getCourseBySlug,
};
