import React from 'react';

export default class Tables extends React.Component {
  render() {
    return (
      <div>
        <section className="doc-bottom-space-large">
          <h2>Basic Table</h2>
          <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Table Header</th>
                <th>Table Header</th>
                <th>Table Header</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>1</td>
                <td>Table Content</td>
                <td>Table Content</td>
                <td>Table Content</td>
              </tr>

              <tr>
                <td>2</td>
                <td>Table Content</td>
                <td>Table Content</td>
                <td>Table Content</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className="doc-bottom-space-large">
          <h2>Striped Rows</h2>
          <table className="table -striped">
            <thead>
              <tr>
                <th>#</th>
                <th>Table Header</th>
                <th>Table Header</th>
                <th>Table Header</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>1</td>
                <td>Table Content</td>
                <td>Table Content</td>
                <td>Table Content</td>
              </tr>

              <tr>
                <td>2</td>
                <td>Table Content</td>
                <td>Table Content</td>
                <td>Table Content</td>
              </tr>

              <tr>
                <td>3</td>
                <td>Table Content</td>
                <td>Table Content</td>
                <td>Table Content</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className="doc-bottom-space-large">
        <h2>Bordered Table</h2>
        <table className="table -bordered">
          <thead>
            <tr>
              <th>#</th>
              <th>Table Header</th>
              <th>Table Header</th>
              <th>Table Header</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>1</td>
              <td>Table Content</td>
              <td>Table Content</td>
              <td>Table Content</td>
            </tr>

            <tr>
              <td>2</td>
              <td>Table Content</td>
              <td>Table Content</td>
              <td>Table Content</td>
            </tr>

            <tr>
              <td>3</td>
              <td>Table Content</td>
              <td>Table Content</td>
              <td>Table Content</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="doc-bottom-space-large">
        <h2>Hovered Table</h2>
        <table className="table -hovered">
          <thead>
            <tr>
              <th>#</th>
              <th>Table Header</th>
              <th>Table Header</th>
              <th>Table Header</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>1</td>
              <td>Table Content</td>
              <td>Table Content</td>
              <td>Table Content</td>
            </tr>

            <tr>
              <td>2</td>
              <td>Table Content</td>
              <td>Table Content</td>
              <td>Table Content</td>
            </tr>

            <tr>
              <td>3</td>
              <td>Table Content</td>
              <td>Table Content</td>
              <td>Table Content</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section>
        <h2>Contextual Classes</h2>
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Table Header</th>
              <th>Table Header</th>
              <th>Table Header</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="-sky">1</td>
              <td className="-crimson">Table Content</td>
              <td className="-sun">Table Content</td>
              <td className="-emerald">Table Content</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
    );
  }
}
