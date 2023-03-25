import React from "react";
import styles from "../../styles/Post.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import Card from "react-bootstrap/Card";
import Media from "react-bootstrap/Media";
import { Link, useHistory } from "react-router-dom";
import Avatar from "../../components/Avatar";
import { MoreDropdown } from "../../components/MoreDropdown";
import { axiosRes } from "../../api/axiosDefaults";

const Thought = (props) => {
  const {
    id,
    owner,
    profile_id,
    profile_image,
    current_location,
    content,
    mood_selector,
    updated_at,
    thoughtWall,
  } = props;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;
  const history = useHistory();

  const handleEdit = () => {
    history.push(`/thoughts/${id}/edit`);
  };

  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/thoughts/${id}/`);
      history.goBack();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Card className={styles.Post}>
      <Card.Body>
        <Media className="align-items-center justify-content-between">
          <Link to={`/profiles/${profile_id}`}>
            <Avatar src={profile_image} height={55} />
            {owner}
          </Link>
          <div className="d-flex align-items-center">
            <span>{updated_at}</span>
            {is_owner && thoughtWall && 
            <MoreDropdown
              handleEdit={handleEdit}
              handleDelete={handleDelete}
            />}
          </div>
        </Media>
      
        {current_location && <Card.Title className="text-center">{current_location}</Card.Title>}
        {content && <Card.Text>{content}</Card.Text>}
        {mood_selector && <Card.Text>{mood_selector}</Card.Text>}
      </Card.Body>
    </Card>
  );
};

export default Thought;