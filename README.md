# react-select
> Web select for react.

## install:
```shell
npm install -S afeiship/react-select
```

## usage:
1. import css
  ```scss
  @import "~react-select/style.scss";

  // customize your styles:
  $react-select-options: ()
  ```
2. import js
  ```js
  import React from 'react';
  import ReactDOM from 'react-dom';
  import BoilerplateReactCompnent from 'react-select';
  
  // your app:
  class App extends React.Component{
    render(){
      return (
        <BoilerplateReactCompnent />
      )
    }
  }

  // render to dom:
  ReactDOM.render(<App/>, document.getElementById('app'));
  ```

## docs:
- https://afeiship.github.io/react-select/

## resouces:
- https://www.robinwieruch.de/minimal-react-webpack-babel-setup/
- https://www.valentinog.com/blog/react-webpack-babel/
- https://jestjs.io/docs/en/tutorial-react#snapshot-testing-with-mocks-enzyme-and-react-16
- https://testing-library.com/docs/react-testing-library/api
