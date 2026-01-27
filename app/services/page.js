import Link from "next/link";
// static method to define metadata for the page using this function
export const metadata = {
  title: "Services Page",
  description: "This is Services Page description",
};

export default function Services() {
  return (
    <>
      <h1>All Services</h1>
      <p><Link href="/services/web-dev">Web Development</Link></p>
      <p><Link href="/services/seo">SEO Services</Link></p>
    </>
  );
}