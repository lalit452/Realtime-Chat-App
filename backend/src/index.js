import express from "express"
import authRoutes from "./routes/auth.route.js"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import messageRoutes from "./routes/message.route.js"
import cors from "cors";
import {connectDB} from './lib/db.js'


const app = express();

const PORT = process.env.PORT
const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:5173";


app.use(express.json()); 
app.use(cookieParser());

app.use(cors({ 
    origin: FRONTEND_URL,
    credentials: true,
}));

// import { create } from "zustand";
// import { axiosInstance } from "../lib/axios.js";
// import toast from "react-hot-toast";

// export const useAuthStore = create((set) => ({
//     authUser: null,
//     isSigningUp: false,
//     isLoggingIng: false,
//     isUpdatingProfile: false,
//     isCheckingAuth: true,
//     onlineUsers: [],

//     // checkAuth: async() =>{
//     //     try{
//     // const res = await axiosInstance.get("/auth/check");
//     // set({ authUser: res.data});

//     //     }catch(error){
//     //         console.log("Error in checkAuth: ", error);
//     // set({ authUser: null});

//     //     } finally{
//     //         set({ isCheckingAuth: false });
//     //     }
//     // },

//     checkAuth: async () => {
//         console.log("i am in checkAuth")
//         try {
//             const res = await axiosInstance.get("/auth/check");
//             set({ authUser: res.data });
//             toast.success("User authenticated");
//         } catch (error) {
//             console.log("Error in checkAuth: ", error);
//             set({ authUser: null });
//             if (error.response && error.response.status === 401) {
//                 toast.error("Unauthorized! Please log in.");
//             } else {
//                 toast.error("Something went wrong. Please try again.");
//             }
//         } finally {
//             set({ isCheckingAuth: false });
//         }
//     },


//     signup: async (data) => {
//         console.log("i am in siup useauthstore")
//         set({ isSigningUp: true });
//         try {
//             const res = await axiosInstance.post("/auth/signup", data);
//             set({ authUser: res.data });
//             toast.success("Account created successfully");
//         } catch (error) {
//             toast.error(error.response.data.message);
//         } finally {
//             set({ isSigningUp: false });
//         }
//     },

//     login: async (data) => {
//         set({ isLoggingIng: true });
//         try {
//             const res = await axiosInstance.post("/auth/login", data);
//             set({ authUser: res.data });
//             toast.success("Logged in successfully");
//         } catch (error) {
//             toast.error(error.response.data.message);
//         } finally {
//             set({ isLoggingIng: false });
//         }
//     },

//     logout: async () => {
//         try {
//             await axiosInstance.post("/auth/logout");
//             set({ authUser: null });
//             toast.success("Logged out successfully");
//         } catch (error) {
//             toast.error(error.response.data.message);
//         }
//     },

//     updateProfile: async(data) =>{
//         set({isUpdatingProfile: true});
//         try{
//             const res = await axiosInstance.put("/auth/update-profile", data);
//             set({authUser: res.data});
//             toast.success("Profile updated successfully");
//         }catch(error){
//             console.log("error in update profile: ", error);
//             toast.error(error.response.data.message);
//         }finally{
//             set({ isUpdatingProfile: false});
//         }
//     }

// }));
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
connectDB()


// app.listen(PORT, ()=>{
//     console.log("server is running on PORT :" + PORT);
// }) 

if (process.env.NODE_ENV !== "production") {
    app.listen(PORT, () => {
      console.log("Server is running on PORT: " + PORT);
    });
  }

  export default app;