# Redux state

This is an example of state and state change in javascript

```javascript
const state = {
    buttonClicked = 'no'
    modalOpen = 'no'
}
```

```javascript
const state = {
    buttonClicked = 'yes'
    modalOpen = 'yes'
}
```

Redux helps us reliably manage this state

## Some stateful react

```javascript
import React, { Component } from "react";

class ExampleComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: [
        { title: "React Redux Tutorial for Beginners", id: 1 },
        { title: "TypeScript tutorial for beginners", id: 2 }
      ]
    };
  }

  render() {
    const { articles } = this.state;
    return <ul>{articles.map(el => <li key={el.id}>{el.title}</li>)}</ul>;
  }
}
```
