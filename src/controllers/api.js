import axios from 'axios'
import qs from 'querystring';

export async function handleOauthConnect(querystring) {
    const response = await axios.get(`${process.env.VUE_APP_API_BASE_URL}/oauth/connect${querystring}`);
    return response.data.accessToken;
}

export async function createPost(
    data,
    accessToken
) {
    const res = await axios.post(
        `${process.env.VUE_APP_API_BASE_URL}/api/posts`,
        qs.stringify(data),
        {
            headers: {
                'Authorization' : `Bearer ${accessToken}`,
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }
        );
    return res.data;
}

export async function getPosts(

) {
    const res = await axios.get(
        `${process.env.VUE_APP_API_BASE_URL}/api/posts`,
    );

    return res.data;
}