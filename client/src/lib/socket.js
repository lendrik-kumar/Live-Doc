import { io } from "socket.io-client";
import env from "dotenv"


// const BASE_URL = import.meta.env.VITE_NODE_URL 

const BASE_URL = "https://z6pxcm63-8001.inc1.devtunnels.ms/"


export const initSocket = async () => {
        const options = {
        reconnectionAttempts: 'infinity',
        timeout: 10000,
        transports: ['websocket'],
    }

    return io(BASE_URL, options);
}