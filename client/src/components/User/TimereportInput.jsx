import {React} from 'react'
import { Dropdown, DropdownButton} from 'react-bootstrap'

export default function TimereportInput ({projects, user, fetchProjects}) {
    
    let projectId = "default";
    let hours = "00";
    let date = "0000-00-00";
    let note = "something";
    let title ="";


    function handleDropdown(id,projectTitle){
        projectId = id;
        title = projectTitle;
        document.getElementById('dropdown-button').innerHTML = projectTitle;
    }
 
    
    function postTimeReport() {
        
        let inputCheck = true;
        hours = document.getElementById("hours").value;
        date = document.getElementById("date").value;
        note = document.getElementById("note").value;
        
        if (Boolean(hours) === false || Boolean(date) === false || Boolean(note) === false || Boolean(title) === false) {
            alert(("ERROR! You must enter a value in every field.."));
            return;
        }
            fetch(
                `http://localhost:8000/user/postTimeReport?date=${date}&id=${user.pageId}&hours=${hours}&project=${projectId}&note=${note}`,
                {
                    method: "POST",
                })
                .then(res => {
                    console.log(res);
                    console.log(user.pageId);


                    fetchProjects(true)
                }
                );
    }
    return (
        
        <>
        
        <div className='container container-input'>
            <h2 className='h2-time-input'>Set project, time and date</h2>
            <div className='row my-row'>
                <div className='col my-col'>
                  
                    <DropdownButton title="Choose project" variant="light" id="dropdown-button" >
                        {projects.map((project, key) => (
                            <Dropdown.Item as="button" onClick={() => handleDropdown(project.id, project.properties.Projectname.title[0].plain_text)} key={key}>{project.properties.Projectname.title[0].plain_text}</Dropdown.Item>
                            
                        ))}
                    </DropdownButton>
                  


                </div>
                <div className='col-sm-3 my-col'>
                    <div className='input-group'>
                        <span className="input-group-text" id="basic-addon1">00</span>
                        <input className='form-control' type="number" placeholder='Worked hours' id="hours" name="worked-hours"></input>
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
                    <button type="button" className='btn btn-light btn-lg mybtn' onClick={postTimeReport}>Send report</button>
                </div>
                <div className='col'></div>
            </div>
            

            
            
        </div>
        </>
        

        
      
    )
    }

