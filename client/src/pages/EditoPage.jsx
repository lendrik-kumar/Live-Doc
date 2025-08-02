import { useState, useEffect } from "react"
import Client from "../components/Client"
import Editor from '../components/Editor'
import { Button } from '@mui/material';
import { FaNotesMedical } from 'react-icons/fa'
import { DocumentTextIcon } from '@heroicons/react/24/solid'
import { useNavigate } from "react-router-dom"
import toast from "react-hot-toast";

const EditoPage = () => {
    const [connectionStatus, setConnectionStatus] = useState("Connecting...")
    const navigate = useNavigate()

    const [clients, setClients] = useState([
        {socketId: "123", username: "User1"},
        {socketId: "456", username: "User2"}
    ])

    useEffect(() => {

    })

    const handleCopyRoomId = () => {
        navigator.clipboard.writeText("123")
        toast.success("Room ID copied to clipboard!")
    }

    const handleLeaveRoom = () => {
        setConnectionStatus("You have left the room.")
        setClients([])
        navigate("/")
    }
  
    return (
        <div className="flex h-screen">
            {/* sidebar */}
            <div className="w-64 bg-white h-full shadow-lg rounded-r-3xl">
                <div className="flex flex-col h-full p-6">
                    {/* Updated Logo and Title */}
                    <div className="flex items-center gap-3 mb-8">
                        <DocumentTextIcon className="w-8 h-8 text-gray-800" />
                        <h1 className="text-2xl font-extrabold text-gray-800 tracking-tight">
                            Live-Doc
                        </h1>
                    </div>

                    <div className="mb-6">
                        <h3 className="text-sm font-medium text-gray-600">
                            Status: <span className="text-green-500">{connectionStatus}</span>
                        </h3>
                    </div>

                    <div className="flex-1">
                        <h3 className="text-sm font-medium text-gray-600 mb-4">Connected Users</h3>
                        <div className="space-y-2">
                            {clients.map((client) => (
                                <Client key={client.socketId} username={client.username} />
                            ))}
                        </div>
                    </div>

                    <div className="space-y-6 mb-6 mt-8">
                        <Button 
                            variant="contained" 
                            className="w-full mb-2 !bg-gray-700 !normal-case !py-3"
                            onClick={handleCopyRoomId}
                        >
                            Copy Room ID
                        </Button>
                    </div>
                    <div className="mb-3" >
                        <Button 
                            variant="contained" 
                            color="error" 
                            className="w-full !normal-case !py-3 "
                            onClick={handleLeaveRoom}
                        >
                            Leave Room
                        </Button>
                    </div>
                </div>
            </div>

            <div className="flex-1 bg-gray-50">
                <Editor />
            </div>
        </div>
    )
}

export default EditoPage