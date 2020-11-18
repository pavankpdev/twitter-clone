import React, { useState, useEffect } from "react";
import TweetBox from "./TweetBox";
import Post from "./Post";
import "./Feed.css";
import FlipMove from "react-flip-move";

function Feed() {
  const [posts, setPosts] = useState([]);

  // useEffect(() => {
  //   db.collection("posts").onSnapshot((snapshot) =>
  //     setPosts(snapshot.docs.map((doc) => doc.data()))
  //   );
  // }, []);

  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>

      <TweetBox />

      <FlipMove>
        {/* {posts.map((post) => (
          <Post
            key={post.text}
            displayName={post.displayName}
            username={post.username}
            verified={post.verified}
            text={post.text}
            avatar={post.avatar}
            image={post.image}
          />
        ))} */}
        <Post
          key="https://pbs.twimg.com/profile_images/1183286088418263046/ch2j3Tjy_400x400.jpg"
          displayName="pavan"
          username="Mr_Pavan_Kumar3"
          verified
          text="Dev life is a grind life. Work, study, have a side project, keep learning, practice, volunteer, write, give talks, go to tech events...
          But please don’t forget about your body and mind. It’s easy to lose yourself in the noise. If you don’t take care of yourself you can’t code."
          avatar="https://pbs.twimg.com/profile_images/1183286088418263046/ch2j3Tjy_400x400.jpg"
          image="https://images.unsplash.com/photo-1601758003839-512c0f4159e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
        />
        <Post
          key="https://pbs.twimg.com/profile_images/1183286088418263046/ch2j3Tjy_400x400.jpg"
          displayName="pavan"
          username="Mr_Pavan_Kumar3"
          verified
          text="Dev life is a grind life. Work, study, have a side project, keep learning, practice, volunteer, write, give talks, go to tech events...
          But please don’t forget about your body and mind. It’s easy to lose yourself in the noise. If you don’t take care of yourself you can’t code."
          avatar="https://pbs.twimg.com/profile_images/1183286088418263046/ch2j3Tjy_400x400.jpg"
          image="https://images.unsplash.com/photo-1601758003839-512c0f4159e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
        />
        <Post
          key="https://pbs.twimg.com/profile_images/1183286088418263046/ch2j3Tjy_400x400.jpg"
          displayName="pavan"
          username="Mr_Pavan_Kumar3"
          verified
          text="Dev life is a grind life. Work, study, have a side project, keep learning, practice, volunteer, write, give talks, go to tech events...
          But please don’t forget about your body and mind. It’s easy to lose yourself in the noise. If you don’t take care of yourself you can’t code."
          avatar="https://pbs.twimg.com/profile_images/1183286088418263046/ch2j3Tjy_400x400.jpg"
          image="https://images.unsplash.com/photo-1601758003839-512c0f4159e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
        />
        <Post
          key="https://pbs.twimg.com/profile_images/1183286088418263046/ch2j3Tjy_400x400.jpg"
          displayName="pavan"
          username="Mr_Pavan_Kumar3"
          verified
          text="Dev life is a grind life. Work, study, have a side project, keep learning, practice, volunteer, write, give talks, go to tech events...
          But please don’t forget about your body and mind. It’s easy to lose yourself in the noise. If you don’t take care of yourself you can’t code."
          avatar="https://pbs.twimg.com/profile_images/1183286088418263046/ch2j3Tjy_400x400.jpg"
          image="https://images.unsplash.com/photo-1601758003839-512c0f4159e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
        />
      </FlipMove>
    </div>
  );
}

export default Feed;
