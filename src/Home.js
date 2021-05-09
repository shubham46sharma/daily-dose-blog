import { useState } from 'react';
import BlogList from './BlogList';


const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: 'My new Website', body:'lorem ipsum...', author:'shubham', id:1},
        {title: 'welcome party !', body:'lorem ipsum...', author:'sam', id:2},
        {title: 'Dev ops tips', body:'lorem ipsum...', author:'ninja', id:3}
    ]);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    return ( 
        <div className="Home">
            <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete}/>
        </div>
     );
}
 
export default Home;