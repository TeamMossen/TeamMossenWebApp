import React, { Component } from 'react'
import { Dropdown} from 'react-bootstrap'


export default class TimereportInput extends Component {
      
    constructor(props) {
        super(props);
        this.state = {
          projects: props.props
        }
        console.log(this.state.projects)
      }
    render() {
    return (
    
        <div className='container container-input'>
            <h2 className='h2-time-input'>Set project, time and date</h2>
            <div className='row my-row'>
                <div className='col my-col'>
                    <Dropdown>
                        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                            Choose project
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                        
                            {this.state.projects.map((project, key) => (
                                
                                <Dropdown.Item>{project.Projectname.title[0].plain_text}</Dropdown.Item>)
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                <div className='col-sm-3 my-col'>
                    <div className='input-group'>
                        <span className="input-group-text" id="basic-addon1">00</span>
                        <input className='form-control' type="text" placeholder='Worked hours' id="text-hours" name="worked-hours"></input>
                    </div>
                </div>
                <div className='col-sm-3 my-col'>
                    <div className='input-group'>
                        <span className="input-group-text" id="basic-addon1">date</span>
                        <input className='form-control' type="date" placeholder='Worked hours' id="text-hours" name="worked-hours"></input>
                    </div>
                </div>
                <div className='col my-col'>
                    <button type="button" className='btn btn-secondary btn-lg mybtn' variant="primary">Send report</button>
                </div>
            </div>
            <div className='row row-smaller'></div>
            
        </div>
        

        
      
    )
    }
}
