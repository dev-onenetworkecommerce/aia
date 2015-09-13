import React from 'react';

export default class Forms extends React.Component {
  render() {
    return (
      <div>
             <h3>FORMS</h3>

             <p>
                This is a collection of symbols for quickly mocking up web applications, created by your friends at One
                Network Ecommerce and released under the ONE license.
            </p>

        <div className="row">
            <div className="col-md-3">

               <h5>Form Elements</h5>
               <hr />

               <textarea className="form-control" name="" place-holder="Text area content">
                  Text content here.
               </textarea>

               <input className="form-control" type="text" value="Input value" />

               <input className="form-control" type="text" placeholder="Placeholder" />

               <select className="form-control">
                 <option value="">Selection Option</option>
               </select>


            </div>

            <div className="col-md-3">
               <h5>Form Elements(Disabled)</h5>

               <hr />

               <textarea disabled className="form-control -disabled" name="">
                  Text content here.
               </textarea>

               <input  disabled className="form-control -disabled" type="text" value="Input value" />

               <input  disabled className="form-control -disabled" type="text" placeholder="Placeholder" />

               <select disabled className="form-control -disabled">
                 <option value="">Selection Option</option>
               </select>
            </div>

            <div className="col-md-3">
               <h5>Form Elements with Focus</h5>

               <hr />

               <textarea className="form-control" name="">
                  Text content here.
               </textarea>

               <input className="form-control" type="text" placeholder="Input Value" />
            </div>

            <div className="col-md-3">

             <h5>Validation Erros</h5>
               <hr />

               <textarea className="form-control -error" name="">
                  Text content here.
               </textarea>

               <input className="form-control -error" type="text" placeholder="Input Value" />
            </div>
        </div>
      </div>
    );
  }
}
