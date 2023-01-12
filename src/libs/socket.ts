import { API_BASE_URL } from "./index";
import io from "socket.io-client";

export const socket = (io as any).connect(API_BASE_URL);
