import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static values = { shotUrl: String, score: Number }
  static targets = [ "output" ]

  goal(score) {
    this.outputTarget.textContent = score;
  }

  shoot() {
    fetch(this.shotUrlValue, { method: "POST" })
      .then(response => response.json())
  }
}

// Catch event (originates from Server via ActionCable)
document.addEventListener("Goal!", function(event) {
  const score = event.detail.score;
  let scoreElem = document.getElementById('score');
  scoreElem.innerText = score;
});
