import { io } from 'socket.io-client';
const socket = io('http://sdpimagedetection.com:80');
export default socket;
