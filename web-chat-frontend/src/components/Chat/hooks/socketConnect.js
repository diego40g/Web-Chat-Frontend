import { useEffect } from "react";
import socketIOClient from 'socket.io-client'

function useSocket(user, dispatch) {
    useEffect (() => {
        const socket = socketIOClient.connect(`${process.env.REACT_APP_BACKEND_HOST}:${process.env.REACT_APP_BACKEND_PORT}`)
        socket.emit('join', user)
    }, [dispatch])
}

export default useSocket