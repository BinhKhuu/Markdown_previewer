import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
var MarkdownIt = require('markdown-it')

class RawText extends React.Component {
  render() {
    return (
      <textarea onChange={this.props.handleKeyPress} id='markdown-box' rows='22' type='text' class='form-control' value={this.props.state} ></textarea>
      );
  }
}

class Markup extends React.Component {
  createMarkup() {

    var md = new MarkdownIt()
    return {__html: md.render(this.props.state)};
  }
  render() {
    return (   
      <div dangerouslySetInnerHTML={this.createMarkup()} />
      );
  }
}
class TextBox extends React.Component {
  constructor() {
    super();
    var text = 'Heading\n=======\n\nSub-heading\n-----------\n \n### Another deeper heading\n \nParagraphs are separated\n'+
      'by a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**,'+
      ' \n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1.'+
      ' apples\n  2. oranges\n  3. pears\n\nThe rain---not the reign---in\nSpain.\n\n *[Herman Fassett](https://freecodecamp.com/hermanfassett)*';
    this.state = {
      value: text,
    };
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  handleKeyPress(event) {
    var text = event.target.value;
    var pos = event.target.selectionEnd;
    this.setState({
     value: text
    })
  }
  render() {
    return (
      //<div className='container-fluid'>
        <div className='row background'>
          <div className='col-6'>
            <div className='float-right'>
              <RawText handleKeyPress={this.handleKeyPress} state={this.state.value}/>
            </div>
          </div>
          <div className='col-6'>
              <Markup state={this.state.value}/>
          </div>
        </div>
      //</div>
    );
  }
}


// ========================================

ReactDOM.render(
  <TextBox />,
  document.getElementById('root')
);
