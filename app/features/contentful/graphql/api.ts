import axios from 'axios';

import { ENV } from '@app/features/contentful/constants/contentful.env';
import { ENTRY_GRAPHQL_FIELDS } from './queries.fields';

const fetchGraphQL = async (query: string) => {
  console.log(ENV.SPACE_ID);
  return axios({
    url: `https://graphql.contentful.com/content/v1/spaces/${ENV.SPACE_ID}/environments/${ENV.ENVIRONMENT}`,
    method: 'post',
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${ENV.DELIVERY_ACCESS_TOKEN}`,
    },
    data: {
      query,
    },
  }).then((result) => result.data);
};

export const getAllBlogs = async (locale: string) => {
  const blogs = await fetchGraphQL(
    `query {
                  blogCollection(locale: "${locale ?? 'en-US'}") {
                      items {
                          ${ENTRY_GRAPHQL_FIELDS.BlogCollection}
                      }
                  }
              }`
  );

  return blogs.data.blogCollection?.items;
};

export const getFeaturedBlogs = async (locale: string) => {
  const blogs = await fetchGraphQL(
    `query {
                    blogCollection(where: {featured_exists:true},locale: "${
                      locale ?? 'en-US'
                    }") {
                        items {
                            ${ENTRY_GRAPHQL_FIELDS.BlogCollection}
                        }
                    }
                }`
  );
  return blogs.data.blogCollection?.items;
};

export const getBlogsByTag = async (locale: string) => {
  const blogs = await fetchGraphQL(
    `query {
                    tagCollection(where: { title: "Nature" },locale: "${
                      locale ?? 'en-US'
                    }") {
                        linkedFrom{
                        items {
                            ${ENTRY_GRAPHQL_FIELDS.BlogCollection}
                        }
                    }
                    }
                }`
  );
  return blogs.data.blogCollection?.items;
};

export const getAllTags = async (locale: string) => {
  const tags = await fetchGraphQL(
    `query {
                    tagCollection(locale: "${locale ?? 'en-US'}") {
               
                        items {
                            ${ENTRY_GRAPHQL_FIELDS.TagCollection}
                        }
                    
                    }
                }`
  );
  return tags.data.tagCollection?.items;
};
