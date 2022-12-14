import React, { useState } from "react"
import { ToastContainer } from "react-toastify"
import { DashBoard } from "../../components/DashBoard"
import { NavBar } from "../../components/NavBar"
import "./styles.css"

export function Home() {
    const [ userData, setUserData ] = useState("")
    const [ repos, setRepos ] = useState([])

    return (
        <>
            <NavBar setUserData={setUserData} setRepos={setRepos} />
            <DashBoard userData={userData} repos={repos} />
            <ToastContainer 
                theme="colored" 
                position="top-center" 
                autoClose={3000}
            />
        </>
    )
}
