import { EditProjects } from "../Database/project.mjs";

const EditProject = async (req, res, next) => {

    await EditProjects(req.query.page, req.query.hours, req.query.dateStart, req.query.dateEnd)
    res.writeHead(200);
    res.end();
  }
  
  export {
      EditProject
  }