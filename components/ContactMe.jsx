
import Computer from '../sections/Computer-optimized'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Title from './Title'
import emailjs from '@emailjs/browser'
import { useRef, useState } from 'react'
import toast from 'react-hot-toast'

const ContactMe = () => {

  const formRef = useRef()
  const [loading, setLoading] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault()
    setLoading(true)

    emailjs.sendForm(
      import.meta.env.VITE_APP_EMAILJS_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATEID,
      formRef.current,
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    ).then(
      () => {
         toast.success("Message sent 🔥")
        setLoading(false)
        formRef.current.reset()
      },
      (err) => {
        console.log(err)
        toast.error("Something went wrong 😢") 
        setLoading(false)
      }
    )
  }

  return (
    <section id='contact'>
      <Title text={'Get in Touch - Let’s Contact '} />
      <div className='bg-gray-950 grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 mx-10 p-10 rounded-3xl gap-10'>
        <form ref={formRef} onSubmit={sendEmail} className=' w-full text-white'>
          <div className='flex flex-col' >
            <p className='text-sm my-2' >Your Name</p>
            <input className='bg-gray-800 px-3 py-2 rounded text-sm'
              type="text"
              id="name"
              name="name"
              placeholder="What’s your good name?"
              required
            />
          </div>
          <div className='flex flex-col'>
            <p className='text-sm my-2' >Your Email</p>
            <input
              className='bg-gray-800 px-3 py-2 rounded text-sm'
              type="email"
              id="email"
              name="email"
              placeholder="Whats your Email Address?"
              required
            />

          </div>
          <div className='flex flex-col'>
            <p className='text-sm my-2'>Your Message</p>
            <textarea
              className='bg-gray-800 px-3 py-2 rounded text-sm'
              id="message"
              name="message"
              placeholder="How can I help you?"
              rows="5"
              required
            />
            <input type="hidden" name="time" value={new Date().toLocaleString()} />
          </div>
          <div className='flex flex-col '>
            <button disabled={loading} type='submit' className='bg-white text-black font-semibold rounded mt-6 py-3 text-sm'>
               {loading ? "SENDING..." : "SEND MESSAGE"}
            </button>
          </div>
        </form>
        <div className='w-full bg-amber-500 relative rounded-2xl'>
          <Canvas className=' absolute top-0 left-0 right-0 bottom-0' >
            <ambientLight intensity={0.5} color="#fff4e6" />
            <Computer
              scale={0.02}
              rotation={[0.2, 0.2, 0]}
              position={[0, -0.6, 0]}
            />
            <OrbitControls
              enableZoom={false}
              minPolarAngle={Math.PI / 5}
              maxPolarAngle={Math.PI / 2} />
            <ambientLight intensity={0.7} color="#fff4e6" />
            <directionalLight
              position={[5, 9, 1]}
              castShadow
              intensity={2.5}
              color="#ffd9b3" />
          </Canvas>
        </div>
      </div>
    </section>
  )
}
export default ContactMe
