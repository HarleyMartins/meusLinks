const bloquearPortfolio = (event) => {
  event.preventDefault()
  let main = document.querySelector("main")
  let card = `
  <div class="card-alert">
    <h3>ERROR!</h3>
    <p>O portfolio ainda está em desenvolvimento</p>
  </div>
  `
  main.innerHTML += card

  setTimeout(() => {
    location.reload()
  }, 1000 * 3)
}
