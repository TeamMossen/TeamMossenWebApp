import React, {useEffect, useState} from 'react';

export default function ManagerProjectTableRow(props) {
  let title = props.proj.Projectname.title[0].plain_text;
  const backgroundColor =
    props.proj["Hours left"].formula.number < 0 ? "red" : "none";
  const timeWarning = { backgroundColor: backgroundColor };
  let modifyTitleWarning = props.proj["Hours left"].formula.number < 0;
  if (modifyTitleWarning) { title += " ❗️"; }
  
  return (
    <tr>
      <td id="projectTitle">{title}</td>
      <td>{props.proj.Status.select.name}</td>
      <td>{props.proj.Hours.number}</td>
      <td>{props.proj["Worked hours"].rollup.number}</td>
      <td style={timeWarning} id="hours-left">
        {props.proj["Hours left"].formula.number}
      </td>
      <td>
        {props.proj.Timespan.date.start} - {props.proj.Timespan.date.end}
      </td>
      {/* {document.getElementById("hours-left").innerHTML = hoursLeftTextWarning} */}
    </tr>
  );
}

