import { RepositoryItem } from "./ItemRepositorio";
import '../styles/repositories.scss';
import { useState, useEffect } from "react";

export function ListaRepositorio() {
    const [repositories, setRepositories] = useState([]);

    useEffect(() => {
        fetch('https://api.github.com/users/Leojunkes/repos')
            .then(response => response.json())
            .then(data => setRepositories(data))
    }, [])

    console.log(repositories)

    return (
        <section className="repository-list">
            <h1>Lista de repositórios</h1>

            <ul>
                {repositories.map(repository=>{
                    return<RepositoryItem key={repository.name} repository={repository} />
                })}
                
                
            </ul>
        </section>
    )
}