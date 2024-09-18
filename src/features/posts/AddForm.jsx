import { Button, Checkbox, Input, Option, Radio, Select, Textarea } from '@material-tailwind/react'
import { useFormik } from 'formik'
import React from 'react'
import { checkData, radioData } from '../shared/data'

const AddForm = () => {
  const {handleChange,values,handleSubmit,setFieldValue}= useFormik({
    initialValues:{
            title:'',
            details:'',
            program:'',
            genres:[],
            country:''
          },
    onSubmit:(val=>{
      console.log(val);
    })

  })
  return (
    <div className='p-7 max-w-[300px]' >
      <form className='space-y-4' onSubmit={handleSubmit}>
      <Input name='title' onChange={handleChange} value={values.title} label='Title' />
      <Textarea name='details' onChange={handleChange} value={values.details} label='Detail'/>

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

      <Button type="submit" size='sm'>Submit</Button>
      </form>
    </div>
  )
}

export default AddForm