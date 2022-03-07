import React from 'react'

export default function TableRowComponent({ props }) {
  return (
    <tr>
        <td>{props.projectname}</td>
        <td>{props.status}</td>
        <td>{props.hours}</td>
        <td>{props.workedhours}</td>
        <td>{props.timespan}</td>
    </tr>
  );
}

