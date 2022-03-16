import React, { Component } from 'react'
import { Dropdown} from 'react-bootstrap'


export default class TimereportInput extends Component {
  render() {
    return (
      
        
            <div className='container container-input'>
                <h2 className='h2-time-input'>Set project, time and date</h2>
                <div className='row my-row'>
                    <div className='col my-col'>
                        <Dropdown>
                            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                                Dropdown Button
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Project 1</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Project 2</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Project 3</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    <div className='col my-col'>
                        <div className='input-group'>
                            <span className="input-group-text" id="basic-addon1">00</span>
                            <input className='form-control' type="text" placeholder='Worked hours' id="text-hours" name="worked-hours"></input>
                        </div>
                    </div>
                    <div className='col my-col'>
                        <div className='input-group'>
                            <span className="input-group-text" id="basic-addon1">date</span>
                            <input className='form-control' type="date" placeholder='Worked hours' id="text-hours" name="worked-hours"></input>
                        </div>
                    </div>
                    <div className='col my-col'>
                        <button type="button" className='btn btn-secondary btn-lg mybtn' variant="primary">Send report</button>
                    </div>
                </div>
            </div>
        

        
      
    )
    }
}
