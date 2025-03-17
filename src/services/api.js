import axios from 'axios';

const UNSPLASH_API_KEY = 'ZSUUXAuk1gEmdB_2ZWI_9k0VAvP-hwx0amfcoNt6Wro';
const UNSPLASH_BASE_URL = 'https://api.unsplash.com';

export const fetchDestinationImages = async (query) => {
  try {
    const response = await axios.get(`${UNSPLASH_BASE_URL}/search/photos`, {
      params: {
        query,
        client_id: UNSPLASH_API_KEY,
        per_page: 5, // Número de imagens por busca
      },
    });
    return response.data.results;
  } catch (error) {
    console.error('Erro ao buscar imagens:', error);
    return [];
  }
};