import React from 'react'

const About = () => {
  return (
    <div className='about'>
    <div className="about__headline">
      <h1>Quem somos nós</h1>
    </div>
    <div className="about__us">
      <p>
        A ecologic memories é constituída por uma equipa que procura formas de reutilizar máquinas fotográficas.
      </p>
    </div>
    <div className='about__team'>
      <img src='https://images.pexels.com/photos/1647905/pexels-photo-1647905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='ecologic-memories-team' className='about__image'></img>
    </div>
    <div className='about__objetives'>
      <p className='about__text'>Os nossos objetivos passam por:</p>
      <ul className='about__list'>
        <li className='about__item'>Contribuir para um ecossistema mais sustentável.</li>
        <li className='about__item'>Contribuir para um ecossistema mais sustentável.</li>
        <li className='about__item'>Contribuir para um ecossistema mais sustentável.</li>
        <li className='about__item'>Contribuir para um ecossistema mais sustentável.</li>
        <li className='about__item'>Contribuir para um ecossistema mais sustentável.</li>
      </ul>
    </div>
    <div className='about__trust'>
      <div className='about__paragraph'>
        <p>A ecologic memories é constituída por uma equipa que procura formas de reutilizar máquinas fotográficas. A ecologic memories é constituída por uma equipa que procura formas de reutilizar máquinas fotográficas. A ecologic memories é constituída por uma equipa que procura formas de reutilizar máquinas fotográficas. A ecologic memories é constituída por uma equipa que procura formas de reutilizar máquinas fotográficas. A ecologic memories é constituída por uma equipa que procura formas de reutilizar máquinas fotográficas. A ecologic memories é constituída por uma equipa que procura formas de reutilizar máquinas fotográficas. A ecologic memories é constituída por uma equipa que procura formas de reutilizar máquinas fotográficas. A ecologic memories é constituída por uma equipa que procura formas de reutilizar máquinas fotográficas. </p>
      </div>
      <div className='about__img'>
        <img src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="team-e-commerce"></img>
      </div>
    </div>
    <div className='about__message'>
      {/* COLOCAR UM VÍDEO AQUI */}
    </div>
    </div>
  )
}

export default About