export default class Nav {
  constructor(navItems) {
    this.navItems = navItems
  }

  renderNav(container) {
    const appendNavItem = this.navItems.map((e, i) => {
      const lowerCase = e.toLowerCase()
      return (container.innerHTML += `<a href="#${lowerCase}-section" ${
        i === 0 ? 'class="active-nav"' : ''
      }>${e}</a>`)
    })
  }
}
