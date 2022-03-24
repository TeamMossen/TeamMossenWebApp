import React from 'react'

export default function BossTableRow( {user} ) {
  return (
    <tr>
        <td><div className='title-day-report'>{user.name}</div></td>
        <td><div className='title-day-report'>{user.hours}</div></td>
    </tr>
  );
}