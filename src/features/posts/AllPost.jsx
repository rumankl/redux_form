import { Button, Card, CardBody, CardFooter, IconButton, Typography } from "@material-tailwind/react";
import { useSelector } from "react-redux"
import CutomDialog from "../../UI/CustomDialog";


const AllPosts = () => {

  const { posts } = useSelector((state) => state.postSlice);

  return (
    <div>
      {
        posts.map((post, i) => {
          return <Card key={post.id} className="mt-6 w-96">
            <CardBody>
              <img src={post.imageReview} alt="" />
              <Typography variant="h5" color="blue-gray" className="mb-2">
                {post.title}
              </Typography>
              <Typography>
                {post.detail}
              </Typography>
            </CardBody>
            <CardFooter className="pt-0 flex justify-between">
              <Button>Read More</Button>

              <div className="space-x-5">
                <IconButton color="green">
                  <i className="fas fa-edit" />
                </IconButton>
                
                <CutomDialog index={i} />
              </div>

            </CardFooter>
          </Card>;
        })
      }




    </div>
  )
}
export default AllPosts