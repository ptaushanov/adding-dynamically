import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  const button = document.querySelector(".button");
  button.addEventListener("click", () => {
    alert("💣");
  });

  document.body
  .addEventListener("click", ()=>{
      const articles = []
      for(let i=0; i<5; i++){
        const article = document.createElement("article")
        article.innerText = "Some text";
        article.classList.add("message");
        articles.push(article);
      }

      articles.forEach(article => {
        document.body.appendChild(article)
      })
  })
});
