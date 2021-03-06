
# react-component-visible

react-component-visible is a React library to handle conditional rendering very gracefully.

## Installation

Use the package manager [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) to install react-component-visible.

```bash
npm install react-component-visible
```
or
```bash
yarn install react-component-visible
```

## Usage

```react-js
import React from 'React';
import Visible from "react-component-visible";

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 3000);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Visible when={isLoaded} fallBack={"Please wait..."}>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </Visible>
      </header>
    </div>
  );
}

export default App;
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.