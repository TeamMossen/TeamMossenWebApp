import React, {useState} from 'react';

export default function ManagerProjectTableRow( props ) {
    const backgroundColor = props.proj['Hours left'].formula.number < 0 ? 'red' : 'none';
    const styler = { 'backgroundColor' : backgroundColor}
    console.log(styler)
    // if (props.proj['Hours left'].formula.number < 0) {
    //     console.log('hej')
    //     setBackgroundColor('red');
    // }
    return (
    <tr>
        <td>{props.proj.Projectname.title[0].plain_text}</td>
        <td>{props.proj.Status.select.name}</td>
        <td>{props.proj.Hours.number}</td>
        <td>{props.proj['Worked hours'].rollup.number}</td>
        <td style= {styler}>{props.proj['Hours left'].formula.number}</td>
        <td>{props.proj.Timespan.date.start} - {props.proj.Timespan.date.end}</td>
    </tr>
  );
}

