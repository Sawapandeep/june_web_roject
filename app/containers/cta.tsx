'use client';

import Image from 'next/image';
const CTA = () => {
    return (
        <section className="relative w-full h-[60vh] md:h-[75vh] lg:h-[90vh] overflow-hidden">
            {/* Background Image */}
            <Image
                src="/images/cta.png"
                alt="Delicious food"
                layout="fill"
                objectFit="cover"
                quality={90}
                className="z-0"
                priority
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 z-10" />

            {/* Text Content */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center z-20 px-4">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-orange-600 mb-4">
                    GIVE YOURSELF A TREAT
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-white mb-6">
                    One Bite And You Can Feel The Heaven In Your Mouth.
                </p>
                <button className="px-6 py-3 bg-white text-black font-semibold rounded-md hover:bg-orange-600 hover:text-black transition">
                    SHOP NOW
                </button>
            </div>
        </section>
    );
};

export default CTA;
