import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";



import { useParams } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import Thought from "./Thought";
import PopularProfiles from "../profiles/PopularProfiles";

function ThoughtWall() {
  const { id } = useParams();
  const [thought, setThought] = useState({ results: [] });

  useEffect(() => {
    const handleMount = async () => {
      try {
        const [{ data: thought }] = await Promise.all([
          axiosReq.get(`/thoughts/${id}`),
        ]);
        setThought({ results: [thought] });
      } catch (err) {
        // console.log(err);
      }
    };

    handleMount();
  }, [id]);

  return (
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        <PopularProfiles mobile />
        <Thought {...thought.results[0]} setThoughts={setThought} thoughtWall={true}/>
      </Col>
      <Col lg={4} className="d-none d-lg-block p-0 p-lg-2">
        <PopularProfiles />
      </Col>
    </Row>
  );
}

export default ThoughtWall;