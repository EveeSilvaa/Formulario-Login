import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../styles/HomePage.module.css';

const HomePage = () => {
  const [destinationImages, setDestinationImages] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [weather, setWeather] = useState(null);

  const UNSPLASH_API_KEY = 'ZSUUXAuk1gEmdB_2ZWI_9k0VAvP-hwx0amfcoNt6Wro';
  const OPENWEATHER_API_KEY = '986c50b7c3050be72a57d2a87238bde9';

  const fetchDestinationImages = async (query) => {
    try {
      const response = await axios.get('https://api.unsplash.com/search/photos', {
        params: {
          query: query || 'travel',
          client_id: UNSPLASH_API_KEY,
          per_page: 6,
        },
      });
      setDestinationImages(response.data.results);
    } catch (error) {
      console.error('Erro ao buscar imagens:', error);
    }
  };

  const fetchWeather = async (city) => {
    try {
      const response = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
        params: {
          q: city,
          appid: OPENWEATHER_API_KEY,
          units: 'metric',
          lang: 'pt',
        },
      });
      setWeather(response.data);
    } catch (error) {
      console.error('Erro ao buscar previsão do tempo:', error);
    }
  };

  useEffect(() => {
    fetchDestinationImages();
  }, []);

  const handleSearch = () => {
    fetchDestinationImages(searchQuery);
    fetchWeather(searchQuery);
  };

  // Função para traduzir descrições
  const translateDescription = (description) => {
    const translations = {
      'Eiffel Tower in Paris': 'Torre Eiffel em Paris',
      'Tokyo cityscape': 'Panorama de Tóquio',
      'New York skyline': 'Horizonte de Nova York',
      // Adicione mais traduções conforme necessário
    };
    return translations[description] || 'Destino Incrível';
  };

  return (
    <div className={styles.homeContainer}>
      <div className={styles.banner}>
        <h1>Bem-vindo ao TravelMaster</h1>
        <p>Encontre os melhores destinos e planeje sua viagem dos sonhos!</p>
        <div className={styles.searchBar}>
          <input
            type="text"
            placeholder="Pesquisar destinos..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button onClick={handleSearch}>Buscar</button>
        </div>
      </div>

      {weather && (
        <div className={styles.weatherSection}>
          <h2>Previsão do Tempo em {weather.name}</h2>
          <p>{weather.weather[0].description}</p>
          <p>Temperatura: {weather.main.temp}°C</p>
        </div>
      )}

      <div className={styles.popularDestinations}>
        <h2>Destinos Encontrados</h2>
        <div className={styles.destinationGrid}>
          {destinationImages.map((image) => (
            <div key={image.id} className={styles.destinationCard}>
              <img src={image.urls.small} alt={image.alt_description} />
              <h3>{translateDescription(image.alt_description)}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;