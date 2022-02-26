import "../styles/index.scss";
import Recipes from "./Recipes"

import React from 'react';

const App = () => {
  return (
      <>
          <section className="hero" />
          <main>
              <section>
                  <h1>Oh hi, React</h1>
              </section>
          </main>
          <Recipes />
      </>
  )
}

export default App;