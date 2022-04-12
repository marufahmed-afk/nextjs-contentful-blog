import Blogs from '@app/features/blog/components/Blogs/Blogs';
import FeaturedBlogs from '@app/features/blog/components/FeaturedBlog/FeaturedBlogs';
import Tags from '@app/features/blog/components/Tags/Tags';
import {
  getAllBlogs,
  getAllTags,
  getBlogsByTag,
  getFeaturedBlogs,
} from '@app/features/contentful/graphql/api';

import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const Home: NextPage = ({ blogs, featuredBlogs, tags }: any) => {
  const [filteredBlogs, setFilteredBlogs] = useState(blogs);
  const [currentTag, setCurrentTag] = useState('');

  const router = useRouter();

  const getFilteredBlogs = async (tag: string) => {
    let _blogs = [];

    if (tag === 'all') {
      _blogs = router?.locale && (await getAllBlogs(router?.locale));
    } else {
      _blogs = router?.locale && (await getBlogsByTag(router?.locale, tag));
    }
    setFilteredBlogs(_blogs);
  };
  useEffect(() => {
    if (currentTag !== '') {
      console.log(currentTag);
      getFilteredBlogs(currentTag);
    }
  }, [currentTag]);

  return (
    <div>
      <Head>
        <title>blog.</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <FeaturedBlogs featuredBlogs={featuredBlogs} />
        <Tags tags={tags} setCurrentTag={setCurrentTag} />
        <Blogs blogs={filteredBlogs} />
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
