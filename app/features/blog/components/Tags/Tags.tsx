import Tag from '@app/components/atoms/Tag';
import { useRouter } from 'next/router';

//TODO: write tag props

const Tags = ({ tags, setCurrentTag }: any) => {
  const router = useRouter();

  const handleTagSelect = (e: any) => {
    e.preventDefault();
    setCurrentTag(e.target.id);
  };

  return (
    <div
      onClick={handleTagSelect}
      className="my-8 flex gap-3 overflow-scroll md:mt-10 md:flex-wrap md:overflow-visible"
    >
      <Tag
        key={'all'}
        slug={'all'}
        title={router.locale === 'fr' ? 'Tout' : 'All'}
        variant="dark"
      />
      {tags &&
        tags.map((tag: any) => (
          <Tag
            key={tag.slug}
            title={tag.title}
            slug={tag.slug}
            variant="dark"
          />
        ))}
    </div>
  );
};

export default Tags;
