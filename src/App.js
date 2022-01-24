import React, { Component } from 'react'
import ReactDom from 'react-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import markdown from './Introduction.md';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = { text: null }
  }

  componentWillMount() {
    fetch(markdown)
      .then((response) => response.text())
      .then((text) => {
        this.setState({ text: text })
      });
  }

  render() {
    return (<div>
      <h1>What up?</h1>
      <ReactMarkdown children={this.state.text} remarkPlugins={[remarkGfm]} />
    </div>
    );
  }
}

export default App;
