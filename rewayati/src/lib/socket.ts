// src/lib/socket.ts
import { io } from 'socket.io-client';

const socket = io('http://localhost:5000'); // عنوان سيرفرك

export default socket;
