import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <main className="home">
        <section className="about">
          <h2>Sobre mí</h2>
          <p>
            ¡Hola! Soy Paula, estudiante de desarrollo web y entusiasta del
            diseño, el código limpio y la mejora continua. 
          </p>
        </section>

        <section className="skills">
          <h3>Tecnologías que manejo:</h3>
          <ul>
            <li>HTML, CSS, JavaScript</li>
            <li>React, Node.js, Express</li>
            <li>MongoDB, MySQL</li>
            <li>Git & GitHub</li>
          </ul>
        </section>
      </main>
    );
  }
}

export default Home;