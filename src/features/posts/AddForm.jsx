import { Button, Checkbox, Input, Option, Radio, Select, Textarea } from '@material-tailwind/react'
import { useFormik } from 'formik'
import React from 'react'
import { checkData, radioData } from '../shared/data'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { addPost } from './postSlice'
import * as Yup from 'yup';


const valSchema = Yup.object({
  title:Yup.string().max(10).min(4).required(),
   details:Yup.string().matches(/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i, 'please provide valid email ').required(),
  // program:'',
  // genres:[],
  // country:'',
  // image:[]
})
const AddForm = () => {
  const dispatch= useDispatch();    ///action call garney ko lagi yo.
  const nav =useNavigate();///previous, next ,logical , interaction, p-italic page haru pathai na ko.

  const {handleChange,values,handleSubmit,setFieldValue, errors}= useFormik({
    initialValues:{
            title:'',
            details:'',
            program:'',
            genres:[],
            country:'',
            // image:'',
           images:[],

          },
    onSubmit:(val=>{
      dispatch(addPost(val));
      nav(-1); ///previous page ra back jana use -1 .
    }),
validationSchema : valSchema
  });
//  console.log(URL); //for review ko lagi createobjecturl use garney 
  //  console.log(values.image); //this place is perfect to rerenders the fileupload path
  
  return (
    <div className='p-7 max-w-[300px]' >
      <form className='space-y-4' onSubmit={handleSubmit}>
      <Input name='title' onChange={handleChange} value={values.title} label='Title' />

      <h1 className='text-red-200'>{errors.title}</h1>

      <div className="flex gap-10">
      {radioData.map((val,i)=>{
            return <Radio key={i} name="program" value={val.value} label={val.label} color={val.color} onChange={handleChange} />
      })}
      
     
    </div>

    <div className="flex w-max gap-4">
     {checkData.map((val,i)=>{
      return <Checkbox key={i} name='genres' value={val.value} label={val.label}  color={val.color} onChange={handleChange} />
     })}
      
     
    </div>

    <div className="w-72">
      <Select name='country' label="Select country" onChange={(e)=>setFieldValue("country",e)}>
        <Option value='bhutan'>Bhutan</Option>
        <Option value='Spain'>Spain</Option>
        <Option value='USA'>USA</Option>
        <Option value='China'>China</Option>
      </Select>
    </div>
    <Textarea name='details' onChange={handleChange} value={values.details} label='Detail'/>      
    <h1 className='text-red-200'>{errors.details}</h1>

    <Input multiple name='images' onChange={(e)=>{
    ///this for multiple image select display
        const file = e.target.files;
        const photos =[];
        for(let a of file){
          photos.push(URL.createObjectURL(a));
        }

        setFieldValue('images',photos); 
        console.log(photos);
        

        //multiple image select display so remove this code downs//----------
        // console.log(e.target.files[0]);
        // const file = e.target.files[0]; 
        // const reader = new FileReader();
        // reader.readAsDataURL(file);
        // reader.addEventListener('load' , (e)=>{
        //   setFieldValue('image',e.target.result); 
       // })


    }} label='Select Image' type='file'/>
        {/* this for multiple image display */}
          {values.images.length > 0 && values.images?.map((i)=>{
          return <img src={i} alt="" />
          //  this for only second image selected and remove up{values.images.length > 0 &&  <img src={values.images[1]} alt="" />
          })}

      {/* {values.image && <img src={values.image} alt="" /> }  //multiple image remove */}  
      <Button type="submit" size='sm'>Submit</Button>
      </form>
    </div>
  )
}

export default AddForm