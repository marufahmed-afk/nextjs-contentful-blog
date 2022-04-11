import Tag from '@app/components/atoms/Tag';
import { BlogItemDef } from '@app/features/contentful/types/contentful.types';
import Image from 'next/image';

type BlogCardProps = {
  blog: BlogItemDef;
};

const BlogCard = ({ blog }: BlogCardProps) => {
  return (
    <div className="overflow-hidden rounded-xl shadow-xl">
      <div className="relative h-[200px] rounded-xl">
        <Image
          src={blog?.image?.url ?? '/assets/placeholder.jpg'}
          layout="fill"
          objectFit="cover"
          className=""
        />
      </div>
      <div className="bg-white/2 md: md: inset-0 z-10 block h-full w-full px-3 py-7 pb-5 backdrop-blur-sm md:px-5">
        <p className="mb-3 text-xs">{blog?.sys?.firstPublishedAt}</p>
        <h2 className="mb-3 text-3xl font-bold md:text-3xl">{blog?.title}</h2>
        <p className=" md:line-clamp-10 mb-5 text-clip text-sm  line-clamp-6 md:text-base ">
          {blog?.summary}
        </p>
        <div className="flex gap-2">
          {blog?.tagsCollection?.items?.map((tag) => (
            <Tag key={tag.title} title={tag.title} variant="dark" size="sm" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
