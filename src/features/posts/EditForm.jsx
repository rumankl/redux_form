import { Button, Checkbox, Input, Option, Radio, Select, Textarea, 
  
 } from "@material-tailwind/react"
import { useFormik } from "formik"
import { checkData, radioData } from "../shared/data";
import { useDispatch, useSelector } from "react-redux";
import { 
   updatePost } from "./postSlice";
import { useNavigate, useParams } from "react-router";
// import { nanoid } from "@reduxjs/toolkit";
import * as Yup from 'yup';
import { supportedExts } from "./AddForm";

const valSchema = Yup.object({
  title: Yup.string().min(5).max(50).required(),
  detail: Yup.string().max(500).required(),
  program: Yup.string().required(),
  genres: Yup.array().min(1).required(),
  country: Yup.string().required(),
  // image: Yup.mixed().test('fileType', 'invalid file', (e) => {
  //   return e && supportedExts.includes(e.type);
  // }).test('fileSize', 'too large', (e) => {
  //   return e && e.size <= 1024 * 1024 * 5;
  // })
});

const EditForm = () => {
  const { posts } = useSelector((state) => state.postSlice);
  const { id } = useParams();
  const post = posts.find((post) => post.id === id);


  const dispatch = useDispatch();


  const nav = useNavigate();

  const { handleSubmit, values, handleChange, setFieldValue, errors, touched } = useFormik({
    initialValues: {
      title: post.title,
      detail: post.detail,
      program: post.program,
      genres: post.genres,
      country: post.country,
      image: null,
            // imageReview: ''
      imageReview: post.imageReview
    },
    onSubmit: (val) => {
   

      if (val.image === null) {

        dispatch(updatePost({ ...val, id: post.id }));
      } else {
        const isValid = supportedExts.includes(val.image.type);
        if (isValid) {
          delete val.image
          dispatch(updatePost({ ...val, id: post.id }));
        } else {
          alert('please provide valid image');
        }
      }





      nav(-1);
    },
    validationSchema: valSchema

  });



  return (
    <div className="p-7 max-w-[300px]">
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          name="title"
          onChange={handleChange}
          value={values.title}
          label="Title"
        />
        {errors.title && touched.title && <h1 className="text-pink-700">{errors.title}</h1>}

        <div className="flex gap-10">
          {radioData.map((val, i) => {
            return <Radio
              key={i}
              name="program"
              checked={val.value === values.program}
              onChange={handleChange}
              value={val.value}
              label={val.label}
              color={val.color} />
          })}

        </div>
        {errors.program && touched.program && <h1 className="text-pink-700">{errors.program}</h1>}

        <div className="flex w-max gap-4">
          {checkData.map((val, i) => {
            return <Checkbox
              key={i}
              name="genres"
              checked={values.genres.includes(val.value)}
              onChange={handleChange}
              color={val.color}
              label={val.label}
              value={val.value}
            />
          })}

        </div>
        {errors.genres && touched.genres && <h1 className="text-pink-700">{errors.genres}</h1>}

        <div className="w-72">
          <Select
            name="country"
            value={values.country}
            onChange={(e) => setFieldValue('country', e)}
            label="Select Country">
            <Option value="Bhutan">Bhutan</Option>
            <Option value="Spain">Spain</Option>
            <Option value="China">China</Option>


          </Select>
          {errors.country && touched.country && <h1 className="text-pink-700">{errors.country}</h1>}
        </div>

        <Textarea
          name="detail"
          onChange={handleChange}
          value={values.detail}
          label="Detail"
        />
        {errors.detail && touched.detail && <h1 className="text-pink-700">{errors.detail}</h1>}

        <Input
          // multiple
          name="image"
          onChange={(e) => {
            const file = e.target.files[0];
            setFieldValue('image', file);
            // let photos = [];
            // for (let a of file) {
            //   photos.push(URL.createObjectURL(a));
            // }

            // setFieldValue('images', photos);
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.addEventListener('load', (e) => {
              setFieldValue('imageReview', e.target.result);
            });

          }}
          label="Select an Image"
          accept="image/*"
          type="file" />

        {/* {values.images.length > 0 && values.images?.map((i) => {
          return <img src={i} alt="" />
        })} */}

        {values.imageReview &&
          <img src={values.imageReview} alt="" />}

        {errors.image && touched.image && <h1 className="text-pink-700">{errors.image}</h1>}


        <Button type="submit" size="sm">Submit</Button>


      </form>


    </div>
  )
}
export default EditForm