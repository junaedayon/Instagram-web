import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
// import ImageUpload from "./components/ImageUploader/ImageUpload";
import Post from "./components/Post/Post";
import ModalUI from "./components/UI/ModalUI";
import { db } from "./firebase";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").orderBy('timestamp' , 'desc').onSnapshot((snapshot) => {
      setPosts(snapshot.docs.map((doc) =>({id:doc.id, post: doc.data()})));
    });
  }, []);

  return (
    <div className="app">
      <Header></Header>
      {/* <ImageUpload></ImageUpload> */}

      <h1>Hello World</h1>
      {/*  */}
      {posts.map(({post , id}) => (
        <Post
          key={id}
          userName={post.userName}
          caption={post.caption}
          imageUrl={post.imageUrl}
        />
      ))}

<ModalUI></ModalUI>


    </div>
  );
}

export default App;
