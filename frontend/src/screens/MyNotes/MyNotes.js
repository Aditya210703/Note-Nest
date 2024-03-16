import { Link } from "react-router-dom"
import MainScreen from "../../components/MainScreen"
import { Accordion, Badge, Button, Card, useAccordionButton, } from "react-bootstrap"
import notes, {} from '../../components/data/notes';
const MyNotes = () => {
  const deleteHandler = () =>{
    if (window.confirm("Are You Sure?")){
    }
  };
  const CustomToggle = ({ children, eventKey }) => {
    const decoratedOnClick = useAccordionButton(eventKey, () =>
      console.log('totally custom!'),
    );

    return (
      <button
        type="button"
        onClick={decoratedOnClick}
      >
        {children}
      </button>
    );
 };
  
  return (
    <div>
        <MainScreen title='Welcome Back ....'>
        <Link to={'/createnote'}><Button className="bg-black text-white mt-3" style={{marginLeft:10, marginBottom: 6}} size="lg">create a new note</Button>
        </Link>
        {notes.map(note =>(<Accordion defaultActiveKey={0}><Card className="mt-2">
          <Card.Header className="flex justify-between">
            <span className="text-black text-lg self-center flex-1 cursor-pointer"><CustomToggle eventKey={1} >{note.title}</CustomToggle></span>
            <diV>
              <Button href={`/note/${note._id}`} className="order-last bg-sky-700">Edit</Button>
              <Button onClick={ () => deleteHandler(note._id)} variant="danger" className="mx-2 bg-red-500">Delete</Button>
            </diV>
          </Card.Header>
          <Accordion.Collapse eventKey={1}>
            <Card.Body>
            <h4>
            <Badge bg="success">category - {note.category}</Badge>
            </h4>
            <blockquote className="blockquote mb-0">
              <p>{note.content}</p>
              <footer className="blockquote-footer">
                created on date
              </footer>
            </blockquote>
          </Card.Body></Accordion.Collapse>
        </Card></Accordion>))}
        </MainScreen>
    </div>

  )
}

export default MyNotes