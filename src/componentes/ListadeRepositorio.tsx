import { RepositoryItem } from './ItemRepositorio';
import '../styles/repositories.scss';
import { useState, useEffect } from 'react';

interface Repositorio {
  name: string;
  description: string;
  html_url: string;
}

export function ListaRepositorio() {
  const [repositories, setRepositories] = useState<Repositorio[]>([]);

  useEffect(() => {
    fetch('https://api.github.com/users/Leojunkes/repos')
      .then((response) => response.json())
      .then((data) => setRepositories(data));
  }, []);

  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        {repositories.map((repository) => {
          return (
            <RepositoryItem key={repository.name} repository={repository} />
          );
        })}
      </ul>
    </section>
  );
}
