import {useState} from 'react'
import { useHistory } from 'react-router-dom';

// in real time databases, uses same property as in database to avoid errors and confusion. Local data had no issues,but in real time database write same name of properties as in databases.

const Create = () => {

const [title,setTitle] = useState('');
const [body,setBody] = useState('');
const [author,setAuthor] = useState('mario');
const [isPending,setIsPending] = useState(false);
const history= useHistory();


const handleSubmit =(e)=>{
e.preventDefault();
const blog ={title,body,author};

 /* Sometimes we can't access realtime databse due 
 to CORS action. so we set mode to no cors */

setIsPending(true);
fetch(process.env.REACT_APP_FIREBASE_DATABASE_URL,{
   method:'POST',
   mode:'no-cors',
   headers:{"Content-Type":"application/json",
},
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
         value={body}
         onChange={(e)=>setBody(e.target.value)}>
   </textarea>
   <label>Blog author:</label>
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