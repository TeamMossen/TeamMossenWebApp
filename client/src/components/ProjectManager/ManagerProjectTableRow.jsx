import React, {useEffect, useState} from 'react';
import editImg from '../../static/images/editImg.svg';
import EditModal from './EditModal';

export default function ManagerProjectTableRow(props) {
  console.log(props);
  const [showModal, setShowModal] = useState(false);
  const ShowModal = () => {
    setShowModal(true);
  }
  let hoursLeft = props.proj["Hours left"].formula.number;
  let timespan = `${props.proj.Timespan.date.start} - ${props.proj.Timespan.date.end}`
  let reportsOutsideTimespan = props.proj.ReportTimes.rollup.array;
  hoursLeft += hoursLeft < 0 ? " ❗️" : "";
  let modifyTitleWarning = props.proj["Hours left"].formula.number < 0;

  reportsOutsideTimespan.every((report) => {
    if (report.formula.string == "Fail") {
      timespan += " ❗️";
      return;
    }
  });

  return (
    <tr>
      <td>{props.proj.Projectname.title[0].plain_text}</td>
      <td>{props.proj.Status.select.name}</td>
      <td>{props.proj.Hours.number}</td>
      <td>{props.proj["Worked hours"].rollup.number}</td>
      <td>{hoursLeft}</td>
      <td>{timespan}</td>
      <td>
        <a onClick={setShowModal}>
          <img src={editImg}></img>
        </a>      
      </td>
      { showModal ? <EditModal display="true" row={props}/> : null}
    </tr>
  );
}

