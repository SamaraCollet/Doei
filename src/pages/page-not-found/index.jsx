import {Link} from "react-router-dom"

const PageNotFound = () => {
    return (
        <div>
            <h1>Desculpe, esta página não está disponível.</h1>
            <h2>Este link pode estar quebrado ou a página pode ter sido removida.</h2>
            <Link to="/">Retornar à página inicial</Link>
        </div>
    )
}

export default PageNotFound