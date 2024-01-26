import BlogList from './BlogList';
import useFetch from './useFetch';

/* using firebase database always set your database url like 
databaseURL: "https://<project-id>.firebaseio.com/yourfileName.json 

Replaced here with my enviornment variable(env file)
*/

const Home = () => {
   
const{ data:blogs, isPending, error }=useFetch(`${process.env.REACT_APP_FIREBASE_DATABASE_URL}`);

 return (
  <div className="home">
   { error && <div> { error }</div>}
   {isPending && <div> Loading</div>}
   { blogs && <BlogList blogs={blogs} title="All Blogs"/> }  
</div>

);
}
export default Home;