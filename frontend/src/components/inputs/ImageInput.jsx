import React, { useRef, useState } from 'react'

const ImageInput = ({ currentNumber, handleAddImage }) => {

  const [fileName, setFileName] = useState('upload a file (800x800)')
  const fileInputRef = useRef(null)

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFileName(file ? file.name : 'No file chosen');
    handleAddImage(file)
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  const numberStrings = ['First', 'Second', 'Third']

  return (

    <div
      className='flex flex-row items-center justify-between w-full h-fit rounded-md gap-5'
    >


      {/* image input */}
      <div 
        className="flex flex-row w-full h-fit items-center rounded text-sm border-2 border-black/50 dark:border-white/30 border-dashed p-2"
      >
        <input 
          type="file" 
          ref={fileInputRef}
          onChange={handleFileChange}
          className='hidden'
        />
        <button
          className='rounded-l text-darkGreen dark:text-green flex flex-row items-center gap-2'
          type='button'
          onClick={triggerFileInput}
        >
          <svg  xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill={"currentColor"} viewBox="0 0 24 24"><path d="M21 14V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h9v-2H5v-1.59l3-3 1.29 1.29c.39.39 1.02.39 1.41 0l5.29-5.29 3 3V14h2Zm-4.29-5.71a.996.996 0 0 0-1.41 0l-5.29 5.29-1.29-1.29a.996.996 0 0 0-1.41 0l-2.29 2.29V5h14v5.59L16.73 8.3Z"></path><path d="M8.5 7a1.5 1.5 0 1 0 0 3 1.5 1.5 0 1 0 0-3M21 16h-2v3h-3v2h3v3h2v-3h3v-2h-3z"></path></svg>
          <span className='  w-fit rounded-r text-black/70 dark:text-white/70'>{fileName}</span>
        </button>
      </div>

    </div>

  
  )
}

export default ImageInput