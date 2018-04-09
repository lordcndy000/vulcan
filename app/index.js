import 'normalize.css'
import 'styles/index.scss'
import Particles from 'particlesjs'
import Landing from './components/Landing'
import Nav from './components/Nav'
import { selectElement } from './helpers'

window.addEventListener('load', () => {
  const preloader = selectElement('.preloader')
  const main = selectElement('main')

  hideElement(preloader)
  showElement(main)

  // Init particles
  const particles = Particles.init({
    color: '#6494aa',
    connectParticles: true,
    maxParticles: 150,
    selector: '.particles'
  })
})

document.addEventListener('DOMContentLoaded', () => {
  const landing = new Landing('Lordwill Mabalot')
  landing.renderLanding(selectElement('#home-section'))

  const nav = new Nav(['Home', 'About', 'Porfolio', 'Contact'])
  nav.renderNav(selectElement('#page-nav'))
})

const hideElement = element => {
  element.classList.add('hide')
}

const showElement = element => {
  element.classList.add('d-block')
}
