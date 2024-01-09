const fetchCountries = async name => {
  try {
    const response = await fetch(
      `https://restcountries.com/v2/name/${name}?fields=name,capital,population,flags,Languages: [object Object]`
    );
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Error fetching data: ${error.message}`);
  }
};

export default fetchCountries;
