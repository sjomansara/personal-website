import Jumbotron from 'react-bootstrap/Jumbotron';
import ResumeButton from './ResumeButton';

const AboutInfo = () => {
    return (
        <Jumbotron className="ml-5" style={{ backgroundColor: "rgb(47, 47, 47)", marginTop: "80px" }}>
        <h1 className='mb-5'>About Me</h1>
        <p style={{color: "#DFDFE2"}}>
            I'm a Finnish frontend developer based in Munich, Germany. I'm passionate about clean and functional design and have a great eye for detail.
        </p>
        <p style={{color: "#DFDFE2"}}>
        Highly motivated self-starter. Able to effectively self-manage during independent projects, as well as collaborate as part of a team.
        </p>
        <p>
            <ResumeButton />
        </p>
        </Jumbotron>
    )
}

export default AboutInfo