export default async function fooItems({params}) {
    const {foodItems}=await params;
  return (
    <h1>
        Food Items: {foodItems?.join('/')} 
    </h1>
  )
}
