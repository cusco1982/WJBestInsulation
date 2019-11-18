import React from "react";


function ProjectCard(props) {
    return (
        <div className="col-sm-4">
            <div className="animated fadeInUp delay-1s" style={{cursor:"pointer"}}>
                <img style={{height:"600px"}} src={props.image} className="card-img-top" alt="WJ Best Insulation" />

                {/* <div className="card-body">
                    <h3 className="tool-tip inner">{props.address}</h3>
                    <h3 className="card-text">{props.city}</h3><br />
                    <div className="d-flex justify-content-center">
                        <h4 className="card-text">{props.price} {props.other}</h4>
                    </div>
                </div> */}

                {/* <button type="button" className="btn btn-primary btn-lg btn-block" onClick={() => props.open(props.id)}>Request Info</button> */}
            </div>
        </div>
    );
}

export default ProjectCard;