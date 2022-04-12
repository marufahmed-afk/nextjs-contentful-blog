type TagProps = {
  title: string;
  size?: 'sm' | 'lg';
  variant?: 'light' | 'dark';
  slug?: string;
};

const Tag = ({ title, size, variant, slug }: TagProps) => {
  return size === 'sm' ? (
    <div
      className={`cursor-pointer rounded-full border-2 ${
        variant === 'light' ? 'border-white text-white' : 'border-gray-600'
      }  py-1 px-4 text-xs`}
    >
      #{title}
    </div>
  ) : (
    <div
      id={slug}
      className={`cursor-pointer rounded-full border-2 ${
        variant === 'light' ? 'border-white' : 'border-gray-600'
      }  py-2 px-6 transition duration-300 ease-out hover:bg-gray-600 hover:text-white`}
    >
      {title}
    </div>
  );
};

export default Tag;
