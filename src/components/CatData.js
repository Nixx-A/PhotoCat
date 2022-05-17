import '../styles/CatData.css'
const uniqueNum = Math.random();

export const CatData = (props) => {
  console.log(props.urlCat.length)
  console.log(props.urlCat)
   const url = `https://cataas.com/cat/says/Create your cat?s=45&c=white&filter=''&width=500&height=500&uniqueNum=${uniqueNum}`
  
  if (props.urlCat.length < 89) {
    return <div className='img-flex'>
              <img className='example-cat' src={url}  alt="example cat"/>
            </div> 
  } 
  return (
      <div className='img-flex'>
        <img className='example-cat' src={props.urlCat}  alt="example cat"/>
      </div> 
  )
}