import React from "react"
import { RiSearch2Line } from "react-icons/ri"
import axios from "axios"
import "./styles.css"

export function NavBar({ setUserData, setRepos }) {
    async function getDataRepos(loginUser) {
        const repositorys = await (await axios.get(`https://api.github.com/users/${loginUser}/repos`)).data
        setRepos(repositorys)
    }

    async function addValueState() {
        let url = "https://api.github.com/users"
        let inputElement = document.querySelector("input[type=search]")
        let valueInput = inputElement.value

        if(valueInput != "") {
            const user = await axios.get(`${url}/${valueInput}`)
            const data = await user.data
            const userData = {
                name: data.name, 
                login: data.login, 
                avatar_url: data.avatar_url, 
                followers: data.followers, 
                following: data.following, 
                repos_url: data.repos_url, 
                blog: data.blog, 
                location: data.location, 
                bio: data.bio, 
                public_repos: data.public_repos, 
                created_at: data.created_at, 
            }
            setUserData(userData)

            getDataRepos(userData.login)
        } else {
            console.log("Informe o nome de usuário do github!")
        }
    }

    return (
        <nav>
            <span>GitHub API Interface</span>
            <div className="container-search">
                <input 
                    type="search" 
                    placeholder="Digite o seu usuário do github aqui..."
                />
                <button 
                    type="button" 
                    onClick={() => addValueState()}
                > 
                    Buscar...
                    <RiSearch2Line />
                </button>
            </div>
        </nav>
    )
}
