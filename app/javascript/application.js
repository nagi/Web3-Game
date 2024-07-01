// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "controllers"
import "channels"

// FIXME: Loose logic. Encapsulate.
document.addEventListener("Goal!", function(event) {
  const score = event.detail.score;
  let scoreElem = document.getElementById('score');;
  scoreElem.innerText = score;
});
