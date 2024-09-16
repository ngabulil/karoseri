import React from "react";
import wa from "../assets/wa.png";
import phone from "../assets/phone.png";
import emailIcon from "../assets/email.png";

const HubungiKami = () => {
  const [name, setName] = React.useState("");
  const [subject, setSubject] = React.useState("");
  const [description, setDescription] = React.useState("");
  return (
    <section>
      <div>
        <div className="mb-4 bg-perusahaan-galeri bg-no-repeat bg-cover bg-center h-[400px] flex justify-center items-center">
          <div className="mb-6 max-w-3xl text-center mx-auto">
            <p className="text-base font-semibold uppercase tracking-wide text-blue-200">
              Contact
            </p>
            <h2 className="font-heading mb-4 font-bold tracking-tight text-white text-3xl">
              Hubungi Kami
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-xl text-white">
              Jangan Ragu Untuk Menghubungi Kami
            </p>
          </div>
        </div>
        <div className="max-w-8xl mx-auto px-12">
          <h2 className="text-3xl font-bold text-center mb-6">Kontak Kami</h2>
          <p className="text-center mb-4 max-w-[1000px] mx-auto">
            Ada pertanyaan atau butuh bantuan? Berikut beberapa kontak yang kami
            sediakan untuk dihubungi. Kami siap membantu Anda!
          </p>
          <div className="flex flex-wrap gap-8 pb-8 px-8 justify-center">
            <div className="flex flex-col w-[300px] border-2 border-solid rounded-xl drop-shadow-md shadow-md p-6 bg-gradient-to-r-green-teal">
              <p className="text-2xl text-center font-bold text-white">
                WhatsApp
              </p>
              <img src={wa} alt="" />
            </div>
            <div className="flex flex-col w-[300px] border-2 border-solid rounded-xl drop-shadow-md shadow-md p-6 bg-gradient-to-r-blue-cyan">
              <p className="text-2xl text-center font-bold text-white">
                Nomer Telepon
              </p>
              <img src={phone} alt="" />
            </div>
            <div className="flex flex-col w-[300px] border-2 border-solid rounded-xl drop-shadow-md shadow-md p-6 bg-gradient-to-r-gray-black">
              <p className="text-2xl text-center font-bold text-white">Email</p>
              <img src={emailIcon} alt="" />
            </div>
          </div>
        </div>
        <div className="bg-slate-200 mt-4 py-4">
          <div className="max-w-8xl mx-auto px-12">
            <h2 className="text-3xl font-bold text-center mb-6">Alamat</h2>
            <div>
              <p className="text-center text-lg font-medium">
                PT. Prakarsa Putra Karoseri, Jl. Gelam Panggodokan No. 59 Gelam
                Jaya, Pasar Kemis, Tangerang
              </p>
              <div>
                <p className="text-center font-bold mt-6 mb-2 text-2xl">
                  Google Maps
                </p>
                <iframe
                  className="w-full h-64"
                  title="Google Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.7357838798152!2d106.56136731471642!3d-6.166126595535771!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ffbe6fd5b8ad%3A0x2a6591efa034c6f0!2sPT%20Prakarsa%20putra%20Karoseri!5e0!3m2!1sid!2sid!4v1600255800315!5m2!1sid!2sid"
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white py-4">
          <div className="max-w-8xl mx-auto px-12">
            <h2 className="text-3xl font-bold mb-4 text-center">
              Hubungi Kami
            </h2>
            <p className="text-gray-700 mb-4 text-center">
              Jika Anda memiliki pertanyaan, kritik, atau saran, jangan ragu
              untuk menghubungi kami.
            </p>
            <form>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Nama
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your name"
                  className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  placeholder="Your subject"
                  className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md"
                  onChange={(e) => setSubject(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Pesan
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md"
                  placeholder="Your message"
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>
              <div className="flex gap-2">
                <a
                  href={`mailto:info@karoseri.co.id${
                    subject
                      ? `?subject=${encodeURIComponent(
                          subject
                        )}%20From%20${name}`
                      : ""
                  }${
                    description
                      ? `&body=${encodeURIComponent(description)}`
                      : ""
                  }`}
                  className="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-300"
                  target="_blank"
                >
                  Kirim Email
                </a>
                <a
                  href={`https://wa.me/6282211022160?text=${
                    subject
                      ? `Subjek:%20${encodeURIComponent(
                          subject
                        )}%0ADari:%20${name}`
                      : ""
                  }${
                    description
                      ? `%0A%0A${encodeURIComponent(description)}`
                      : ""
                  }`}
                  className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition duration-300"
                  target="_blank"
                >
                  Kirim WhatsApp
                </a>
              </div>
            </form>
          </div>
        </div>
        {/* <div className="flex items-stretch justify-center">
          <div className="grid grid-cols-2">
            <div className="h-full pr-6">
              <p className="mt-3 mb-12 text-lg text-gray-600">
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos. Duis nec ipsum orci. Ut
                scelerisque sagittis ante, ac tincidunt sem venenatis ut.
              </p>
              <ul className="mb-6">
                <li className="flex">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6"
                    >
                      <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                      <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
                    </svg>
                  </div>
                  <div className="ml-4 mb-4">
                    <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900">
                      Our Address
                    </h3>
                    <p className="text-gray-600">
                      1230 Maecenas Street Donec Road
                    </p>
                    <p className="text-gray-600">New York, EEUU</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6"
                    >
                      <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
                      <path d="M15 7a2 2 0 0 1 2 2"></path>
                      <path d="M15 3a6 6 0 0 1 6 6"></path>
                    </svg>
                  </div>
                  <div className="ml-4 mb-4">
                    <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900">
                      Contact
                    </h3>
                    <p className="text-gray-600">Mobile: +1 (123) 456-7890</p>
                    <p className="text-gray-600">Mail: tailnext@gmail.com</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6"
                    >
                      <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                      <path d="M12 7v5l3 3"></path>
                    </svg>
                  </div>
                  <div className="ml-4 mb-4">
                    <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900">
                      Working hours
                    </h3>
                    <p className="text-gray-600">
                      Monday - Friday: 08:00 - 17:00
                    </p>
                    <p className="text-gray-600">
                      Saturday & Sunday: 08:00 - 12:00
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="card h-fit max-w-6xl p-5" id="form">
              <h2 className="mb-4 text-2xl font-bold text-white">
                Ready to Get Started?
              </h2>
              <form id="contactForm">
                <div className="mb-6">
                  <div className="mx-0 mb-1">
                    <div className="mx-0 mb-1">
                      <label
                        htmlFor="name"
                        className="pb-1 text-xs uppercase tracking-wider"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        autoComplete="given-name"
                        placeholder="Your name"
                        className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md"
                        name="name"
                      />
                    </div>
                    <div className="mx-0 mb-1">
                      <label
                        htmlFor="email"
                        className="pb-1 text-xs uppercase tracking-wider"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        autoComplete="email"
                        placeholder="Your email address"
                        className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md"
                        name="email"
                      />
                    </div>
                  </div>
                  <div className="mx-0 mb-1">
                    <label
                      htmlFor="textarea"
                      className="pb-1 text-xs uppercase tracking-wider"
                    >
                      Message
                    </label>
                    <textarea
                      id="textarea"
                      name="textarea"
                      cols={30}
                      rows={5}
                      placeholder="Write your message..."
                      className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md"
                    ></textarea>
                  </div>
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="w-full bg-blue-800 text-white px-6 py-3 font-xl rounded-md"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div> */}
      </div>

      {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-3xl font-bold mb-4">Hubungi Kami</h2>
          <p className="text-gray-700 mb-4">
            Jika Anda memiliki pertanyaan, kritik, atau saran, jangan ragu untuk
            menghubungi kami.
          </p>
          <form>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Nama
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Pesan
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-300"
            >
              Kirim Pesan
            </button>
          </form>
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-4">Alamat Kami</h2>
          <p className="text-gray-700 mb-4">
            Jl. Contoh No. 123
            <br />
            Kota Contoh
            <br />
            Indonesia
          </p>
          <iframe
            className="w-full h-64"
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.8639600720927!2d106.82374181476995!3d-6.178620995512157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fcb6df1353cf%3A0x71e2b312194a894e!2sMonas!5e0!3m2!1sen!2sid!4v1611935762261!5m2!1sen!2sid"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div> */}
    </section>
  );
};

export default HubungiKami;
