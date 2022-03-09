import React from 'react'

export default function ProjectTableRow({ props }) {
  return (
    <tr>
        {console.log(props)}
        <td>{props.proj.Projectname.title[0].plain_text}</td>
        <td>{props.proj.Status.select.name}</td>
        <td>{props.proj.Hours.number}</td>
        <td>{props.proj.workedhours}</td>
        <td>{props.proj.$`Worked hours`.rollup.number}</td>
        <td>{props.proj.$`Worked hours`.rollup.number}</td>
    </tr>
  );
}

