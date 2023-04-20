import React from "react";
import "../style/ResultTable.css";

const ResultTable = () => {
  return (
    <>
      <table class="table table-success table-striped table-hover table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Attempts</th>
            <th scope="col">Earn Points</th>
            <th scope="col">Result</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default ResultTable;
