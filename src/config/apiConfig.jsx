import { Cookies } from "react-cookie";
const cookies = new Cookies();

const headers = {
    headers: {
        Authorization: `Bearer ${cookies.get("auth_token")}`,
    },
};

export default { headers };
