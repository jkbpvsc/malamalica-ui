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

export async function getMyPosts(
    accessToken
) {
    const res = await axios.get(
        `${process.env.VUE_APP_API_BASE_URL}/api/posts/me`,
        {
            headers: {
                'Authorization' : `Bearer ${accessToken}`,
            }
        }
    );

    return res.data;
}

export async function postBid(
    data,
    accessToken
) {
    await axios.post(
        `${process.env.VUE_APP_API_BASE_URL}/api/bids`,
        qs.stringify(data),
        {
            headers: {
                'Authorization' : `Bearer ${accessToken}`,
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }
    );
}

export async function getPostById(
    id,
) {
    const res = await axios.get(
        `${process.env.VUE_APP_API_BASE_URL}/api/posts/${id}`,
    );

    return res.data;
}

export async function getBidsByPost(
    postId,
    accessToken
) {
    const res = await axios.get(
        `${process.env.VUE_APP_API_BASE_URL}/api/posts/${postId}/bids`,
        {
            headers: {
                'Authorization' : `Bearer ${accessToken}`,
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }
    );

    return res.data;
}

export async function getMyBids(
    accessToken,
) {
    const res = await axios.get(
        `${process.env.VUE_APP_API_BASE_URL}/api/bids/me`,
        {
            headers: {
                'Authorization' : `Bearer ${accessToken}`,
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }
    );

    return res.data;
}

export async function getBidById(
    bidId,
    accessToken,
) {
    const res = await axios.get(
        `${process.env.VUE_APP_API_BASE_URL}/api/bids/${bidId}`,
        {
            headers: {
                'Authorization' : `Bearer ${accessToken}`,
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }
    );

    return res.data;
}

export async function getBidMessages(
    id,
    accessToken,
) {
    const res = await axios.get(
        `${process.env.VUE_APP_API_BASE_URL}/api/bids/${id}/messages/`,
        {
            headers: {
                'Authorization' : `Bearer ${accessToken}`,
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }
    );

    return res.data;
}

export async function postBidMessage(
    message,
    id,
    accessToken,
) {
    const res = await axios.post(
        `${process.env.VUE_APP_API_BASE_URL}/api/bids/${id}/messages/`,
        qs.stringify({
            message,
        }),
        {
            headers: {
                'Authorization' : `Bearer ${accessToken}`,
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }
    );

    return res.data;
}

export async function getUserById(
    id,
) {
    const res = await axios.get(
       `${process.env.VUE_APP_API_BASE_URL}/api/users/${id}`
    );

    return res.data;
}
