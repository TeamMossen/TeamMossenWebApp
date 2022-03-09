import React from 'react'

export default function ProjectTableRow( props ) {
  return (
    <tr>
        <td>{props.proj.Projectname.title[0].plain_text}</td>
        <td>{props.proj.Status.select.name}</td>
        <td>{props.proj.Hours.number}</td>
        <td>{props.proj['Worked hours'].rollup.number}</td>
        <td>{props.proj.Timespan.date.start} - {props.proj.Timespan.date.end}</td>
    </tr>
  );
}

