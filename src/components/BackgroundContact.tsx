import Link from "next/link"
import ContactForm from "./ui/contact-form"

function BackgroundContact() {
    return (
        <div className="min-h-screen w-full bg-[#020617] relative">
            {/* Magenta Orb Grid Background */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    background: "#020617",
                    backgroundImage: `
        linear-gradient(to right, rgba(71,85,105,0.15) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(71,85,105,0.15) 1px, transparent 1px),
        radial-gradient(circle at 50% 60%, rgba(236,72,153,0.15) 0%, rgba(168,85,247,0.05) 40%, transparent 70%)
      `,
                    backgroundSize: "40px 40px, 40px 40px, 100% 100%",
                }}
            />
            {/* Your Content/Components */}

            <div className="min-h-screen w-full bg-[#020617] flex items-center justify-center p-8 gap-12">
                {/* Message Section */}
                <div className="min-h-screen w-full bg-[#020617] flex items-center justify-center p-8 gap-12 pt-28">
                    {/* Message Section */}
                    <div className="flex-1 max-w-md text-white relative z-10">
                        <h2 className="text-3xl font-bold mb-4">
                            Let’s Build Something Awesome Together! 🚀
                        </h2>
                        <p className="text-gray-300 leading-relaxed text-lg">
                            Whether you have a project idea, a question, or just want to say hi, I’m all ears.
                            Feel free to drop a message—I usually respond within a day or two!
                            <br />
                            <br />
                            Your next big idea could be just a conversation away.
                        </p>

                        <div className="mt-6 flex space-x-6">
                            <Link
                                href="https://github.com/tanmayverma-08"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-300 hover:text-white transition-colors"
                                aria-label="GitHub"
                            >
                                {/* GitHub SVG */}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    className="w-8 h-8"
                                    role="img"
                                    aria-hidden="true"
                                >
                                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.263.82-.583 0-.287-.012-1.243-.017-2.444-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.082-.73.082-.73 1.205.084 1.838 1.237 1.838 1.237 1.07 1.835 2.808 1.305 3.495.998.108-.775.42-1.305.763-1.605-2.665-.303-5.467-1.335-5.467-5.933 0-1.31.468-2.382 1.235-3.222-.124-.304-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.48 11.48 0 0 1 3-.404c1.02.005 2.045.138 3 .404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.872.118 3.176.77.84 1.233 1.913 1.233 3.222 0 4.61-2.807 5.625-5.48 5.922.431.372.816 1.103.816 2.222 0 1.604-.015 2.896-.015 3.29 0 .322.217.698.825.58C20.565 21.796 24 17.3 24 12c0-6.63-5.373-12-12-12z" />
                                </svg>
                            </Link>

                            <Link
                                href="https://www.linkedin.com/in/tanmay-verma-373015324/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:text-blue-500 transition-colors"
                                aria-label="LinkedIn"
                            >
                                {/* LinkedIn SVG */}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    className="w-8 h-8"
                                    role="img"
                                    aria-hidden="true"
                                >
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.327-.027-3.038-1.851-3.038-1.853 0-2.136 1.445-2.136 2.939v5.668H9.35V9h3.414v1.561h.047c.476-.9 1.635-1.85 3.363-1.85 3.6 0 4.268 2.369 4.268 5.451v6.29zM5.337 7.433a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM6.813 20.452H3.86V9h2.953v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.543C0 23.223.792 24 1.771 24h20.451C23.206 24 24 23.223 24 22.271V1.729C24 .774 23.206 0 22.225 0z" />
                                </svg>
                            </Link>
                        </div>
                    </div>

                    {/* Contact Form Section */}
                    <div className="flex-1 max-w-lg relative z-10">
                        <ContactForm />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default BackgroundContact