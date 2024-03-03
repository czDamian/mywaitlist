const robots = () => {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: "/admin",
      },
    ],
    sitemap: `${process.env.BASE_URL}/sitemap.xml`,
  };
};
export default robots;
