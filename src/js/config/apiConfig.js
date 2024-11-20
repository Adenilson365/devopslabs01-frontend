import dotenv from "dotenv";
dotenv.config();

const config = {
    baseUrl: process.env.BASE_URL || "http://192.168.200.102:3333"
  };
  
  export default config;
  