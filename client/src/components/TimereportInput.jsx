import React, { Component } from 'react'
import '../App.css';
import {Button} from 'react-bootstrap'

export default class TimereportInput extends Component {
  render() {
    return (
      <div className='box'>
          <div className='container container-input'>
          <h2 className='h2-time-input'>Set project, time and date</h2>
          <div className='row my-row'>
            <div className='col my-col'>
              <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  Choose project
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </div>
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
      </div>
    )
  }
}
