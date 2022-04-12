import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  Thumbs,
} from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { BlogItemDef } from '@app/features/contentful/types/contentful.types';
import Link from 'next/link';

type FeaturedBlogProps = {
  featuredBlogs: [BlogItemDef];
};

const FeaturedBlogs = ({ featuredBlogs }: FeaturedBlogProps) => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      autoplay={true}
      pagination={true}
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, Thumbs]}
    >
      {featuredBlogs &&
        featuredBlogs?.map((blog) => (
          <SwiperSlide key={blog.sys.id}>
            <div className="relative mt-5 h-[300px] overflow-hidden rounded-xl md:h-[600px]">
              <div className="absolute inset-0 z-10 flex  h-full w-full flex-col bg-black/50 p-8 backdrop-blur-sm md:justify-end">
                <h2 className=" mb-5 text-3xl font-bold text-white md:text-5xl">
                  {blog?.title}
                </h2>
                <p className="md: mb-8 max-w-[800px] text-sm text-white  line-clamp-3  md:text-lg">
                  {blog?.summary}
                </p>
                <Link href={`/blog/${blog?.slug}`}>
                  <button className="self-center rounded-md bg-orange-500 py-2 px-6 text-sm font-semibold hover:bg-orange-600 md:self-start md:text-base">
                    Read Article
                  </button>
                </Link>
              </div>
              <Image
                src={blog?.image.url ?? '/assets/placeholder.jpg'}
                layout="fill"
                objectFit="cover"
                className=""
              />
            </div>
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default FeaturedBlogs;
