import { Button, Modal } from "react-bootstrap"
import React from "react";
import { useState } from "react";

const ResumeButton = () => {
        const [resumeShow, setResumeShow] = useState(false);
      
        return (
          <>
            <Button onClick={() => setResumeShow(true)} className="my-4 px-4 badge-pill" variant="outline-primary" style={{ color: "rgb(212, 196, 233)", borderColor: "rgb(212, 196, 233)" }}>My Resume</Button>
            <Modal
              size="lg"
              show={resumeShow}
              onHide={() => setResumeShow(false)}
              aria-labelledby="example-modal-sizes-title-lg"
            >
              <Modal.Body><button onClick={() => setResumeShow(false)} type="button" className="close" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button><img className="resumePic" src="/cvpicture.png"/></Modal.Body>
            </Modal>
          </>
        );
        }

export default ResumeButton;