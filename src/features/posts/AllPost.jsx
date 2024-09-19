import { Card, CardBody, CardHeader, Typography } from "@material-tailwind/react";
import { useSelector } from "react-redux"


const AllPost = () => {
  // const p = useSelector((state)=>state.postSlice.posts)
  // console.log(p);
///----same ho--------mathi simple way ma object --------------tala destruct gareko----------
  const {posts} = useSelector((state)=>state.postSlice)
  console.log(posts);
  return (
    <div>


      
      {posts && posts.map((post,i)=>{
        return <div key={i} >
          {/* <div>{post.title}</div>
          <div> {post.image && <img src={post.image} alt="" /> }</div>
          <div className=""> {post.details}</div>
          <div className=""> {post.genres}</div>
          <div className=""> {post.country}</div> */}
 <Card className="w-96">
      <CardHeader floated={false} className="h-50">
      {post.image && <img src={post.image} alt="" /> }
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h4" color="black" className="mb-2 text-black">
        {post.title}
        </Typography>
        <Typography color="black" className="font-medium text-black" textGradient>
        {post.genres}
        </Typography>
        <Typography color="black-" className="font-medium text-black" textGradient>
        {post.details}
        </Typography>
        <Typography  className="font-medium text-black" textGradient>
        {post.country}
        </Typography>
      </CardBody>
    
    </Card>


        </div>
      })}
    </div>
  )
}

export default AllPost