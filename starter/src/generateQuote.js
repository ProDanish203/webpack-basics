import axios from "axios";

export const generateQuote = async () => {
  const { data } = await axios.get("https://dummyjson.com/quotes", {
    headers: {
      Accept: "application/json",
    },
  });
  return getRandomQuote(data.quotes);
};

function getRandomQuote(quotes) {
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  return quote;
}
