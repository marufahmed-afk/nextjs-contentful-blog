export type ContentfulMediaDef = {
  sys: {
    id: string;
  };
  title: string;
  size: number;
  url: string;
};

export type BlogItemDef = {
  title: string;
  slug: string;
  summary: string;
  tagsCollection: {
    items: [{ title: string }];
  };
  image: ContentfulMediaDef;
  sys: {
    id: string;
    firstPublishedAt: string;
  };
};

export type BlogCollectionDef = {
  blogs: [BlogItemDef];
};
