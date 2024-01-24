import {useState} from 'react'
import { useHistory } from 'react-router-dom';

const Create = () => {

const [title,setTitle] = useState('');
const [content,setContent] = useState('');
const [author,setAuthor] = useState('mario');
const [isPending,setIsPending] = useState(false);
const history= useHistory();

const handleSubmit =(e)=>{
e.preventDefault();
const blog ={title,content,author};

setIsPending(true);
fetch('http://localhost:8000/blogs',{
   method:'POST',
   headers:{"Content-Type":"application/json"},
   body: JSON.stringify(blog)
}).then(()=>{
   console.log('new blog added');
   setIsPending(false);
   
// history.go(-1);
history.push('/');
}
)


}

 return (
<div className="create">
<h2>Add a New Blog</h2>
<form onSubmit={handleSubmit} >
   <label >Blog Title:</label>
   <input
    type="text"
    required
    value={title}
    onChange={(e)=> setTitle(e.target.value)}
    />
    <label >Blog Content:</label>
   <textarea
      required
         value={content}
         onChange={(e)=>setContent(e.target.value)}>
   </textarea>
   <label>Blod author:</label>
   <select 
   value={author}
   onChange={(e)=> setAuthor(e.target.value)}>
      <option value="mario">Mario</option>
      <option value="yoshi">Yoshi</option> 
   </select>
{ !isPending && <button>Add Blog</button>}
{ isPending && <button disabled>Adding Blog...</button>}


</form>
</div>
   );
}
 
export default Create;