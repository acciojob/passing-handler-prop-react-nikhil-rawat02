import React,{useEffect, useState} from 'react'
import '../styles/Child.css'
import '../styles/App.css'
function Selection(props) {
    let [element, setElement] = useState(null);
    
    const updateSelectionStyle = (background) =>{
         console.log(background)
          console.log(element)
        if(element){
          
            element.style.background = background.background;
        }
    }

    useEffect(() => {
if(element) {
    props.applyColor(updateSelectionStyle)
}
    }, [element])
  return (
    <div className ="fix-box" onClick={(e)=>{
        setElement(e.target);


        }
    }>
      <h3 className='subheading'>Selection</h3>
    </div>
  )
}

export default Selection


