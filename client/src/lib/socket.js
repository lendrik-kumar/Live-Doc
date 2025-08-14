import { io } from "socket.io-client";
import env from "dotenv"


const BASE_URL = import.meta.env.VITE_NODE_URL 


export const initSocket = async () => {
        const options = {
        reconnectionAttempts: 'infinity',
        timeout: 10000,
        transports: ['websocket'],
    }

    return io(BASE_URL, options);
}