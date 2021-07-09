import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Post from "./components/Post/Post";
import ModalUI from "./components/UI/ModalUI";
import { db } from "./firebase";
import { auth } from "./firebase";
import InstagramEmbed from 'react-instagram-embed';


var cors = require('cors')

 
 



function App() {
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        console.log(authUser);
        setUser(authUser);

        // if (authUser.displayName) {
        // } else {
        //   return authUser.updateProfile({
        //     displayName: userName,
        //   });
        // }
      } else {
        setUser(null);
      }
    });
  }, [user]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setPosts(
          snapshot.docs.map((doc) => ({ 
            
            id: doc.id, 
            post: doc.data()
           }))
        );
      });
  }, []);

  return (
    <div className="app">
      <Header user={user}></Header>

      {/* <h1>Hello World</h1> */}
      {/*  */}
      {posts.map(({ post, id }) => (
        <Post
          key={id}
          // postId={id}
          postId={id}
          userName={post.userName}
          caption={post.caption}
          imageUrl={post.imageUrl}
          
        />
      ))}

      <div className="right">

<InstagramEmbed
  url='https://www.instagram.com/p/B2J89ECj-Bd/?utm_source=ig_web_copy_link'
  maxWidth={320}
  hideCaption={false}
  containerTagName='div'
  protocol=''
  injectScript
  onLoading={() => {}}
  onSuccess={() => {}}
  onAfterRender={() => {}}
  onFailure={() => {}}
/>
</div>



      <ModalUI user={user}></ModalUI>
    </div>
  );
}

export default App;
