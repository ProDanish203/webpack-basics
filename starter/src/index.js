import { generateQuote } from "./generateQuote.js";
import "./styles/main.scss";
import contactImg from "./assets/contact.svg";

const contactImgTag = document.getElementById("contact-img");
contactImgTag.src = contactImg;

const { quote } = await generateQuote();
const quoteDiv = document.getElementById("quote");
quoteDiv.textContent = quote;

document.getElementById("quoteBtn").addEventListener("click", async () => {
  const { quote } = await generateQuote();
  quoteDiv.textContent = quote;
});
