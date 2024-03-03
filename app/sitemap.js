const sitemap = () => {
  return [
    {
      url: `${process.env.BASE_URL}/`,
    },
    {
      url: `${process.env.BASE_URL}/dapp`,
    },
    {
      url: `${process.env.BASE_URL}/#waitlist`,
    },
    {
      url: `${process.env.BASE_URL}/work-with-us`,
    },
    {
      url: `${process.env.BASE_URL}/terms-and-conditions`,
    },
  ];
};
export default sitemap;
