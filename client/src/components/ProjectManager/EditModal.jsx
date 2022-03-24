import { Modal, Button, Table, Form,  } from 'react-bootstrap';
import { React, useState } from 'react';
import { Navigate } from 'react-router-dom';
export default function EditModal({display, row}) {    

    let pageId = row.projMeta.id;
    const [show, setShow] = useState(display);
    const [hoursValue, setHoursValue] = useState(row.proj.Hours.number);
    const [dateStartValue, setDateStartValue] = useState(row.proj.Timespan.date.start);
    const [dateEndValue, setDateEndValue] = useState(row.proj.Timespan.date.end);
    const handleDateStartChange = (e) => {
      setDateStartValue(e.target.value);
    }
    const handleDateEndChange = (e) => {
      setDateEndValue(e.target.value);
    }
    const handleHoursChange = (e) => {
      setHoursValue(e.target.value);
    }
    const PostEdit = () => {
      fetch(`localhost:8000/projectmanager/editproject?page=${pageId}&hours=${hoursValue}&dateStart=${dateStartValue}&dateEnd=${dateEndValue}`, {
        method: 'POST',
      })
    }
    const ExitModal = () => setShow(false);
    console.log(row)
    console.log(hoursValue)
    return show ? (
      <>
        <Modal show={show} onHide={ExitModal} size="lg" centered style={{minWidth: '100%'}}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Project</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Table hover>
              <thead>
                <tr>
                  <th>Project Name</th>
                  <th>Hours</th>
                  <th>Timespan</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{row.proj.Projectname.title[0].plain_text}</td>
                  <td>{row.proj.Hours.number}</td>
                  <td>
                    {row.proj.Timespan.date.start} -{" "}
                    {row.proj.Timespan.date.end}
                  </td>
                </tr>
                </tbody>
            </Table>
            <Table borderless>
                <tr>
                    <td></td>
                    <td></td>
                    <td>Start Date<input className='form-control' type="date" value={dateStartValue} onChange={handleDateStartChange} id="datePickerStart" name="worked-hours"></input></td>
                </tr>
                <tr>
                    <td></td>
                    <td>Hours<Form.Control type="text" placeholder={row.proj.Hours.number} value={hoursValue} onChange={handleHoursChange}/></td>
                    <td>End Date<input className='form-control' type="date" value={dateEndValue} onChange={handleDateEndChange} id="datePickerEnd" name="worked-hours"></input></td>
                </tr>
              </Table>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={ExitModal}>
              Close
            </Button>
            <Button variant="primary" onClick={() => PostEdit}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    ) : (
      <Navigate to="/" />
    );
  }
