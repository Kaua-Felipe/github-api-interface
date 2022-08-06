import { CardRepositorio } from "../CardRepositorio"
import "./styles.css"

export function DashBoard({ userData, repos }) {
    userData != "" ? console.log(repos) : console.log("Sem usuário")
    if(userData != "") {
        return (
            <main id="main-content">
                <header>
                    <h1>{userData.name} <span>({userData.login})</span></h1>
                    <strong>Alguma coisa</strong>
                </header>
                <div className="container-profile">
                    <div className="container">
                        <div className="img-perfil">
                            <img src={userData.avatar_url} alt="" />
                        </div>
                        <div className="bio">
                            <h2>Bio do Usuário</h2>
                            <div></div>
                            <p>{userData.bio}</p>
                        </div>
                    </div>
                    <div className="container2">
                        <div className="repositorios">
                            <header>
                                <div>
                                    <h2>Repositórios</h2>
                                    <div></div>
                                </div>
                            </header>
                            <main className="cards">
                                {
                                    repos.map(repo => {
                                        return (
                                            <CardRepositorio 
                                                key={repo.name} 
                                                name={repo.name}
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
            <h1>Olá, Mundo!</h1>
        )
    }
}
