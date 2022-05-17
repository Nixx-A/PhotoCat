import '../styles/CreateCat.css'
import { CatData } from "./CatData";
import { useState } from "react";




const uniqueNum = Math.random();

const initialValues = {
  select: "",
  text: "",
  fontSize: "",
  color: "",
  filter: "",
  width: "",
  height: ""
};


export const CreateCat = () => {
  const [values, setValues] = useState(initialValues)

  const urlCat = `https://cataas.com/cat/${values.select}/says/${values.text}?s=${values.fontSize}&c=${values.color}&filter=${values.filter}&width=${values.width}&height=${values.height}&uniqueNum=${uniqueNum}`

  const onSubmit = (e) => {
    e.preventDefault()
    console.log(values)
    console.log(urlCat)
  }

  const handleChange = (e) => {
    const {name, value} = e.target
    
    setValues({
      ...values,
      [name]: value,
    })
    
    /* console.log(values) */
  }



  return (
    <div>
      <h2 className="subtitle">Create your cat</h2>
      <form onSubmit={onSubmit}>
        <div className="grid-inputs">
          <select 
            className='select'
            value={values.select}
            onChange={handleChange}
            name="select">
              <option disabled='true'>Select the type</option>  
              <option value="">Photo</option>  
              <option value="gif">Gif</option>        
          </select><br/>
          <input 
            className='input one'
            value={values.text} 
            onChange={handleChange} 
            placeholder='Enter text' 
            type="text" 
            name="text" />
            <br/>
          <input 
            className='input two'
            value={values.fontSize}
            onChange={handleChange} 
            placeholder='Enter font size'
            type="number" 
            name="fontSize" />
            <br/>
          <input 
            className='input three'
            value={values.color}
            onChange={handleChange} 
            placeholder='Enter color' 
            type="text" 
            name="color" />
            <br/>
          <input 
            className='input four'
            value={values.filter}
            onChange={handleChange} 
            placeholder='Enter filter' 
            type="text" 
            name="filter" />
            <br/>
          <input 
            className='input five'
            value={values.width}
            onChange={handleChange} 
            placeholder='Enter width' 
            type="number" 
            name="width" />
            <br/>
          <input 
            className='input six'
            value={values.height}
            onChange={handleChange}
            placeholder='Enter height' 
            type="number" 
            name="height" />
            <br/>
          <button className="btn">Submit</button>
        </div>
      </form>
      <CatData urlCat={urlCat}/>
    </div>
  )

}