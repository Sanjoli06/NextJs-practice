export default async function CommentIds({params, searchParams}) {
    console.log(await searchParams);
    console.log(await params);
    const {blogID}=await params;
    const {commentID}=await params;
  return (
    <div>
      <h1> All blogs </h1>
      <p>this is <b>{commentID}</b> comment number on blog <b>{blogID}</b></p>
    </div>
  )
}

