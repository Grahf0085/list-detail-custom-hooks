import { useEffect, useState  } from 'react';
import { fetchCharacters } from '../services/listAPI';
import { fetchDetails } from '../services/detailAPI';

export const useToons = (page) => {
  const [loading, setLoading] = useState(true);
  const [toons, setToons] = useState([]);

  useEffect(() => {
    fetchCharacters(page)
      .then(setToons)
      .finally(() => setLoading(false));
  }, [page]);

  return { toons, loading };

};

export const toonDetails = (id) => {
  const [detailsAPI, setDetailsAPI] = useState(null);

  useEffect(() => {
    fetchDetails(id).then(setDetailsAPI);
  }, []);

  return detailsAPI;
};
