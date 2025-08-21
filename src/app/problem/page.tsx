import { CarouselDemo } from "@/components/Carousal";
import Footer from "@/components/Footer";
import  {Navbar} from "@/components/Navbar";
import Problem from "@/components/ui/problem";
import Solution from "@/components/ui/solution";

function ProblemStatement() {
  return (
    <div className="min-h-screen w-full bg-black relative text-white">
      {/* Deep Ocean Glow Background */}
      <Navbar/>
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(70% 55% at 50% 50%, #2a5d77 0%, #184058 18%, #0f2a43 34%, #0a1b30 50%, #071226 66%, #040d1c 80%, #020814 92%, #01040d 97%, #000309 100%), radial-gradient(160% 130% at 10% 10%, rgba(0,0,0,0) 38%, #000309 76%, #000208 100%), radial-gradient(160% 130% at 90% 90%, rgba(0,0,0,0) 38%, #000309 76%, #000208 100%)",
        }}
      />

      {/* Foreground Content */}
      <div className="relative z-10 p-8 max-w-5xl mx-auto space-y-12">
        {/* Heading */}
        <h1 className="text-4xl mt-20 font-bold text-center">🚧 Problem Statement</h1>

        {/* Problem Section */}
        <Problem />

        {/* Carousel */}
        <div className="pt-8">
          <CarouselDemo />
        </div>

        {/* Solution Section */}
        <h2 className="text-4xl font-bold text-center">✅ Proposed Solution</h2>
        <Solution />
      </div>
      <Footer/>
    </div>
  );
}

export default ProblemStatement;
