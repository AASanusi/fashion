import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import Container from "react-bootstrap/Container";
import { Route, Switch } from "react-router-dom";
import "./api/axiosDefaults";
import SignUpForm from "./pages/auth/SignUpForm";
import SignInForm from "./pages/auth/SignInForm";
import PostCreateForm from "./pages/posts/PostCreateForm";
import PostPage from "./pages/posts/PostPage";
import PostsPage from "./pages/posts/PostsPage";
import { useCurrentUser } from "./contexts/CurrentUserContext";
import PostEditForm from "./pages/posts/PostEditForm";
import CreateThoughtsForm from "./pages/thoughts/CreateThoughtsForm";
import ProfilePage from "./pages/profiles/ProfilePage";
import ThoughtWall from "./pages/thoughts/ThoughtWall";
import ThoughtsWall from "./pages/thoughts/ThoughtsWall";
import EditThoughtForm from "./pages/thoughts/EditThoughtForm";
import UsernameForm from "./pages/profiles/UsernameForm";
import UserPasswordForm from "./pages/profiles/UserPasswordForm";
import ProfileEditForm from "./pages/profiles/ProfileEditForm";


function App() {
  const currentUser = useCurrentUser();
  const profile_id = currentUser?.profile_id || "";

  return (
    
    <div className={styles.App}>
      <NavBar />
      <Container className={styles.Main}>
      <Switch>
          <Route 
            exact 
            path="/" 
            render={() => (
              <PostsPage message="No results found. Adjust the search keyword." />
              )}
          />
          <Route 
            exact 
            path="/saved" 
            render={() => (
              <PostsPage 
                message="No saved post. Save a post or search correct keyword!" 
                filter={`saves__owner__profile=${profile_id}&ordering=-saves__created_at&`}
                />
              )}
          />
          <Route exact path="/signin" render={() => <SignInForm />} />
          <Route exact path="/signup" render={() => <SignUpForm />} />
          <Route exact path="/posts/create" render={() => <PostCreateForm />} />
          <Route exact path="/posts/:id" render={() => <PostPage />} />
          <Route exact path="/posts/:id/edit" render={() => <PostEditForm />} />
          <Route exact path="/thoughts/create" render={() => <CreateThoughtsForm />} />
          <Route exact path="/thoughts/:id" render={() => <ThoughtWall />} />
          <Route exact path="/thoughts/:id/edit" render={() => <EditThoughtForm />} />

          <Route 
            exact 
            path="/thoughts" 
            render={() => (
              <ThoughtsWall message="No results found. Adjust the search keyword." />
              )}
          />
          <Route exact path="/profiles/:id" render={() => <ProfilePage />} />
          <Route
            exact
            path="/profiles/:id/edit/username"
            render={() => <UsernameForm />}
          />
          <Route
            exact
            path="/profiles/:id/edit/password"
            render={() => <UserPasswordForm />}
          />
          <Route
            exact
            path="/profiles/:id/edit"
            render={() => <ProfileEditForm />}
          />
          <Route render={() => <p>Page not found!</p>} />
        </Switch>
      </Container>
    </div>
      
  );
}

export default App;