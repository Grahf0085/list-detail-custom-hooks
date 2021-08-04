export const fetchDetails = async (id) => {
  const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
  const json = await res.json();
  return json;
};
