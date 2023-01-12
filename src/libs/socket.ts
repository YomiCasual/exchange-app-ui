import io from "socket.io-client";

export const socket = (io as any).connect("http://localhost:3300");
