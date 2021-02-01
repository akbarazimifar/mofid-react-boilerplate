import * as Sentry from "@sentry/react";
import logo from "./logo.svg";
import "./App.css";

function FallbackComponent() {
  return <div>An error has occured.</div>;
}

function App() {
  return (
    <Sentry.ErrorBoundary fallback={FallbackComponent}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </Sentry.ErrorBoundary>
  );
}

export default App;
