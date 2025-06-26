export default function Footer({homeToggle,aboutToggle,serviceToggle,galleryToggle,contactToggle}) {
    return (<>
    
        <section className="bg-[#0d0d0d]  min-h-screen md:min-h-[600px] flex items-center justify-center px-6 py-16">
            <div className="max-w-3xl w-full text-center text-white animate-fade-up space-y-8">

                <h1 className="text-4xl md:text-4xl font-bold text-pink-400">📞Contact Us</h1>
                <p className="text-lg text-gray-300 font-medium">We’re Here To Serve You</p>

                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 shadow-lg hover:shadow-white transition duration-700 space-y-4">
                    <h2 className="text-2xl font-semibold font-sans text-pink-300">She Beauty Parlor</h2>
                    <p className="text-gray-300">
                      Kamla Colony Near Ganna Society, Shamli – 247776, Uttar Pradesh
                    </p>
                    <p><span className="font-semibold text-white">Phone:</span> 9897060454</p>
                    <p><span className="font-semibold text-white">Email:</span> <a href="mailto:chhavi.bindal@gmail.com" className="text-pink-300 hover:underline">chhavi.bindal@gmail.com</a></p>
                    <p><span className="font-semibold text-white">🕒Timings:</span> 10 AM – 7 PM (Open All Days)</p>
                </div>

            </div>
        </section>




    </>)
}