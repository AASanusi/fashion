import React from "react";
import { Navbar, Container, Nav, OverlayTrigger, Tooltip,} from "react-bootstrap";
import logo from "../assets/logo.png";
import styles from "../styles/NavBar.module.css";
import { NavLink } from "react-router-dom";
import {
  useCurrentUser,
  useSetCurrentUser,
} from "../contexts/CurrentUserContext";
import Avatar from "./Avatar";
import axios from "axios";
import useClickOutsideToggle from "../hooks/useClickOutsideToggle";


const NavBar = () => {
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();

  const { expanded, setExpanded, ref } = useClickOutsideToggle();

  const handleSignOut = async () => {
    try {
      await axios.post("dj-rest-auth/logout/");
      setCurrentUser(null);
    } catch (err) {
      console.log(err);
    }
  };


  

  const loggedInIcons = (
    <>
      <NavLink
        className={styles.NavLink}
        activeClassName={styles.Active}
        to="/posts/create"
      >
        <OverlayTrigger
          placement="bottom"
          overlay={<Tooltip>Add a Post</Tooltip>}
        >
          <i className="far fa-plus-square"></i>
        </OverlayTrigger>
      </NavLink>

      <NavLink
        className={styles.NavLink}
        activeClassName={styles.Active}
        to="/thoughts/create"
      >
        <OverlayTrigger
          placement="bottom"
          overlay={<Tooltip>Share your thoughts</Tooltip>}
        >
           <i className="fa-sharp fa-regular fa-pen-to-square"></i>
        </OverlayTrigger>
      </NavLink>

      <NavLink
        className={styles.NavLink}
        activeClassName={styles.Active}
        to="/thoughts"
      >
        <OverlayTrigger
          placement="bottom"
          overlay={<Tooltip>Thoughts</Tooltip>}
        >
          <i className="fa-regular fa-comment"></i>         
        </OverlayTrigger>
      </NavLink>

      <NavLink
        className={styles.NavLink}
        activeClassName={styles.Active}
        to="/saved"
      >
        <OverlayTrigger
          placement="bottom"
          overlay={<Tooltip>Saved posts</Tooltip>}
        >
          <i className="fa-solid fa-bookmark"></i>
        </OverlayTrigger>
      </NavLink>

      <NavLink 
        className={styles.NavLink} 
        to="/" 
        onClick={handleSignOut}
      >
        <OverlayTrigger
          placement="bottom"
          overlay={<Tooltip>Sign out</Tooltip>}
        >
          <i className="fas fa-sign-out-alt"></i>          
        </OverlayTrigger>
      </NavLink>

      <NavLink
        className={styles.NavLink}
        to={`/profiles/${currentUser?.profile_id}`}
      >
       <Avatar 
        src={currentUser?.profile_image} 
        text={currentUser?.username} 
        height={40} />
      </NavLink>
    </>
  );

  const loggedOutIcons = (
    <>
      <NavLink
        className={styles.NavLink}
        activeClassName={styles.Active}
        to="/signin"
      >
        <OverlayTrigger
          placement="bottom"
          overlay={<Tooltip>Sign in</Tooltip>}
        >
          <i className="fas fa-sign-in-alt"></i>         
        </OverlayTrigger> 
      </NavLink>

      <NavLink
        to="/signup"
        className={styles.NavLink}
        activeClassName={styles.Active}
      >
        <OverlayTrigger
          placement="bottom"
          overlay={<Tooltip>Sign up</Tooltip>}
        >
          <i className="fas fa-user-plus"></i>          
        </OverlayTrigger>
      </NavLink>
    </>
  );

  return (
    <Navbar 
    expanded={expanded} 
    className={styles.NavBar} 
    expand="md" fixed="top"
    >
      <Container>
      <NavLink to="/">
          <Navbar.Brand>
            <img src={logo} alt="logo" height="45" />
          </Navbar.Brand>
        </NavLink>

        <Navbar.Toggle 
          ref={ref}
          onClick={() => setExpanded(!expanded)}
          aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto text-left">
            <NavLink
              exact
              className={styles.NavLink}
              activeClassName={styles.Active}
              to="/"
            >
              <OverlayTrigger
                placement="bottom"
                overlay={<Tooltip>Home</Tooltip>}
              >
                <i className="fa-solid fa-house-chimney"></i>        
        </OverlayTrigger>
            </NavLink>
            {currentUser ? loggedInIcons : loggedOutIcons}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;