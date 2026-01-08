import GooeyNav from '../src/components/GooeyNav.jsx'

const Navebar = () => {

  const items = [
    { label: "work", href: "work" },
    { label: "Skills", href: "skills" },
    { label: "Testimonials", href: "test" },
  ];

  return (
   
    <div className="flex flex-col md:flex-row justify-between items-center w-full px-5 py-4 text-white">
       <div className="  font-bold lg:text-2xl md:text-xl sm:text-l justify-start">
        RonneyDev
      </div>
      <div className='felx flex-col' >
      <GooeyNav
        
        items={items}
        particleCount={15}
        particleDistances={[90, 10]}
        particleR={0}
        initialActiveIndex={10}
        animationTime={600}
        timeVariance={300}
        colors={[1,2,3,1,2,3,1,4]}
      />
      </div>
    </div>
  )
}

export default Navebar

