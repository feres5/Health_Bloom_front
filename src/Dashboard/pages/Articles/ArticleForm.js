
import { useState } from "react";

import 'react-custom-alert/dist/index.css';
import { AlertContainer, alert } from 'react-custom-alert';
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import jwt_decode from "jwt-decode";
import { useEffect } from "react";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'


function ArticleForm() {

  var user = localStorage.getItem("user_info");
  var decodedTOKEN = jwt_decode(user, { payload: true });
  var id = decodedTOKEN.user_id;
  console.log(id)
  const [Author, setAuthor] = useState([])
  const [Title, setTitle] = useState()
  const [Description, setDescription] = useState()
  const [Image, setImage] = useState()
  const [Category, setCategory] = useState()

    console.log("title is" + Title)
    const url = process.env.REACT_APP_BackEnd_url+"/articles/Author/"

  const fetchAuthor = async () => {
    const urlId = url + id;

    const reponse = await fetch(urlId)
    const newAuthor = await reponse.json()
    setAuthor(newAuthor)
    console.log(newAuthor)
  }
  useEffect(() => {
    fetchAuthor()
  }, [])


    const onSubmit = () => {
        var newImage = Image.replace("C:\\fakepath\\", "");
        console.log(newImage)
        fetch(process.env.REACT_APP_BackEnd_url+`/articles/addArticle`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                title: Title, author: id,
                description: Description, image: newImage
            })
        }).then(
            (result) => {
                result.json().then((resp) => {
                    console.warn(resp)
                    console.log(resp.success)
                    const message = resp.message;

          alert({ message: 'This article has been added Successfully', type: 'success' })
        })
      }

    )
  }


  const [message, setMessage] = useState('');
  const commands = [
    {
      command: 'reset',
      callback: () => resetTranscript()
    },
    {
      command: 'shut up',
      callback: () => setMessage('I wasn\'t talking.')
    },
    {
      command: 'Hello',
      callback: () => setMessage('Hi there!')
    },
  ]
  const {
    transcript,
    interimTranscript,
    finalTranscript,
    resetTranscript,
    listening,
  } = useSpeechRecognition({ commands });


  useEffect(() => {
    if (finalTranscript !== '') {
      console.log('Got final result:', finalTranscript);
    }
  }, [interimTranscript, finalTranscript]);
  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return null;
  }

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    console.log('Your browser does not support speech recognition software! Try Chrome desktop, maybe?');
  }
  const listenContinuously = () => {
    SpeechRecognition.startListening({
      continuous: true,
      language: 'en-GB',
    });
  };
  return (
    <div style={{
      display: 'block',
      width: 700,
      padding: 30
    }}>
      <h4> Welcome Back Dr.{Author.FirstName} </h4>

      <br />
      <h5> Add a new article</h5>
      <br />
      <div>
        <AlertContainer floatingTime={100000} />
      </div>
      <br />
      <Form>
        <Form.Group>
          <Form.Label>Title:</Form.Label>
          <Form.Control type="text"
            name="title"
            value={Title}
            onChange={e => setTitle(e.target.value)}
            placeholder="Enter the title" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Category:</Form.Label>
          <Form.Select onChange={e => setCategory(e.target.value)} aria-label="Default select example">
  <option>Choose the category of this article</option>
  <option value="Cardiology">Cardiology</option>
  <option value="Allergy and immunology">Allergy and immunology</option>
  <option value="Dermatology">Dermatology</option>
  <option value="Emergency medicine">Emergency medicine</option>
  <option value="Ophthalmology">Ophthalmology</option>
  <option value="Obstetrics and gynecology">Obstetrics and gynecology</option>
</Form.Select>
</Form.Group>
<br/>
<br/>
        <Form.Group>
          <div>

            <Form.Label>Write you article:</Form.Label>

            <div>
              <span>
                Recording:
                {' '}
                {listening ? <span class="mr-1 badge badge-success"> On </span> : <span class="mr-1 badge badge-warning"> Off </span>}
              </span>
              <button class="btn btn-warning" type="button" onClick={resetTranscript}>Reset</button>
              <button class="btn btn-info" type="button" onClick={listenContinuously}>Listen</button>
              <button class="btn btn-danger" type="button" onClick={SpeechRecognition.stopListening}>Stop</button>
            </div>
          </div>

          <div className="form-group">
            <textarea
              name="description"
              value={transcript}
              onChange={e => setDescription(e.target.value)}
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="10"
              style={{height:"500px",}}
              placeholder="Write you article here.."
            />
          </div>

        </Form.Group>
        <Form.Group>
          <Form.Label>Image:</Form.Label>

          <div>
            <input type="file" value={Image} onChange={e => {
              setImage(e.target.value)
            }} />

          </div>
        </Form.Group>

        <Button variant="primary" type="submit" onClick={() => { onSubmit() }}>
          Click here to add this article
        </Button>
      </Form>

      <div>


      </div>
    </div>


  )
}
export default ArticleForm;
