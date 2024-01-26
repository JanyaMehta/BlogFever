import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom";


const BlogDetails = () => {
 /* url was coming undefined with earlier code.
 Since we're using real time databse,
 used template strings and adding id as dynamic value while fetching url*/

 const {id}=useParams();
 const{ data:blog,  error , isPending } = useFetch(`${process.env.REACT_APP_FIREBASE_REALTIME_DATABASE_URL}/${id}.json`);
const history=useHistory();

 const handleClick=()=>{
   fetch(`${process.env.REACT_APP_FIREBASE_REALTIME_DATABASE_URL}/${id}.json`,{
      method:'DELETE'
   }).then(()=>{

history.push('/');
   })
 }

 return (
  <div className="blog-details">
 {isPending && <div>Loading...</div>}
 {error && <div>{error}</div>}
 { blog && (
   <article>
      <h2>{blog.title}</h2>
      <p>Written By {blog.author}</p>
      <div>{blog.body}</div>
      <button onClick={handleClick}>Delete</button>
   </article>
 )}
 
  </div>
   );
}
 
export default BlogDetails;