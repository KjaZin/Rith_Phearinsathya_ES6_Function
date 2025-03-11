import React from "react";
function Scores({courseName,courseResults}) {
  const scores = courseResults.map(student =>student.score);
  const total = scores.reduce((acc,score)=>acc+score,0);
  const average = (total/scores.length).toFixed(2);
  const minscore = Math.min(...scores);
  const maxscore = Math.max(...scores);

  return(
    <div className="scores">
          <h1>{courseName}</h1>

          <table>
            <thead>
              <tr>
                <th>First name</th>
                <th>Last name</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
              {courseResults.map((student,index)=>(
              <tr key={index}>
                <td>{student.firstName}</td>
                <td>{student.lastName} </td>
                <td className={student.score < 50 ? "warning": ""}>{student.score}</td>
              </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <th>Average</th>
                <th>Min</th>
                <th>Max</th>
              </tr>
              <tr>
                <td>{average}</td>
                <td>{minscore}</td>
                <td>{maxscore}</td>
              </tr>
              </tfoot>
          </table>
        </div>

  );
}
export default Scores;
