"use client"

import { usePathname } from "next/navigation";

export default function BlogIDNotFound() {
    const a=usePathname();
    console.log("Current Pathname:", a);
  return (
    <div>
      <h1>Blog ID Not Found</h1>
      <p>The blog you are looking for does not exist.</p>
    </div>
  );
}