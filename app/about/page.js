import Link from "next/link";
// static method to define metadata for the page using this function
export const metadata = {
  title: "About Page",
  description: "This is About Page description",
};

export default function About() {
  return (
    <>
      <h1>Welcome to About Us</h1>
      <p><Link href="/services">Our Services</Link></p>
      <p><Link href="/">Home</Link></p>
    </>
  );
}