import request from "umi-request";

export async function getUserLogin(params) {
    return request.post("/Home/userLogin",params)
}