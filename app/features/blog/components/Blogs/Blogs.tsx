import { getAllBlogs } from '@app/features/contentful/graphql/api';
import { BlogCollectionDef } from '@app/features/contentful/types/contentful.types';
import BlogCard from '../BlogCard/BlogCard';

const Blogs = ({ blogs }: BlogCollectionDef) => {
  return (
    <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
      {blogs && blogs.map((blog) => <BlogCard key={blog.sys.id} blog={blog} />)}
    </div>
  );
};

export default Blogs;
