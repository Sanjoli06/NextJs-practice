import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <h1>Welcome to Home Page</h1>
    <p><Link href="/about">About</Link></p>
    <p><Link href="/services">Services</Link></p>
    </>
  );
}
