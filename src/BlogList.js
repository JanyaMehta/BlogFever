import { Link } from "react-router-dom";

const BlogList = ({blogs,title }) => {
// const blogs=props.blogs;
// const title=props.title;


/*  Since in firebase database we store data as objects, 
but here we use map function so convert objects to arrays */

const blogsArray = Object.keys(blogs).map(key => ({
    id: key,
    ...blogs[key]
  }));


 return ( 
<div className="blog-list">
 <h2>{title}</h2>
 {blogsArray.map((blog)=> (
<div className="blog-preview" key={blog.id}>
  <Link to={`/blogs/${blog.id}`}>
   <h2>{blog.title}</h2>
   <p>Written By {blog.author}</p>
   </Link>
</div>
 ))}  
</div>
  );
}
 
export default BlogList;