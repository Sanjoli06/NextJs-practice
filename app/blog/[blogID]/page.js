 // dynamic metadata generation based on params using generateMetadata function
 export async function generateMetadata({params}){
    const {blogID}=await params;
  return {
    title:`Blog ID - ${blogID}`,
    description:`This is the blog page for blog ID ${blogID}`,
  };
}    
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

