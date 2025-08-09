export default async function sitemap() {
  const base = 'https://ktdesignpro.com';
  return [
    { url: `${base}/`, lastModified: new Date() },
    { url: `${base}/about`, lastModified: new Date() },
    { url: `${base}/contact`, lastModified: new Date() },
    { url: `${base}/website-quote`, lastModified: new Date() },
    { url: `${base}/portfolio`, lastModified: new Date() },
    { url: `${base}/website-maintenance`, lastModified: new Date() },
    { url: `${base}/trucking-website-design`, lastModified: new Date() },
  ];
}
