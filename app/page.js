import Image from "next/image";
import Link from "next/link";

// static method to define metadata for the page using this function
// export const metadata = {
//   title: "Home Page",
//   description: "This is Home Page description",
// };

export default function Home() {
  return (
    <>
    <h1>Welcome to Home Page</h1>
    <p><Link href="/about">About</Link></p>
    <p><Link href="/services">Services</Link></p>
    <p><Link href="/blog">Blog</Link></p>
    </>
  );
}
