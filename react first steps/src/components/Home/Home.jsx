import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <main className="home">
        <section className="about">
          <h2>About me</h2>
          <p>
            Hi!I'm Paula, web development student and enthusiast of
            design, clean code, and continuous improvement.
          </p>
        </section>

        <section className="skills">
          <h3>Tech stack</h3>
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