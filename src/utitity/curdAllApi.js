import axios from "axios";
import { ErrorToast } from "./FormHelper";


//! ================== Create New Blog ===================
export const create_blog__Request__API = async (reqBody) => {
    let URL = "/api/dashboard/blogs/create";

    try {
        const result = await axios.post(URL, reqBody);

        if (result.data.status === "Success") {
            return true;
        } else {
            ErrorToast("Something Went Wrong-1");
            return false;
        }
    } catch (e) {
        ErrorToast("Something Went Wrong-2");
        return false;
    }
};

//! ================== Read All Blog ===================
export const read_all_blog__Request__API = async () => {
    let URL = "/api/dashboard/blogs/fiend";

    try {
        const result = await axios.get(URL);

        if (result.data.status === "Success") {
            return result.data;
        } else {
            ErrorToast("Something Went Wrong-1");
            return false;
        }
    } catch (e) {
        ErrorToast("Something Went Wrong-2");
        return false;
    }
};

//! ================== Read single Blog ===================
export const read_single_blog__Request__API = async (id) => {
    let URL = `/api/dashboard/blogs/read-single?id=${id}`;

    try {
        const result = await axios.get(URL);

        if (result.data.status === "Success") {
            return result.data;
        } else {
            ErrorToast("Something Went Wrong-1");
            return false;
        }
    } catch (e) {
        ErrorToast("Something Went Wrong-2");
        return false;
    }
};

//! ================== Update Blog ===================
export const update_blog__Request__API = async ({ title, imgCDN, des, id }) => {
    let reqBody = { title, imgCDN, des };

    let URL = `/api/dashboard/blogs/update?id=${id}`;

    try {
        const result = await axios.post(URL, reqBody);

        if (result.data.status === "Success") {
            return true;
        } else {
            ErrorToast("Something Went Wrong-1");
            return false;
        }
    } catch (e) {
        ErrorToast("Something Went Wrong-2");
        return false;
    }
};

//! ================== Delete Single Blog ===================
export const delete_blog__Request__API = async (id) => {
    let URL = `/api/dashboard/blogs/delete?id=${id}`;
    try {
        const result = await axios.delete(URL);

        if (result.data.status === "Success") {
            return true;
        } else {
            ErrorToast("Something Went Wrong-1");
            return false;
        }
    } catch (e) {
        ErrorToast("Something Went Wrong-2");
        return false;
    }
};

//! ============================ Service ============================

//! ================== Create New Service ===================
export const create_service__Request__API = async (reqBody) => {
    let URL = "/api/dashboard/services/create";

    try {
        const result = await axios.post(URL, reqBody);

        if (result.data.status === "Success") {
            return true;
        } else {
            ErrorToast("Something Went Wrong-1");
            return false;
        }
    } catch (e) {
        ErrorToast("Something Went Wrong-2");
        return false;
    }
};

//! ================== Read All Service ===================
export const read_all_service__Request__API = async () => {
    let URL = "/api/dashboard/services/fiend";

    try {
        const result = await axios.get(URL);

        if (result.data.status === "Success") {
            return result.data;
        } else {
            ErrorToast("Something Went Wrong-1");
            return false;
        }
    } catch (e) {
        ErrorToast("Something Went Wrong-2");
        return false;
    }
};
//! ================== Read single Service ===================
export const read_single_service__Request__API = async (id) => {
    let URL = `/api/dashboard/services/read-single?id=${id}`;

    try {
        const result = await axios.get(URL);

        if (result.data.status === "Success") {
            return result.data;
        } else {
            ErrorToast("Something Went Wrong-1");
            return false;
        }
    } catch (e) {
        ErrorToast("Something Went Wrong-2");
        return false;
    }
};

//! ================== Update Service ===================
export const update_service__Request__API = async ({ title, desc, id }) => {
    let reqBody = { title, desc };

    let URL = `/api/dashboard/services/update?id=${id}`;

    try {
        const result = await axios.post(URL, reqBody);

        if (result.data.status === "Success") {
            return true;
        } else {
            ErrorToast("Something Went Wrong-1");
            return false;
        }
    } catch (e) {
        ErrorToast("Something Went Wrong-2");
        return false;
    }
};

//! ================== Delete Single Service ===================
export const delete_service__Request__API = async (id) => {
    let URL = `/api/dashboard/services/delete?id=${id}`;
    try {
        const result = await axios.delete(URL);

        if (result.data.status === "Success") {
            return true;
        } else {
            ErrorToast("Something Went Wrong-1");
            return false;
        }
    } catch (e) {
        ErrorToast("Something Went Wrong-2");
        return false;
    }
};
