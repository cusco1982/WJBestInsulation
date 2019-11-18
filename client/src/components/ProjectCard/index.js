import React from "react";


function ProjectCard(props) {
    return (
        <div className="col-sm-4">
            <div className="animated fadeInUp delay-1s" style={{cursor:"pointer"}} style={{heigh:"200px"}}>
                <img src={props.image} className="card-img-top" alt="New Property" />
                
                {/* <button type="button" className="btn btn-primary btn-lg btn-block" onClick={() => props.open(props.id)}>Request Info</button> */}
            </div>
        </div>
    );
}

export default ProjectCard;