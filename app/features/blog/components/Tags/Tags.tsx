import Tag from '@app/components/atoms/Tag';

//TODO: write tag props

const Tags = ({ tags }: any) => {
  return (
    <div className="my-8 flex gap-3 overflow-scroll md:mt-10 md:flex-wrap md:overflow-visible">
      {tags && tags.map((tag: any) => <Tag title={tag.title} variant="dark" />)}
    </div>
  );
};

export default Tags;
