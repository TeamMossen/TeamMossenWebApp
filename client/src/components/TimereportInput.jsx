import React from 'react'
import { Dropdown, DropdownButton} from 'react-bootstrap'


export default function TimereportInput ({projects, user}) {
      
    
    let title = "default";
    let hours = "00";
    let date = "0000-00-00";
    let note = "something";
    
   console.log(projects);
    
    function myFunction(projectTitle){
        title = projectTitle;
        document.getElementById('dropdown-button').innerHTML = projectTitle;
    }
    
    function postTimeReport(){
        hours = document.getElementById('hours').value; 
        date = document.getElementById('date').value; 
        note = document.getElementById('note').value; 
       console.log(user);
       fetch(`http://localhost:8000/postTimeReport?date=${date}&id=99f9c07d-88f0-4b39-abf5-6ba8e3e6765c&hours=7&project=cf56730d-ad3b-4c22-9772-fec55ee95e77&note=ZZZ`, {
        
        method: 'POST'

    })
    }
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
                        <input className='form-control' type="text" placeholder='Worked hours' id="hours" name="worked-hours"></input>
                    </div>
                </div>
                <div className='col-sm-3 my-col'>
                    <div className='input-group'>
                        <span className="input-group-text" id="basic-addon1">date</span>
                        <input className='form-control' type="date" placeholder='Worked hours' id="date" name="worked-hours"></input>
                    </div>
                </div>
                <div className='col my-col'>
                <div className='input-group'>
                        <span className="input-group-text" id="basic-addon1">Aa</span>
                        <input className='form-control' type="text" placeholder='Note' id="note" name="worked-hours"></input>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col'></div>
                <div className='col send-button'>
                    <button type="button" className='btn btn-secondary btn-lg mybtn' variant="primary" onClick={postTimeReport}>Send report</button>
                </div>
                <div className='col'></div>
            </div>
            

            
            
        </div>
        

        
      
    )
    }

