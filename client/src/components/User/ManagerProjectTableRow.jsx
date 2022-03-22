import React, {useEffect, useState} from 'react';

export default function ManagerProjectTableRow(props) {
  console.log(props);
  let title = props.proj.Projectname.title[0].plain_text;
  let reportsOutsideTimespan = props.proj.ReportTimes.rollup.array;
  const backgroundColor =
    props.proj["Hours left"].formula.number < 0 ? "red" : "none";
  const timeWarning = { backgroundColor: backgroundColor };
  let outsideSpanWarning = { backgroundColor: "none" };
  let modifyTitleWarning = props.proj["Hours left"].formula.number < 0;

  reportsOutsideTimespan.every((report) => {
    if (report.formula.string == "Fail") {
      title += " ❗️";
      outsideSpanWarning.backgroundColor = "red";
      return;
    }
  });

  return (
    <tr>
      <td id="projectTitle">{title}</td>
      <td>{props.proj.Status.select.name}</td>
      <td>{props.proj.Hours.number}</td>
      <td>{props.proj["Worked hours"].rollup.number}</td>
      <td style={timeWarning} id="hours-left">
        {props.proj["Hours left"].formula.number}
      </td>
      <td style={outsideSpanWarning}>
        {props.proj.Timespan.date.start} - {props.proj.Timespan.date.end}
      </td>
      {/* {document.getElementById("hours-left").innerHTML = hoursLeftTextWarning} */}
    </tr>
  );
}

