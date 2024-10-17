# APP AgroCare Tech

## Integrantes do Projeto

- **Alef Gabriel Alves Silva** (RM99487)
- **Danilo Araujo Mendonça** (RM99752)
- **Felipe Sieiro Paim dos Santos** (RM98249)
- **Leonardo Ferreira Lizier** (RM551509)
- **Rodrigo Gonçalves Teixeira Filho** (RM99838)

## Requisitos

Antes de iniciar o projeto, certifique-se de que os seguintes requisitos estão instalados:

- [Node.js](https://nodejs.org/) (versão 14.x ou superior)
- [Expo CLI](https://docs.expo.dev/get-started/installation/) (para projetos React Native)


## Scripts Disponíveis

Aqui estão alguns scripts úteis disponíveis no projeto:

* `npm start` ou `yarn start`: Inicia o servidor de desenvolvimento.
* `npm run build` ou `yarn build`: Compila o projeto para produção.
* `npm test` ou `yarn test`: Executa os testes do projeto.


Para implementar os requisitos e funcionalidades que você mencionou, aqui estão as orientações e passos necessários:

1. Favoritar Filmes

	•	Arquivo a ser modificado: FavoriteMovieButton.js
	•	Objetivo: Implementar a lógica para alternar o estado de favorito (adicionar ou remover).
	•	Passos:
	•	Adicionar o estado para controlar se o filme é favorito.
	•	Implementar a função toggleFavorite para alternar o estado.
	•	Armazenar a lista de filmes favoritos utilizando AsyncStorage.

import Ionicons from "@expo/vector-icons/Ionicons";
import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const FavoriteMovieButton = ({ movie }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    // Verificar se o filme já está favoritado ao carregar o componente
    const checkFavoriteStatus = async () => {
      const favorites = await AsyncStorage.getItem('favorites');
      const parsedFavorites = favorites ? JSON.parse(favorites) : [];
      setIsFavorite(parsedFavorites.some(fav => fav.id === movie.id));
    };
    checkFavoriteStatus();
  }, [movie]);

  const toggleFavorite = async () => {
    const favorites = await AsyncStorage.getItem('favorites');
    const parsedFavorites = favorites ? JSON.parse(favorites) : [];

    if (isFavorite) {
      // Remover dos favoritos
      const updatedFavorites = parsedFavorites.filter(fav => fav.id !== movie.id);
      await AsyncStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    } else {
      // Adicionar aos favoritos
      parsedFavorites.push(movie);
      await AsyncStorage.setItem('favorites', JSON.stringify(parsedFavorites));
    }

    setIsFavorite(!isFavorite);
  };

  return (
    <Ionicons name={isFavorite ? 'heart' : 'heart-outline'} size={32}
      color='white'
      onPress={toggleFavorite}
    />
  );
}

export default FavoriteMovieButton;

2. Exibir Filmes Favoritos

	•	Arquivo a ser modificado: MyFavorites.js
	•	Objetivo: Exibir todos os filmes que foram marcados como favoritos.
	•	Passos:
	•	Usar o hook useEffect para buscar os filmes favoritados armazenados no AsyncStorage.
	•	Passar esses filmes para o componente MovieList.

import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MovieList from './MovieList';

const MyFavorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const loadFavorites = async () => {
      const storedFavorites = await AsyncStorage.getItem('favorites');
      const parsedFavorites = storedFavorites ? JSON.parse(storedFavorites) : [];
      setFavorites(parsedFavorites);
    };

    loadFavorites();
  }, []);

  return (
    <MovieList title="My Favorites" data={favorites} />
  );
}

export default MyFavorites;

3. Persistência dos Favoritos

	•	Arquivos a serem modificados: FavoriteMovieButton.js e MyFavorites.js
	•	Objetivo: Utilizar o AsyncStorage para salvar e recuperar a lista de favoritos.
	•	Passos:
	•	Certifique-se de que tanto o componente FavoriteMovieButton quanto o MyFavorites estão utilizando o AsyncStorage corretamente para salvar e buscar a lista de filmes favoritos.

Estrutura das Pastas

	•	Componente de Botão de Favoritar: FavoriteMovieButton.js (na pasta components).
	•	Tela de Filmes Favoritos: MyFavorites.js (também na pasta components ou em screens se preferir separação por telas).

Outras Considerações

	•	Certifique-se de que o AsyncStorage está instalado corretamente no projeto. Se ainda não estiver, use:

npm install @react-native-async-storage/async-storage


	•	Atualização na HomeScreen: Certifique-se de que o componente MyFavorites está sendo utilizado corretamente para exibir a lista de filmes favoritos.

Seguindo essas orientações, você conseguirá implementar as funcionalidades de favoritar filmes, exibir e persistir os favoritos. Se precisar de mais ajuda ou ajustes específicos, é só me avisar!
