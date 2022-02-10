import { Button } from "react-bootstrap"
import Jumbotron from 'react-bootstrap/Jumbotron';

const Intro = () => {
    return ( 
        <Jumbotron style={{ backgroundColor: "rgb(47, 47, 47)", color: "rgb(232, 225, 239)", marginTop: "80px"}}>
        <h4>Hi there, my name is</h4>
        <h1 className="my-3">Sara Sjöman</h1>
        <p>Frontend developer who is passionate about clean and functional design.</p>
        <p>
            <Button className="mt-4" variant="outline-primary" style={{ color: "rgb(232, 225, 239)", borderColor: "rgb(232, 225, 239)" }}>Learn more about me</Button>
        </p>
        </Jumbotron>
    )
}

export default Intro