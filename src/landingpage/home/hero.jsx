import './hero.css'

export default function Hero({ gallerytog }) {
    const servicesImages = [
        '/images/gallery/img1.jpg',
        '/images/gallery/img12.jpg',
        '/images/gallery/img4.jpg',
        '/images/gallery/img8.jpg',
    ];
    return (<>
        <section className=" min-h-screen flex flex-col md:flex-row items-center justify-between px-6 py-10 scroll smooth" id='mainsec' >
            {/* Text */}
            <div className="md:w-1/2  pl-0 md:pl-50 mb-0 md:mb-30 text-center md:text-left space-y-3 slide-up " data-aos="fade-up">
                <h3 className="text-md text-black">Enhance Your Beauty with</h3>
                <h1 className="text-5xl font-bold text-black">She Beauty Parlor</h1>
                <h2 className="text-lg font-semibold text-black"><i>Shamli’s Most Trusted Salon</i></h2>
                <p className="text-md text-black max-w-md mx-auto md:mx-0">
                    From stunning makeovers to premium hair care — everything you need to feel beautiful, all in one place.
                </p>
            </div>

            {/* Image */}
            <div className="md:w-1/2 mt-4 md:mt-0 mb-30 md:mb-20 flex justify-center slide-up" data-aos="fade-up">
                <img src="/images/cut.jpg" alt="Salon" className="w-60 md:w-80 rounded-xl hover:shadow-lg shadow-black transition-shadow duration-600" />
            </div>
        </section>

        {/* discover solon section */}
        <section className="relative bg-[#f4f4f4] overflow-hidden">
            {/* Curved Background on the left */}
            <div className="absolute inset-0 left-0 w-[90%] bg-[#ffd0d2] z-0 clip-left-curve" />

            {/* Main Content */}
            <div className="relative z-10 flex flex-col lg:flex-row items-center max-w-7xl mx-auto px-6 py-16">
                {/* Image Grid */}
                <div className="grid grid-cols-3 gap-4 md:w-3/5 w-full z-10" data-aos="fade-up">
                    <img src="/images/gallery/img13.jpg" alt="img1" className="w-full rounded-sm h-40 md:h-80 object-cover" />
                    <img src="/images/gallery/img16.jpg" alt="img2" className="w-full rounded-sm h-40 md:h-70 object-cover" />
                    <img src="/images/gallery/img17.jpg" alt="img3" className="w-full rounded-sm h-60 md:h-110 object-cover col-span-2 md:col-span-2" />
                    <img src="/images/gallery/img9.jpg" alt="img4" className="w-full rounded-sm h-50  object-cover" />
                    <img src="/images/gallery/img-11.jpg" alt="img5" className="w-full rounded-sm h-40 object-cover" />
                </div>

                {/* Text Content */}
                <div className="lg:w-2/5 mt-10 lg:mt-0 px-4 z-10 text-left" data-aos="fade-up">
                    <h2 className="text-3xl md:text-4xl font-serif font-semibold text-gray-800 mb-4">
                        Bringing Out the Best in You
                    </h2>
                    <p className="text-gray-600 mb-6">
                        Enhance your beauty with our exquisite salon services and treatments. We offer a variety of options that bring out the best in you.
                    </p>
                    <button onClick={gallerytog} className="bg-black text-white px-6 py-3 rounded hover:bg-pink-400 hover:text-black  transition">
                        Discover Our Salon
                    </button>
                </div>
            </div>
        </section>

        {/* logo discover */}
        <section className="relative bg-[#353839] py-20 px-4 md:px-16 overflow-hidden">
            {/* Curved design overlay */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-full z-0">
                <svg
                    className="w-full h-full"
                    viewBox="0 0 1440 320"
                    preserveAspectRatio="none"
                >
                    <path
                        fill="#ffd0d2"
                        d="M0,224L60,197.3C120,171,240,117,360,117.3C480,117,600,171,720,186.7C840,203,960,181,1080,154.7C1200,128,1320,96,1380,80L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
                    ></path>
                </svg>
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-8  max-w-6xl mx-auto" data-aos="fade-up">
                {/* Logo card */}
                <div className="bg-[#ffd0d2] z-10 p-4 md:p-3 rounded-xl shadow-xl mr-8 md:mr-0 ">
                    <img
                        src="/images/gallery/logoimg.png" // Replace with your actual path
                        alt="She Beauty Logo"
                        className="w-70 h-64 object-contain rounded-md"
                    />
                </div>

                {/* Text card */}
                <div className="bg-gray-100  z-20 p-6 md:p-8 rounded-xl shadow-xl max-w-xl ml-8 md:ml-0">
                    <p className="text-sm text-gray-600 mb-2 font-medium">
                        Premier Beauty Salon Services
                    </p>
                    <h2 className="text-sm  font-serif font-semibold text-gray-800 leading-relaxed">
                        Transform your look and feel fabulous<br />
                        with our premier beauty salon services.
                    </h2>
                </div>
            </div>
        </section>





        {/* discover services */}

        <section
            id="services"
            className="bg-[#ffd0d2] text-white py-20 px-6 md:px-20 transform -skew-y-2 "
        >
            <div className="transform skew-y-2">
                <h2 className="text-3xl font-bold  text-black text-center mb-4 font-serif">
                    Our Services
                </h2>
                <p className="text-center text-sm md:text-base text-gray-600 mb-12 max-w-3xl mx-auto">
                    Explore our tailored beauty services, each designed to enhance your confidence and showcase your inner beauty.
                </p>

                <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
                    {servicesImages.map((src, index) => (
                        <img
                            key={index}
                            src={src}
                            alt={`Service ${index + 1}`}
                            className="w-full rounded-lg shadow-md break-inside-avoid"
                        />
                    ))}
                </div>
            </div>
        </section>

        {/* why choose discover short */}
        <section className="bg-white text-black px-6 py-5 max-h-screen flex flex-col items-center justify-center">
            <h2 className=" text-2xl md:text-4xl font-bold font-serif mb-8 text-center " data-aos="fade-up">✨ Why Choose Us</h2>
            <div className='text-SM w-full flex flex-col gap-3 items-center font sans'>
                <p>Certified beauty professionals with years of experience</p>
                <p>Wide range of services from makeup to hair transformations</p>
                <p>
                    Hygienic, peaceful, and welcoming environment</p>
                <p>Located in the heart of Shamli – Near Ganna Society</p>
            </div>

        </section>







    </>)
}