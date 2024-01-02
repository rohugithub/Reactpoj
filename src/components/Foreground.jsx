// eslint-disable-next-line no-unused-vars
import React, { useRef } from 'react'
import Card from './Card'

function Foreground() {

  const ref= useRef(null);

    const data=[
        {
            desc:"kuch ni bhai niss",
            fileSize:'.3mb',
            close:'true',
            tag:{isOpen:true,tagtittle:'Download Now'}
        }
        ,
        {
          desc:"kuch ni bhai niss",
          fileSize:'.3mb',
          close:'true',
          tag:{isOpen:true,tagtittle:'Download Now'}
      },
      {
        desc:"kuch ni bhai niss",
        fileSize:'.3mb',
        close:'true',
        tag:{isOpen:true,tagtittle:'Download Now'}
    }
    ]

  return (
    <div ref={ref} className=' h-full w-full fixed z-[3] top-0  left-0 flex gap-5 flex-wrap mt-2 ml-2'>
      {data.map((item, index)=>(
        // eslint-disable-next-line react/jsx-key
        <Card data={item}  refrence={ref}/>
      ))}
    </div>
  )
}

export default Foreground