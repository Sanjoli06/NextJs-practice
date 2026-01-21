export default async function BlogIds({params, searchParams}) {
    console.log(await searchParams);
    console.log(await params);
    const {blogID}=await params;
  return (
    <div>
      <h1> All blogs </h1>
      <p>Blog ID: {blogID}</p>
    </div>
  )
}

