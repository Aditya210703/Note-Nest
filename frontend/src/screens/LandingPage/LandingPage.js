import { Button, Container, Row } from "react-bootstrap";
import './Landing.css'
const LandingPage = () => {
  return <div className="main flex items-center min-h-[93vh] bg-center bg-cover">
    <Container>
        <Row>
            <div className="w-full  md:px-72 px-auto text-center">
                <div className="w-auto bg-white/30" style={{marginBottom:".8em"}}>
                    <h1 className="text-5xl">Welcome to Note Nest</h1>
                    <p className="text-xl">One safe place for all your notes.</p>
                </div>
                <div className="">
                    <a href="/login">
                    <Button size="lg" className="bg-black text-white">Login</Button>
                    </a>
                    <a href="/register">
                    <Button size="lg" className="bg-black text-white">Register</Button>
                    </a>
                </div>
            </div>
        </Row>
    </Container>
  </div>
}

export default LandingPage