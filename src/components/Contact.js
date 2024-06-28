import React from 'react'

export const Contact = () => {
  return (
    <div>
      <h1 className='m-2 p-2 font-bold text-lg'>Contact Us</h1>
      <form>
        <div>
          <input type='text' className='p-2 m-2 border border-black' placeholder='name' />
          </div>
        <div>
          <input type='text' className='p-2 m-2 border border-black' placeholder='message' />
        </div>
        <div><button className='m-2 p-2 bg-slate-500 text-white rounded-md'>Submit</button></div>
      </form>
    </div>
  )
}

export default Contact;