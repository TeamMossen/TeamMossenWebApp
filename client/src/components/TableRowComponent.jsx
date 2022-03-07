import React from 'react'

export default function TableRowComponent({ props }) {
  return (
    <tr>
        <td>{props.project-name}</td>
        <td>{props.status}</td>
        <td>{props.hours}</td>
        <td>{props.worked-hours}</td>
        <td>{props.timespan}</td>
    </tr>
  );
}

