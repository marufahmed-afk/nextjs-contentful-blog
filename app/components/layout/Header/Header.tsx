import { useRouter } from 'next/router';

const Header = () => {
  const router = useRouter();

  const { locale } = router;

  const languageSwitcher = (lang: string) => {
    router.push(router.asPath, router.asPath, { locale: lang });
  };

  return (
    <div className="relative flex h-6 w-full items-center py-7">
      <div className="space-x-reverse-3 mx-auto flex w-full max-w-7xl items-center justify-between">
        <h4 className="cursor-pointer text-lg font-bold text-gray-600 transition duration-300 ease-out hover:text-black">
          blog.
        </h4>
        {/* <SearchIcon className="hidden h-5 cursor-pointer text-gray-600 transition duration-300 ease-out hover:text-black md:inline-flex" /> */}
        <div className="flex gap-2">
          <h4
            onClick={() => languageSwitcher('en-US')}
            className={`${
              locale === 'en-US' ? 'text-black' : 'text-gray-600'
            } cursor-pointer text-lg font-bold  transition duration-300 ease-out hover:text-black`}
          >
            en
          </h4>
          <span>|</span>
          <h4
            onClick={() => languageSwitcher('fr')}
            className={`${
              locale === 'fr' ? 'text-black' : 'text-gray-600'
            } cursor-pointer text-lg font-bold  transition duration-300 ease-out hover:text-black`}
          >
            fr
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Header;
