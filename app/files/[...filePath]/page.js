export default async function FilePaths({params}) {
    const {filePath}=await params;
  return (
    <h1>
        Files Path: {filePath.join('/')} 
    </h1>
  )
}
