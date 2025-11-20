"use client";
export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative min-h-screen bg-[#0f1115] text-white px-6 sm:px-10 lg:px-20 py-20"
    >
      {/* CONTACT HEADING AT THE TOP */}
      <h1 className="text-[3rem] sm:text-[4rem] lg:text-[5rem] font-extrabold text-gray-600 leading-none mb-12 text-center">
        CONTACT
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* LEFT SIDE CONTENT */}
        <div className="flex flex-col justify-center lg:ml-16">
          <h2 className="text-lg sm:text-2xl lg:text-3xl font-semibold mb-4 leading-snug">
            <span className="text-green-500">Let’s work together!</span> I’d
            love to hear from you.
          </h2>

          <p className="text-gray-300 mb-8 leading-relaxed text-sm sm:text-base">
            Whether you want to start a new project, collaborate, or just say hi
            — feel free to reach out. I’m always open to new ideas, creative
            discussions, and exciting collaborations.
          </p>

          {/* Contact Form */}
          <form className="space-y-5">
            <div>
              <label className="block text-gray-400 text-sm mb-2">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-[#1b1f24] text-gray-200 border border-gray-700 rounded-lg px-4 py-3 focus:border-green-500 outline-none transition"
              />
            </div>

            <div>
              <label className="block text-gray-400 text-sm mb-2">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full bg-[#1b1f24] text-gray-200 border border-gray-700 rounded-lg px-4 py-3 focus:border-green-500 outline-none transition"
              />
            </div>

            <div>
              <label className="block text-gray-400 text-sm mb-2">
                Message
              </label>
              <textarea
                placeholder="Write your message..."
                rows={4}
                className="w-full bg-[#1b1f24] text-gray-200 border border-gray-700 rounded-lg px-4 py-3 focus:border-green-500 outline-none transition resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-green-600 hover:bg-green-500 px-6 py-3 rounded-lg font-semibold text-white transition cursor-pointer"
            >
              Send Message
            </button>
          </form>

          {/* Contact Info */}
          <div className="mt-10 space-y-3 text-gray-400 text-sm">
            <p>📧 zohaibarshad2237@gmail.com </p>
            <p>📞 +92 323 4424756</p>
          </div>
        </div>

       {/* /* RIGHT SIDE IMAGE */ }
<div className="flex justify-center lg:justify-end">
  <img
    src="/contact5.png"
    alt="Contact Illustration"
    className="hidden lg:block w-full max-w-3xl h-[580px] rounded-2xl object-contain "
  />
</div>

      </div>
    </section>
  );
}
