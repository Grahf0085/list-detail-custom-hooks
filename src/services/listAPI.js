export const fetchCharacters = async (page) => {
  const res = await fetch('https://rickandmortyapi.com/api/character');
  const json = await res.json();
  const usable = json.results;

  return usable.slice((page - 1) * 20, page * 20);

  // return usable.map(({ id, name, image }) => ({
  //   id,
  //   name,
  //   image
  // }));
  
};
