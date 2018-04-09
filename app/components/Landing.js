export default class Landing {
  constructor(name) {
    this.name = name
  }

  renderLanding(container) {
    const html = `
      <div class="overlay"></div>
      <div class="header-wrapper">
        <h1>Hello, I'm
          <span class="highlight">${this.name}</span>.
          <br> I'm a front-end web developer</h1>
        <a href="#" class="discover-btn">Discover</a>
      </div>
      <canvas class="particles"></canvas>`

    container.innerHTML = html
  }
}
