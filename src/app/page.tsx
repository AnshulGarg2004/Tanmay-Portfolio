import { Background } from "@/components/Background";
import { CardHoverEffectDemo } from "@/components/Card-hover";
import Footer from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { FocusCardsDemo } from "@/components/Projects";
import { SpotlightPreview } from "@/components/Spotlight";
// Other imports...

import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-black">
      <Background>
        <Navbar />

        {/* Hero Section */}
        <section className="pt-28 flex flex-col md:flex-row justify-center items-center mx-auto px-6 gap-12 max-w-6xl">
  <div className="max-w-xl text-center md:text-left relative z-20">
    <h1 className="text-5xl font-extrabold mb-4 tracking-wide drop-shadow-md text-white">
      Tanmay Verma
    </h1>
    <p className="text-3xl font-semibold mb-6 text-gray-400">
      Web Developer
    </p>
    <p className="text-lg leading-relaxed text-gray-300">
      Hi, I’m Tanmay Verma, a web developer with a passion for building
      fast, responsive, and user-focused websites and applications. I
      specialize in front-end technologies like React, Next.js, and
      Tailwind CSS, and I enjoy turning complex problems into clean,
      scalable solutions. Whether it's designing intuitive user
      interfaces or optimizing performance, I aim to craft digital
      experiences that are both functional and visually engaging.
    </p>
  </div>
  <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-lg flex-shrink-0 relative z-10">
    <img
      src="https://i.pinimg.com/1200x/d7/5d/8d/d75d8d25e3c1f7379064bc4780fa6754.jpg"
      alt="Tanmay Verma"
      className="object-cover rounded-full"
    />
  </div>
</section>
        {/* Skills Section */}
        <section className="pt-16 pb-8 mx-auto px-6 max-w-6xl">
          <h2 className="text-4xl font-extrabold mb-6 tracking-wide drop-shadow-md text-center text-white">
            Skills
          </h2>
          <CardHoverEffectDemo />
        </section>

        {/* Projects Section */}
        <section className="pt-16 pb-8 mx-auto px-6 max-w-6xl">
          <h2 className="text-4xl font-extrabold mb-6 tracking-wide drop-shadow-md text-center text-white">
            Projects
          </h2>
          <FocusCardsDemo />
        </section>

        {/* Footer (optional) */}
        <Footer />
      </Background>
    </div>
  );
}

