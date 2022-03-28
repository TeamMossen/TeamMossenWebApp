import React from 'react'

export default function ProjectTableRow( props ) {
  return (
    <tr>
        <td><div className='title-day-report'>{props.proj.Projectname.title[0].plain_text}</div></td>
        <td><div className='title-day-report'>{props.proj.Status.select.name}</div></td>
        <td><div className='title-day-report'>{props.proj.Hours.number}</div></td>
        <td><div className='title-day-report'>{props.proj['Worked hours'].rollup.number}</div></td>
        <td><div className='title-day-report'>{props.proj.Timespan.date.start} - {props.proj.Timespan.date.end}</div></td>
    </tr>
  );
}

