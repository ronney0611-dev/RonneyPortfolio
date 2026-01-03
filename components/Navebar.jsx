

const Navebar = () => {
  return (
    <div className="flex flex-row justify-between items-center mx-5 text-white absolute left-0 right-0 top-0 z-50">
      <div className=" my-5 font-bold text-2xl">
        RonneyDev
      </div>
      <div >
        <ul className="flex flex-row gap-3 mt-2 font-medium">
            <button>Work</button>
            <button>Experience</button>
            <button>Skills</button>
            <button>Testimonials</button>
        </ul>
      </div>
      <div>
        <button className="bg-white text-black rounded px-2 py-1 font-medium">Contact me</button>
      </div>
    </div>
  )
}

export default Navebar

