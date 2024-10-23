import {useState, useEffect} from "react";
import {baseUrl, getRequest} from "../utils/services.js";

export const useFetchRecipientUser = (chat, user) => {
    const [recipientUser, setRecipientUser] = useState(null);
    const [error, setError] = useState(null);

    const recipientId = chat?.members.find((id) => id !== user?._id);

    // console.log('chat', chat)

    useEffect(() => {
        const getUser = async () => {

            if(!recipientId)
                return null;

            const response = await getRequest(`${baseUrl}/users/find/${recipientId}`);

            if(response?.error) {
                return setError(response);
            }

            setRecipientUser(response);
        };

        getUser();
    }, [recipientId]);

    return {recipientUser, error};
};