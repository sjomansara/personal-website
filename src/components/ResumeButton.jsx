import { Button, Modal } from "react-bootstrap"
import React from "react";
import { useState } from "react";

const ResumeButton = () => {
        const [resumeShow, setResumeShow] = useState(false);
      
        return (
          <>
            <Button onClick={() => setResumeShow(true)} className="my-4 px-4 rounded-pill" variant="outline-primary" style={{ color: "rgb(212, 196, 233)", borderColor: "rgb(212, 196, 233)" }}>My resume</Button>
            <Modal
              size="lg"
              show={resumeShow}
              onHide={() => setResumeShow(false)}
              aria-labelledby="example-modal-sizes-title-lg"
            >
              <Modal.Header closeButton></Modal.Header>
              <Modal.Body><img className="resumePic" src="/cvpicture.png"/></Modal.Body>
              <div className="downloadButton"><Button className="my-4 mx-4 githubLink rounded-pill" href="resume_sarasjoman.pdf" download="resume_sarasjoman.pdf">Download PDF</Button></div>
            </Modal>
          </>
        );
        }

export default ResumeButton;