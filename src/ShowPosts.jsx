export default function ShowPosts({p}) {
 
  const { userId, id, body, title } = p;
  return (
    <div className="box">
      <p>user Id: {userId}</p>
      <p>id: {id}</p>
      <p>title: {title}</p>
      <p>description : {body}</p>
    </div>
  );
}
