import axios from 'axios';

const api = axios.create({
    baseURL: import.meta.env.VITE_APP_API_URL, 
});

export const handleApiError = (error) => {
    if (error.response) {
      // La réponse a été reçue mais le serveur a renvoyé un statut d'erreur
      console.error('Erreur API:', error.response.data);
    } else if (error.request) {
      // La requête a été faite mais aucune réponse n'a été reçue
      console.error('Pas de réponse du serveur:', error.request);
    } else {
      // Quelque chose s'est mal passé lors de la création de la requête
      console.error('Erreur:', error.message);
    }
    // Vous pouvez renvoyer une valeur par défaut ou lever une exception
    throw error;
};

export default api