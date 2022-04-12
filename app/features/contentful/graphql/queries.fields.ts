// query{
//     blogCollection(where: {tags_contains_some: ["april"]}) {
//       items {
//         title
//       }
//     }
//   }

export const ENTRY_GRAPHQL_FIELDS = {
  BlogCollection: `
  ... on Blog {
    title
    slug
    summary
    tagsCollection{
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
  } `,
  TagCollection: `
  ... on Tag {
    title
    slug
  } `,
  BlogFromTagCollection: `
  title
  slug
  summary
  tagsCollection{
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
  }`,
};
