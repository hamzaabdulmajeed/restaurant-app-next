"use client"
import Image from "next/image";
import styles from "./page.module.css";
import ResponsiveAppBar from "../components/navbar/page";
import BoxBasic from "../components/banner/page";
import Main from "../components/main/page";
import SimplePaper from "../components/footer/page";
import React, { useContext, useState, useEffect } from 'react';
import Footer from "../components/footer/page"
import { FavoriteItem } from "./context";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation'
// import ResponsiveAppBar from "../components/navbar/page";
// import { ThemeContext } from './components/theme/context';
// import {ThemeContext}  from  "./context"
// import Page from "../components/";
// import SignUp from "../components/signup/signup";
// import Main from "./components/main/page";
export default function Home() {
  const [favorites, setFavorites] = useState([]);
  const router = useRouter();

//   useEffect(() => {
//     const userEmail = document.cookie
//         .split('; ')
//         .find(row => row.startsWith('userEmail='))
//         ?.split('=')[1];

//     if (!userEmail) {
    
//         router.push('/signin'); // Redirect to login if not authenticated
//     }
// }, [router]);

  return (
    <FavoriteItem.Provider value={{ favorites, setFavorites }}>

      
    <div>
      {/* <SignUp /> */}
      <ToastContainer />
      <ResponsiveAppBar />    
      <BoxBasic />
      <Main />
      <Footer />
      {/* <SimplePaper /> */}
    </div>
    
    </FavoriteItem.Provider>
  );
}
