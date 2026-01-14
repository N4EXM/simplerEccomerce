import React from 'react'
import ColourCircles from '../general/ColourCircles'

const UserProductCard = ({ imageUrl, image, name, price, productColours }) => {

  const colours = [
    'red', 'green', 'blue', 'yellow', 'purple', 
    'orange', 'pink', 'brown', 'black', 'white',
    'gray', 'cyan', 'magenta', 'lime', 'maroon',
    'navy', 'olive', 'teal', 'silver', 'gold'
  ]

  return (
    <div
      className='flex flex-row gap-3 w-full min-w-[35%] max-h-56 h-full bg-black/5 dark:bg-black rounded-md p-3 shadow shadow-gray/30 dark:shadow-gray-950 '
    >
      {/* image container */}
      <div
        className='w-2/4 h-full flex rounded'
      >
        <img 
          className='rounded'
          src={imageUrl} 
          alt={image} 
        />
      </div>

      {/* details */}
      <div
        className='flex flex-col w-full h-full justify-between'
      >
        
        {/* name, category, reviews */}
        <div
          className='flex flex-row justify-between w-full h-3/4 '
        >
          
          <div
            className='w-3/4 h-fit flex flex-col gap-2'
          >
            {/* title and category */}
            <div
              className='flex flex-col gap-0 h-full w-full'
            >
              <h1
                className='font-medium text-sm/snug dark:text-white'
              >
                Skullcrushers
              </h1>
              <p
                className='text-xs/snug truncate text-gray dark:text-white/70'
              >
                Audio devices 
              </p>
            </div>

          </div>

        </div>

        {/* colours and price */}
        <div
          className='flex flex-row items-center justify-between w-full h-1/4'
        >
          <span
            className='flex w-full'
          >
            {
              Array.from({ length:5 }, (_,index) => {

                const currentStars = 3

                if (index < currentStars) {
                  return (
                    <svg className='text-amber-400' xmlns="http://www.w3.org/2000/svg" width={12} height={12} fill={"currentColor"} viewBox="0 0 24 24"><path d="m6.87 14.33-1.83 6.4c-.12.4.03.84.37 1.08.34.25.8.26 1.14.02L12 18.2l5.45 3.63a.99.99 0 0 0 1.14-.02c.34-.25.49-.68.37-1.08l-1.83-6.4 4.54-4.08c.3-.27.41-.69.28-1.06-.13-.38-.47-.64-.87-.68l-5.7-.45-2.47-5.46a.998.998 0 0 0-1.82 0L8.62 8.06l-5.7.45c-.4.03-.74.3-.87.68s-.02.8.28 1.06z"></path></svg>
                  )
                }
                else {
                  return (
                    <svg className='text-gray/20 dark:text-white/20' xmlns="http://www.w3.org/2000/svg" width={12} height={12} fill={"currentColor"} viewBox="0 0 24 24"><path d="m6.87 14.33-1.83 6.4c-.12.4.03.84.37 1.08.34.25.8.26 1.14.02L12 18.2l5.45 3.63a.99.99 0 0 0 1.14-.02c.34-.25.49-.68.37-1.08l-1.83-6.4 4.54-4.08c.3-.27.41-.69.28-1.06-.13-.38-.47-.64-.87-.68l-5.7-.45-2.47-5.46a.998.998 0 0 0-1.82 0L8.62 8.06l-5.7.45c-.4.03-.74.3-.87.68s-.02.8.28 1.06z"></path></svg>
                  )
                }          
              })
            }
          </span>
          <div>
            <p
              className='text-sm font-medium dark:text-white'
            >
              £{price}
            </p>
          </div>
        </div>

      </div>

    </div>
  )
}

export default UserProductCard