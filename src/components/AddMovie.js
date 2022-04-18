import React,{useState} from 'react'
import { Button, Modal, InputGroup, FormControl } from "react-bootstrap";
const AddMovie = (props) => {
    const [newFilm, setNewFilm] = useState({
        id: Math.random(),
        title: "",
        description: "",
        posterURL: "",
        category:"",
        rating: 0,
      });
      const addNewFilm = (e) =>
      setNewFilm({...newFilm,[e.target.name]:e.target.value});
const [ShowForm,setShowForm]=useState(false);
const handleShow= () => setShowForm(true);
const handleAdd = () => {
     setShowForm(false)
     if( newFilm.title === "" ||
     newFilm.description === "" ||
     newFilm.posterURL === "" ||
     newFilm.category === "" ||
     newFilm.rating === ""
   )
   return;
    props.addFilm(newFilm);
  };
  const handleClose = () => setShowForm(false);

  return (
    <div>
     <Button className='btn-add'
        variant="primary"
        onClick={handleShow}
      title='ADD MOVIE'>
        +
      </Button>
       <Modal id="adds" show={ShowForm} onHide={handleClose} centered>
        <Modal.Header>
          <Modal.Title>Movie Details</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div className="newSerie">
            <InputGroup className="mb-3">
              <FormControl placeholder="Movie title"name="title" onChange={addNewFilm}/>
            </InputGroup>

            <InputGroup className="mb-3">
              <FormControl placeholder="Movie description..." name="description" onChange={addNewFilm}/>
            </InputGroup>

            <InputGroup className="mb-3">
              <FormControl placeholder="Poster URL... " name="posterURL" onChange={addNewFilm} />
            </InputGroup>

            <InputGroup className="mb-3">
              <FormControl placeholder="Category..." name="category" onChange={addNewFilm} />
            </InputGroup>

            <InputGroup className="mb-3">
              <FormControl placeholder="Movie Rating..." name="Rating" onChange={addNewFilm} />
            </InputGroup>
        
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            CLOSE
          </Button>
          <Button variant="secondary" onClick={handleAdd}>
            ADD
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default AddMovie