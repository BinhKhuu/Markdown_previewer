import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

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
              <textarea onChange={this.handleKeyPress} id='markdown-box' rows='22' type='text' class='form-control' value={this.state.value} ></textarea>
            </div>
          </div>
          <div className='col-6'>
              <textarea id='preview-box' rows='22' type='text' class='form-control' value={this.state.value} disabled>this.state.value</textarea> 
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


//create a custom preivew div
//convert text from usr input to markdown text in preivew

