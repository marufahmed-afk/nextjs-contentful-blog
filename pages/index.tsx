import Blogs from '@app/features/blog/components/Blogs/Blogs';
import FeaturedBlogs from '@app/features/blog/components/FeaturedBlog/FeaturedBlogs';
import Tags from '@app/features/blog/components/Tags/Tags';
import {
  getAllBlogs,
  getAllTags,
  getFeaturedBlogs,
} from '@app/features/contentful/graphql/api';
import {
  BlogCollectionDef,
  BlogItemDef,
} from '@app/features/contentful/types/contentful.types';
import type { GetServerSideProps, GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { useEffect } from 'react';

const Home: NextPage = ({ blogs, featuredBlogs, tags }: any) => {
  // const getBlogs = async () => {
  //   const blgs = await getAllBlogs('en-US');
  //   console.log(blgs);
  // };

  // useEffect(() => {
  //   getBlogs();
  // }, []);

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <FeaturedBlogs featuredBlogs={featuredBlogs} />
        <Tags tags={tags} />
        <Blogs blogs={blogs} />
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const blogs = locale && (await getAllBlogs(locale));
  const featuredBlogs = locale && (await getFeaturedBlogs(locale));
  const tags = locale && (await getAllTags(locale));

  return {
    props: {
      blogs,
      featuredBlogs,
      tags,
    },
  };
};

export default Home;
