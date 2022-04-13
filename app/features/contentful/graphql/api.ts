import axios from 'axios';

import { ENV } from '@app/features/contentful/constants/contentful.env';
import { ENTRY_GRAPHQL_FIELDS } from './queries.fields';

const fetchGraphQL = async (query: string) => {
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

export const getSingleBlog = async (locale: any, slug: any) => {
  const blogs = await fetchGraphQL(
    `query {
                  blogCollection(locale: "${
                    locale ?? 'en-US'
                  }", where: {slug: "${slug}"}) {
                      items {
                          ${ENTRY_GRAPHQL_FIELDS.BlogCollection}
                      }
                  }
              }`
  );

  return blogs.data.blogCollection?.items;
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

export const getBlogsByTag = async (locale: string, tag: string) => {
  const blogs = await fetchGraphQL(
    `query {
      tagCollection(where: {slug: "${tag}"}, limit: 1) {
        items {
          linkedFrom {
            blogCollection(limit: 10) {
              items {
                title(locale: "${locale ?? 'en-US'}")
                slug
                summary(locale: "${locale ?? 'en-US'}")
                tagsCollection(locale: "${locale ?? 'en-US'}"){
                    items{
                      title
                    }
                  }
                image {
                  sys {
                    id
                  }
                  size
                  url
                  title
                }
                sys {
                  id
                  firstPublishedAt
                }
              }
            }
          }
        }
      }
                }`
  );
  return blogs.data.tagCollection.items[0].linkedFrom.blogCollection?.items;
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
