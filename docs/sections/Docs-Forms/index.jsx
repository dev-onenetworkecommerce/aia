import React from 'react';

export default class Forms extends React.Component {
  render() {
    return (
      <div>
        <div>
             <h3>FORMS</h3>

             <p>
                This is a collection of symbols for quickly mocking up web applications, created by your friends at One
                Network Ecommerce and released under the ONE license.
            </p>
        </div>

        <div class="row">
            <div className="col-md-3">
               <h5>Form Elements</h5>
               <hr />
               <textarea className="textarea-control" name="" place-holder="Text area content">
                  Text content here.
               </textarea>

               <input type="text" name="" value="Input value" placeholder="Input value" />
            </div>
            <div className="col-md-3">
               <h5>Form Elements(Disabled)</h5>
               <hr />
               <textarea className="textarea-control" name="">
                  Text content here.
               </textarea>
            </div>
            <div className="col-md-3">
               <h5>Form Elements with Focus</h5>
               <hr />
               <textarea className="textarea-control" name="">
                  Text content here.
               </textarea>

            </div>
            <div className="col-md-3">
             <h5>Validation Erros</h5>
               <hr />
               <textarea className="textarea-control" name="">
                  Text content here.
               </textarea>

            </div>
        </div>
      </div>
    );
  }
}
