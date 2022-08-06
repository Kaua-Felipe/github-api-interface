import React, { useState } from "react"
import { DashBoard } from "../../components/DashBoard"
import { Footer } from "../../components/Footer"
import { NavBar } from "../../components/NavBar"
import "./styles.css"

export function Home() {
    const [ userData, setUserData ] = useState("")
    const [ repos, setRepos ] = useState([])

    return (
        <>
            <NavBar setUserData={setUserData} setRepos={setRepos} />
            <DashBoard userData={userData} repos={repos} />
            {/* <Footer /> */}
        </>
    )
}
