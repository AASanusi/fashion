import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import appStyles from "../../App.module.css";
import styles from "../../styles/CreateThoughtsForm.module.css";
import btnStyles from "../../styles/Button.module.css";
import { axiosReq } from "../../api/axiosDefaults";
import { useHistory } from "react-router";
import Alert from "react-bootstrap/Alert";

/* Inputs field for users to share their thoughts */

function CreateThoughtsForm() {
    const [errors, setErrors] = useState({});

    const [postData, setPostData] = useState({
        location: "",
        mood: "",
        content: "",
    });

    const {
        location,
        mood,
        content
    } = postData;


    const history = useHistory();


    const handleChange = (event) => {
        setPostData({
            ...postData,
            [event.target.name]: event.target.value,
        });
    };

    /* Post data to API */
    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();

        formData.append("location", location);
        formData.append("mood", mood);
        formData.append("content", content);

        try {
            const { data } = await axiosReq.post("/thoughts/", formData);
            history.push(`/thoughts/${data.id}`);
        } catch (err) {
            console.log(err);
            if (err.response?.status !== 401) {
                setErrors(err.response?.data);
            }
        }
    };

    return (
        <Row>
            <Col className="py-2 p-0 p-md-2" md={7} lg={8}>
                <Container
                    className={`${appStyles.Content} ${styles.Container} d-flex flex-column justify-content-center`}
                >   <br />
                    <h2>
                        Give us your 2 cents
                    </h2>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group>
                            <Form.Label>Location</Form.Label>
                            <Form.Control
                                type="text"
                                name="location"
                                value={location}
                                onChange={handleChange}
                                aria-label="Location"
                            />
                        </Form.Group>
                        {errors?.location?.map((message, idx) => (
                            <Alert variant="warning" key={idx}>
                                {message}
                            </Alert>
                        ))}
                        <Form.Group>
                            <Form.Label>Content</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={6}
                                name="content"
                                value={content}
                                onChange={handleChange}
                                aria-label="Content"
                            />
                        </Form.Group>
                        {errors?.content?.map((message, idx) => (
                            <Alert variant="warning" key={idx}>
                                {message}
                            </Alert>
                        ))}
                        <Form.Group as={Col}>
                            <Form.Label>Mood</Form.Label>
                            <Form.Control
                                as="select"
                                defaultValue="Normal"
                                name="mood"
                                onChange={handleChange}
                                aria-label="Mood"
                            >
                                <option value="normal">Normal</option>
                                <option value="sad">Sad</option>
                                <option value="happy">Happy</option>
                                <option value="anxious">Anxious</option>
                                <option value="romantic">Romantic</option>
                                <option value="hopeful">Hopeful</option>
                                <option value="angry">Angry</option>
                                <option value="lonely">Lonely</option>
                                <option value="cheerful">Cheerful</option>
                                <option value="excited">Excited</option>
                            </Form.Control>
                        </Form.Group>
                        {errors?.mood?.map((message, idx) => (
                            <Alert variant="warning" key={idx}>
                                {message}
                            </Alert>
                        ))}
                        
                        <Row className={styles.ButtonsForm}>
                            <Button
                                className={`${btnStyles.Button} ${btnStyles.Blue}`}
                                onClick={() => history.goBack()}
                            >
                                Abort
                            </Button>
                            <Button 
                                className={`${btnStyles.Button} ${btnStyles.Blue}`} 
                                type="submit"
                            >
                                Share
                            </Button>
                        </Row>
                    </Form>
                </Container>
            </Col>
        </Row>

    );
}

export default CreateThoughtsForm;