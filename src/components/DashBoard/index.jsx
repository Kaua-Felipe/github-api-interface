import { CardRepositorio } from "../CardRepositorio"
import "./styles.css"

export function DashBoard({ userData, repos }) {
    let blog
    let blogExist
    if(userData != "") {
        let separarDate = userData.created_at.toString().split(["T"])[0].split("-")
        let year = separarDate[0]
        let month = separarDate[1]
        let day = separarDate[2]
        let dataCriacaoPerfil = `${day}/${month}/${year}`

        if(userData.blog != "") {
            blogExist = true
            if(
                userData.blog.includes("https") || 
                userData.blog.includes("http") || 
                userData.blog.includes("www")
            ) {
                blog = userData.blog
            } else {
                let url_blog = "https://"
                url_blog += userData.blog
                blog = url_blog
            }
        } else {
            blogExist = false
        }
        let location
        if(userData.location == null) {
            location = "Sem localização"
        } else {
            location = userData.location
        }

        return (
            <main id="main-content">
                <header>
                    <h1>{userData.name} <span>({userData.login})</span></h1>
                    <strong>Alguma coisa</strong>
                </header>
                <div className="container-profile">
                    <div className="container-infos-user">
                        <div className="img-perfil">
                            <img src={userData.avatar_url} alt="Imagem de perfil do usuário" />
                        </div>
                        <div className="bio">
                            <h2>Bio do Usuário</h2>
                            <div className="row-separator"></div>
                            <p>{userData.bio != null ? userData.bio : "O usuário não preencheu a sua Bio"}</p>
                        </div>
                        <div className="infos">
                            <h2>Informações</h2>
                            <div className="row-separator"></div>
                            <div className="location">
                                <span>Localização - {location} </span>
                            </div>
                            <div className="blog">
                                <span>
                                    Blog - 
                                    {
                                        blogExist == true ? <a href={blog} target="_blank"> {blog}</a> : " Sem blog"
                                    }
                                </span>
                            </div>
                            <p>{userData.followers} seguidores . {userData.following} seguindo</p>
                            <p>Perfil criado em: {dataCriacaoPerfil}</p>
                        </div>
                    </div>
                    <div className="container2">
                        <div className="repositorios">
                            <header>
                                <div className="container-header-repos">
                                    <div className="header-repos">
                                        <h2>Repositórios</h2>
                                        <span>Total: {userData.public_repos}</span>
                                    </div>
                                    <div className="row-separator"></div>
                                </div>
                            </header>
                            <main className="cards">
                                {
                                    repos.map(repo => {
                                        return (
                                            <CardRepositorio 
                                                key={repo.name} 
                                                name={repo.name} 
                                                url_repository={repo.html_url} 
                                                created_at={repo.created_at} 
                                                language={repo.language} 
                                                license_name={repo.license != null ? repo.license.name : "Sem Licença"} 
                                                starsCount={repo.stargazers_count}
                                            />
                                        )
                                    })
                                }
                            </main>
                        </div>
                    </div>
                </div>
            </main>
        )
    } else {
        return (
            <>
                <div className="content-sem-user">
                    <h2>Bem-Vindo ao GitHub API Interface!</h2>
                    <span className="response">Digite um usuário para buscá-lo</span>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" color="#d8d0cc" width="160" height="160" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                        </svg>
                        <span>GitHub</span>
                    </div>
                </div>
            </>
        )
    }
}
