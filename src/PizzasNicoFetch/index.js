const baseUrlApi =
  process.env.REACT_APP_BASE_URL_API || "http://localhost:3001";

const responseToJson = (response) => response.json();

// Fonction qui retourne une fonction = closure
export default function PizzasNicoFetch(route) {
  return () => {
    return fetch(`${baseUrlApi}${route}`).then(responseToJson);
  };
}
