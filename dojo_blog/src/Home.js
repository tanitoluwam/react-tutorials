//this is used to import useStateHook
import BlogList from "./BlogList";
import useFetch from "./useFetch";

 
//Home component
const Home  = () => {
  const{data :blogs, isLoading, error} =useFetch("http://localhost:8000/blogs");
  //to delete a blog
  // const handleDelete = (id) => {
  //   const newBlogs = blogs.filter(blog => blog.id !==id);
  //   setBlogs(newBlogs);
  // }
 
   //to output the data to the dom
  return ( 
    <div className="home">
      {error && <div> {error} </div>}
      {isLoading &&<div>Loading...</div> }
      {blogs &&<BlogList blogs = {blogs} title="All Blogs!" />}
   </div>
  );
}
 
export default Home ;