import React, { useEffect, useState } from 'react'
import "../../assets/css/arhnCSS/backgroundSlider.css";


const imageSlider =[
    {
        url: 'https://images.pexels.com/photos/16035064/pexels-photo-16035064.png?auto=compress&cs=tinysrgb&w=600&lazy=load ',
        title: 'Image Slider 1'
    },
    {
        url: 'https://picsum.photos/200/300 ',
        title: 'Image Slider 2'
    },
    {
        url: 'https://images.pexels.com/photos/16035064/pexels-photo-16035064.png?auto=compress&cs=tinysrgb&w=600&lazy=load  ',
        title: 'Image Slider 3'
    },
]


const BackgroundSlider = () => {
    const [currentState, setCurrentState] = useState(0)
    
    useEffect(()=>
    {
        const timer = setTimeout(()=>
        {
            if(currentState===2)
            {
                setCurrentState(0)
            }
            else{
                setCurrentState(currentState + 1)
            }
        }, 5000)
        return ()=>
        {
            clearTimeout(timer)
        }
    }, [currentState])

    const bgImageStyle = {
        backgroundImage: `url(${imageSlider[currentState].url})`,
        backgroundPosition:'center',
        backgroundSize:'contain',
        backgroundRepeat:'no-repeat',
        width:"100%",
        height:'100%'
    }

        const goToNext = (currentState)=>
        {
            setCurrentState(currentState)
        }

   
  return (
    <>
    <div className='contain-style'>
      <div style={bgImageStyle} ></div>
      <div className="transparent-background"></div>
    </div>

    <div className="carousel-boult">
        {
            imageSlider.map((imageSlider, currentState)=>(
            
                <span key={currentState} onClick={()=> goToNext(currentState)
                }></span>
            ))
        }
    </div>
    </>
  )
}

export default BackgroundSlider



