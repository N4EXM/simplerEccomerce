import React from 'react'
import ColourCircles from '../general/ColourCircles'

const MyProductCard = ({ image, name, price, productColours, stockAvailability }) => {

  return (
    <div
      className='flex flex-row w-full h-26 p-3 bg-black/5 dark:bg-black/50 rounded-md shadow shadow-gray/20 items-center dark:shadow-black'
    >
      
      {/* image container */}
      <div
        className='w-3/10 h-auto p-1 rounded bg-white'
      >
        <img 
          src={image} 
          alt="" 
        />
      </div>

      {/* content container */}
      <div
        className='flex flex-col pl-3 h-full w-7/10 items-start justify-between'
      >
        
        {/* name, ratings and stock availability */}
        <div
          className='flex flex-row items-center w-full h-5/10'
        >

          {/* name and ratings */}
          <div
            className='flex flex-col gap-1 w-6/10 h-full'
          >
            <h1
              className='text-sm font-semibold'
            >
              {name}
            </h1>
            
            <div
              className='flex flex-row items-center'
            >
              {
                Array.from({ length: 5 }, (_,index) => {

                  const stars = 3

                  if (index < stars) {
                    return (
                      <svg className='text-amber-400' xmlns="http://www.w3.org/2000/svg" width={11} height={11} fill={"currentColor"} viewBox="0 0 24 24"><path d="m6.87 14.33-1.83 6.4c-.12.4.03.84.37 1.08.34.25.8.26 1.14.02L12 18.2l5.45 3.63a.99.99 0 0 0 1.14-.02c.34-.25.49-.68.37-1.08l-1.83-6.4 4.54-4.08c.3-.27.41-.69.28-1.06-.13-.38-.47-.64-.87-.68l-5.7-.45-2.47-5.46a.998.998 0 0 0-1.82 0L8.62 8.06l-5.7.45c-.4.03-.74.3-.87.68s-.02.8.28 1.06z"></path></svg>
                    ) 
                  }
                  else {
                    return (
                      <svg className='text-gray/30 dark:text-white/30' xmlns="http://www.w3.org/2000/svg" width={11} height={11} fill={"currentColor"} viewBox="0 0 24 24"><path d="m6.87 14.33-1.83 6.4c-.12.4.03.84.37 1.08.34.25.8.26 1.14.02L12 18.2l5.45 3.63a.99.99 0 0 0 1.14-.02c.34-.25.49-.68.37-1.08l-1.83-6.4 4.54-4.08c.3-.27.41-.69.28-1.06-.13-.38-.47-.64-.87-.68l-5.7-.45-2.47-5.46a.998.998 0 0 0-1.82 0L8.62 8.06l-5.7.45c-.4.03-.74.3-.87.68s-.02.8.28 1.06z"></path></svg>
                    ) 
                  }

                })
              }
            </div>
          </div>

          {/* stock */}
          <div
            className='flex w-5/10 h-full justify-end'
          >
            <p
              className={`${stockAvailability ? 'text-darkGreen bg-green/30 dark:bg-green/50 dark:text-green' : 'text-rose-700 bg-red-200'} w-fit h-fit text-[10px] px-2 p-1 rounded font-medium`}
            >
              {
                stockAvailability
                ? 'In Stock'
                : 'Out of Stock'
              }
            </p>
          </div>

        </div>

        {/* price */}
        <div
          className='w-full h-5/10 flex items-end justify-between'
        >

          <div>

          </div>

          {/* price */}
          <div>
            <p
              className='text-sm font-medium'
            >
              £{price}
            </p>
          </div>

        </div>

      </div>

    </div>
  )

}

export default MyProductCard