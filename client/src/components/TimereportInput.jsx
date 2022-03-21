import React from 'react'
import { Dropdown, DropdownButton} from 'react-bootstrap'


export default function TimereportInput (props) {
      
    const projects = props.props;
    let title = "default";
   
    
    function myFunction(projectTitle){
        title = projectTitle;
        document.getElementById('dropdown-button').innerHTML = projectTitle;
    }

        console.log(title);
    return (
    

       
        
        <div className='container container-input'>
            <h2 className='h2-time-input'>Set project, time and date</h2>
            <div className='row my-row'>
                <div className='col my-col'>
                  
                    <DropdownButton title="Choose project" variant="secondary" id="dropdown-button" >
                        {projects.map((project, key) => (
                            <Dropdown.Item as="button" onClick={() => myFunction(project.Projectname.title[0].plain_text)} key={key}>{project.Projectname.title[0].plain_text}</Dropdown.Item>
                            
                        ))}
                    </DropdownButton>
                  


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
                <div className='input-group'>
                        <span className="input-group-text" id="basic-addon1">Aa</span>
                        <input className='form-control' type="text" placeholder='Note' id="text-hours" name="worked-hours"></input>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col'></div>
                <div className='col send-button'>
                    <button type="button" className='btn btn-secondary btn-lg mybtn' variant="primary">Send report</button>
                </div>
                <div className='col'></div>
            </div>
            

            
            
        </div>
        

        
      
    )
    }

