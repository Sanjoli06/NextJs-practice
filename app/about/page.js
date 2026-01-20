import Link from "next/link";

export default function About() {
  return (
    <>
      <h1>Welcome to About Us</h1>
      <p><Link href="/services">Our Services</Link></p>
      <p><Link href="/">Home</Link></p>
    </>
  );
}