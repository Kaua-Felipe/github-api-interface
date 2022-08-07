import { AiFillStar } from "react-icons/ai"
import "./styles.css"

export function CardRepositorio({ name, url_repository, created_at, language, license_name, starsCount }) {
    let separarDate = created_at.toString().split(["T"])[0].split("-")
    let year = separarDate[0]
    let month = separarDate[1]
    let day = separarDate[2]
    let portugueseDate = `${day}/${month}/${year}`

    return (
        <a href={url_repository} target="_blank" className="card-link">
            <div className="card">
                <header className="card-header">
                    <p>{name}</p>
                    <span>{portugueseDate}</span>
                </header>
                <main className="card-main">
                    <span>{language}</span>
                </main>
                <footer className="card-footer">
                    <span>{license_name}</span>
                    <div>
                        <AiFillStar className="star" />
                        <span>{starsCount}</span>
                    </div>
                </footer>
            </div>
        </a>
    )
}
