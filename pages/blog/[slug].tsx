import {
  getAllBlogs,
  getSingleBlog,
} from '@app/features/contentful/graphql/api';
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

const BlogPage: NextPage = ({ blog }: any) => {
  return (
    <div>
      <Head>
        <title>{blog.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="relative mt-5 mb-10 h-[200px] overflow-hidden rounded-xl md:h-[400px]">
          <div className="absolute inset-0 z-10 flex  h-full w-full flex-col bg-black/50 p-8 backdrop-blur-sm md:justify-end">
            <h2 className=" mb-5 text-3xl font-bold text-white md:text-5xl">
              {blog?.title}
            </h2>
            <p className="md: mb-3 max-w-[800px] text-sm text-white  line-clamp-3  md:text-lg">
              {blog?.summary}
            </p>
          </div>
          <Image
            src={blog?.image.url ?? '/assets/placeholder.jpg'}
            layout="fill"
            objectFit="cover"
            className=""
          />
        </div>
      </main>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const blogs = await getAllBlogs('en-US');

  const paths = blogs.map((item: any) => {
    return {
      params: { slug: item.slug },
    };
  });

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params, locale }) => {
  const items = await getSingleBlog(locale, params?.slug);

  return {
    props: { blog: items[0] },
    revalidate: 1,
  };
};

export default BlogPage;
