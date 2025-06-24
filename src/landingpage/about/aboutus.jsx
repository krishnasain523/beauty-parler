import './about.css'
import React from "react";
import {
    FaUserGraduate,
    FaCut,             // ✅ use this for scissors/cut
    FaSpa,
    FaMapMarkerAlt
} from 'react-icons/fa';

export default function Aboutus() {

    return (<>

        <section className="bg-[#fedcdb] min-h-screen flex flex-col md:flex-row items-center justify-between px-6 py-16 gap-8">
            {/* Left Content */}
            <div className="md:w-1/2 pl-0 md:pl-50 mb-0 md:mb-30 text-black fade-left space-y-4">
                <h1 className="text-4xl font-bold  font-serif mb-2">About us</h1>
                <p className="text-base  font-serif leading-relaxed">
                    At <strong>She Beauty Parlor</strong>, we believe every woman deserves to feel confident and beautiful. Located in Shamli,
                    our salon offers a perfect blend of tradition and trend with services tailored to your unique style.
                </p>
                <p className="text-base font-serif leading-relaxed">
                    Whether it’s your wedding day or a casual glam-up, we ensure you walk out glowing.
                </p>
                <p className="text-base font-serif leading-relaxed">
                    Our expert team is trained in the latest beauty trends and hair techniques, providing you with premium services in a warm, relaxing space.
                </p>
            </div>

            {/* Right Image */}
            <div className="md:w-1/2 fade-right flex justify-center">
                <img
                    src='/images/spa.jpg'
                    alt="About She Beauty Parlor"
                    className="w-60 md:w-[350px] rounded-xl shadow-lg hover:scale-105 transition-all duration-500"
                />
            </div>
        </section>
        {/* why choose section */}

        <section className="bg-white text-black px-6 py-16 min-h-screen flex flex-col items-center justify-center">
            <h2 className="text-4xl font-bold mb-8 text-center " data-aos="fade-up">✨ Why Choose Us</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl "data-aos="fade-up">
                {/* Box 1 */}
                <div className="p-6 rounded-xl shadow-md hover:shadow-xl border border-gray-200 transition-all duration-300 hover:scale-[1.02] bg-white">
                    <div className="inline-flex gap-2">
                        <FaUserGraduate className="text-black inline-block text-xl" />
                        <h3 className="text-xl font-semibold mb-2"> Certified Professionals</h3>
                    </div>
                    <p>Our beauty experts are certified and have years of experience in creating stunning transformations.</p>
                </div>

                {/* Box 2 */}
                <div className="p-6 rounded-xl shadow-md hover:shadow-xl border border-gray-200 transition-all duration-300 hover:scale-[1.02] bg-white">
                    <div className='inline-flex gap-2'>
                        <FaCut className="text-yellow-500 inline-block text-xl" />
                        <h3 className="text-xl font-semibold mb-2"> Wide Range of Services</h3>
                    </div>
                    <p>From glamorous makeup to hair makeovers, we offer everything to match your beauty goals.</p>
                </div>

                {/* Box 3 */}
                <div className="p-6 rounded-xl shadow-md hover:shadow-xl border border-gray-200 transition-all duration-300 hover:scale-[1.02] bg-white">
                    <div className='inline-flex gap-2'>
                        <FaSpa className="text-yellow-500 inline-block text-xl" />
                        <h3 className="text-xl font-semibold mb-2">Clean & Calm Environment</h3>
                    </div>
                    <p>Our salon maintains top hygiene with a peaceful and welcoming ambiance for every client.</p>
                </div>

                {/* Box 4 */}
                <div className="p-6 rounded-xl shadow-md hover:shadow-xl border border-gray-200 transition-all duration-300 hover:scale-[1.02] bg-white">
                    <div className='inline-flex gap-2'>
                        <FaMapMarkerAlt className="text-black inline-block text-xl" />
                        <h3 className="text-xl font-semibold mb-2"> Prime Location</h3>
                    </div>
                    <p>Conveniently located in the heart of Shamli – Near Ganna Society, easy to reach anytime.</p>
                </div>
            </div>
        </section>
    </>)
}