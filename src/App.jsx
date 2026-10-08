import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <div>
          <h1>Kelsi's homepage</h1>
          <p>
            Welcome!
          </p>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          click count is {count}
        </button>
      </section>

      <section id="next-steps">
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>let's connect!</h2>
          <ul>
            <li>
              <a href="https://github.com/vega28" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/flatland/" target="_blank">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </section>

      <section id="spacer"></section>
    </>
  )
}

export default App
