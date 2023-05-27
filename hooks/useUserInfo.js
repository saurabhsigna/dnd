"use client";
import React from "react";
import { useCookies } from "react-cookie";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { UserInfoAtom } from "../atoms/UserInfoAtom";
// import { fetchUserInfo } from "../utils/fetchUserInfo";

export default function App() {
  const [userInfo, setUserInfo] = useRecoilState(UserInfoAtom);
  const [cookies, setCookie, removeCookie] = useCookies(["access_token"]);
  const token = cookies["access_token"];

  useEffect(() => {
    const fetchData = async () => {
      if (token && cookies) {
        try {
          const response = await fetch(
            process.env.NEXT_PUBLIC_BACKEND_URI + "/me",
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
              },
            }
          );
          const data = await response.json();
          setUserInfo(data);
        } catch (error) {
          if (error.message === "Invalid token") {
            removeCookie("access_token");
          } else {
            console.error(error);
          }
        }
      }
    };

    fetchData();
  }, [cookies, token]);
}
