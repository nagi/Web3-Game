import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static values = { shotUrl: String, score: Number }
  static targets = [ "output" ]

  shoot() {
    fetch(this.shotUrlValue, { method: "POST" })
      .then(response => response.json())
      .then(score => { this.outputTarget.textContent = score })
  }
}
