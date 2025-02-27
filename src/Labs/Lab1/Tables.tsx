export default function Tables(){
    return(
        <div id="wd-tables">
        <h4>Table Tag</h4>
        <table border={1} width="100%">
          <thead>
            <tr>
              <th>Quiz</th>
              <th>Topic</th>
              <th>Date</th>
              <th>Grade</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Q1</td>
              <td>HTML</td>
              <td>2/3/21</td>
              <td>85</td>
            </tr>
            <tr>
              <td>Q2</td>
              <td>CSS</td>
              <td>2/10/21</td>
              <td>90</td>
            </tr>
            <tr>
              <td>Q3</td>
              <td>JavaScript</td>
              <td>2/17/21</td>
              <td>95</td>
            </tr>
            <tr>
              <td>Q4</td>
              <td>Node</td>
              <td>2/21/21</td>
              <td>90</td>
            </tr>
            <tr>
              <td>Q5</td>
              <td>Bootstrap</td>
              <td>3/1/21</td>
              <td>95</td>
            </tr>
            <tr>
              <td>Q6</td>
              <td>React</td>
              <td>3/5/21</td>
              <td>90</td>
            </tr>
            <tr>
              <td>Q7</td>
              <td>TS</td>
              <td>3/10/21</td>
              <td>95</td>
            </tr>
            <tr>
              <td>Q8</td>
              <td>SQL</td>
              <td>3/15/21</td>
              <td>95</td>
            </tr>
            <tr>
              <td>Q9</td>
              <td>MongoDB</td>
              <td>3/19/21</td>
              <td>90</td>
            </tr>
            <tr>
              <td>Q10</td>
              <td>Deployment</td>
              <td>2/17/21</td>
              <td>95</td>
            </tr>

          </tbody>
          <tfoot>
            <tr>
              <td colSpan={3}>Average</td>
              <td>90</td>
            </tr>
          </tfoot>
        </table>
      </div>
    );
}