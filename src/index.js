import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class TextBox extends React.Component {
  render() {
    return (
      //<div className='container-fluid'>
        <div className='row background'>
          <div className='col-6'>
            <div className='float-right'>
              <textarea id='markdown-box' rows='22' type='text' class='form-control'>default text here :</textarea>
            </div>
          </div>
          <div className='col-6'>
            <textarea id='preview-box' rows='22' type='text' class='form-control' disabled>preview text here :</textarea>
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


/*
class TextBox extends React.Component {
  render() {
    return (
      //<div className='container-fluid'>
        <div className='row background'>
          <div className='col-6'>
            <div className='row'>
              <div className='offset-6' id='markdown-box'><textarea id='markdown-box' rows='22' type='text' class='form-control'>default text here :</textarea></div>
            </div>
          </div>
          <div className='col-6'>
            <div className='row'>
              <div className='col-6 preview-box center-block' >preview</div>
            </div>
          </div>
        </div>
      //</div>
    );
  }
}

*/