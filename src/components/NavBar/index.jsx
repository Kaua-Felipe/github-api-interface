import React, { useState } from "react"
import { RiSearch2Line } from "react-icons/ri"
import axios from "axios"
import "./styles.css"

import { toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.min.css'

export function NavBar({ setUserData, setRepos }) {
    const [ userNotFound, setUserNotFound ] = useState(null)

    async function getDataRepos(loginUser) {
        const repositorys = await (await axios.get(`https://api.github.com/users/${loginUser}/repos`)).data
        setRepos(repositorys)
    }
    async function addValueState() {
        let url = "https://api.github.com/users"
        let inputElement = document.querySelector("input[type=search]")
        let valueInput = inputElement.value
        const notifyUserNotFound = () => toast.error(`"${valueInput}" não existe. Busque um usuário válido!`)
        const notifyInputClear = () => toast.warn("Primeiro você precisa digitar um usuário para buscar!")
        const notifySuccess = () => toast.success(`Usuário "${valueInput}" Encontrado!`, { autoClose: 2000 })

        if(valueInput != "") {
            try {
                const user = await axios.get(`${url}/${valueInput}`)
                const data = await user.data
                const userData = {
                    name: data.name, 
                    login: data.login, 
                    avatar_url: data.avatar_url, 
                    followers: data.followers, 
                    following: data.following, 
                    blog: data.blog, 
                    location: data.location, 
                    bio: data.bio, 
                    public_repos: data.public_repos, 
                    created_at: data.created_at
                }
                setUserData(userData)
                notifySuccess()
    
                getDataRepos(userData.login)
            } catch(error) {
                notifyUserNotFound()
            }
        } else {
            notifyInputClear()
            setUserData("")
        }
    }

    return (
        <nav>
            <div className="container-icon-github">
                <svg xmlns="http://www.w3.org/2000/svg" color="#d8d0cc" width="40" height="40" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                </svg>
                <a href="/">
                    <span>GitHub API Interface</span>
                </a>
            </div>
            <div className="container-search">
                <input 
                    type="search" 
                    placeholder="Digite o usuário do github aqui..."
                />
                <button type="submit" 
                    onClick={() => addValueState()}
                > 
                    Buscar...
                    <RiSearch2Line />
                </button>
            </div>
        </nav>
    )
}
