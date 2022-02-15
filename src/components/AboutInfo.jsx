import Jumbotron from 'react-bootstrap/Jumbotron';
import { Button } from "react-bootstrap"

const AboutInfo = () => {
    return (
        <Jumbotron className="ml-5" style={{ backgroundColor: "rgb(47, 47, 47)", marginTop: "80px" }}>
        <h1 className='mb-5'>About Me</h1>
        <p>
            I'm a Finnish frontend developer based in Munich, Germany. I'm passionate about clean and functional design.
        </p>
        <p>
        Highly motivated self-starter. Able to effectively self-manage during independent projects, as well as collaborate as part of a team.
        </p>
        <p>
            <Button className="my-4 px-4 badge-pill" variant="outline-primary" style={{ color: "rgb(212, 196, 233)", borderColor: "rgb(212, 196, 233)" }}>My Resume</Button>
        </p>
        </Jumbotron>
    )
}

export default AboutInfo