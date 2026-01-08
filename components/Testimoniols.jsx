import GlareHover from '@/components/GlareHover'
import { testimoniols } from '../sections'
import Title from './Title'

const Testimonials = () => {
    return (
        <section id='test' className="my-20 text-white">
            <div className="w-full h-full">
                <div className='mb-20' >
                    <Title text={'What People Said About Me'} />
                </div>
                

                <div className="mx-5 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {testimoniols.map((testimonial) => (
                        <GlareHover className='p-5' >
                            <div className='flex flex-col' >
                                <div className="my-3">
                                    <p>{testimonial.review}</p>
                                </div>

                                <div className="flex flex-row gap-4 items-center">
                                    <img
                                        className="w-10 h-10 rounded-full object-cover "
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                    />
                                    <div>
                                        <h1 className="font-bold text-lg">{testimonial.name}</h1>
                                        <p className="text-sm">{testimonial.mention}</p>
                                    </div>
                                </div>
                            </div>
                        </GlareHover>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Testimonials
