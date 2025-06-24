import './hero.css'

export default function Hero() {
    return (<>
        <section className=" min-h-screen flex flex-col md:flex-row items-center justify-between px-6 py-10 scroll smooth" id='mainsec'>
            {/* Text */}
            <div className="md:w-1/2  pl-0 md:pl-50 mb-0 md:mb-30 text-center md:text-left space-y-3 slide-up ">
                <h3 className="text-md text-black">Enhance Your Beauty with</h3>
                <h1 className="text-5xl font-bold text-black">She Beauty Parlor</h1>
                <h2 className="text-lg font-semibold text-black"><i>Shamli’s Most Trusted Salon</i></h2>
                <p className="text-md text-black max-w-md mx-auto md:mx-0">
                    From stunning makeovers to premium hair care — everything you need to feel beautiful, all in one place.
                </p>
            </div>

            {/* Image */}
            <div className="md:w-1/2 mt-4 md:mt-0 mb-30 md:mb-20 flex justify-center slide-up">
                <img src="/images/cut.jpg" alt="Salon" className="w-60 md:w-80 rounded-xl hover:shadow-lg shadow-black transition-shadow duration-600" />
            </div>
        </section>



    </>)
}