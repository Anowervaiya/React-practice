import { useEffect, useState } from 'react';
import ShowPosts from './ShowPosts';

export default function Posts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => setPosts(data));
  }, []);
  return (
    <div>
      <h1>posts:{posts.length}</h1>
      {posts.map(post => {
       return (<ShowPosts p={post}></ShowPosts>)
      })}
    </div>
  );
}
