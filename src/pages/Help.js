import React from "react";

function Help() {
  return (
    <div className="bg-gray-100">
      <div className="mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
            Need Help?
          </h2>
          <p className="mt-1 text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">
            Get in touch with us
          </p>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
            Our team is available 24/7 to answer your questions and provide
            assistance.
          </p>
        </div>
        <div className="flex flex-col md:flex-row mt-16 md:space-x-6 space-y-10 md:space-y-0">
          <div className="w-full max-w-md mx-auto md:w-1/2">
            <form action="#" method="POST" className="grid grid-cols-1 gap-y-6">
              <div>
                <label htmlFor="name" className="sr-only">
                  Full name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  autoComplete="name"
                  placeholder="Full name"
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:border-indigo-500 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-2"
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="Email"
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:border-indigo-500 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-2"
                />
              </div>
              <div>
                <label htmlFor="phone" className="sr-only">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  autoComplete="tel"
                  placeholder="Phone"
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:border-indigo-500 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-2"
                />
              </div>
              <div>
                <label htmlFor="subject" className="sr-only">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  autoComplete="subject"
                  placeholder="Subject"
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:border-indigo-500 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-2"
                />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Message"
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:border-indigo-500 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-2"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                    {/* <!-- Heroicon name: solid/phone --> */}
                    <svg
                      className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M15.293 1.707a1 1 0 011.414 0l2 2a1 1 0 010 1.414L16.414 7.5a2 2 0 01-1.581.775l-.575.096a15.09 15.09 0 01-8.55-2.619 15.09 15.09 0 01-2.62-8.547l.097-.574A2 2 0 012.5 3.586L4.793 1.293a1 1 0 011.414 0l2 2a1 1 0 01-.002 1.416L7.585 6H10v2a2 2 0 11-4 0V3h2.414l1.293 1.293a1 1 0 001.414 0l2-2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  Send message
                </button>
              </div>
            </form>
          </div>
          <div className="w-full max-w-md mx-auto mt-5 md:w-1/2 md:mt-0">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Contact Information
            </h3>
            <p className="mt-2 text-base text-gray-500">
              Please note that we can also be reached via email or phone.
            </p>
            <dl className="mt-8 space-y-6">
              <dt>
                <span className="sr-only">Email</span>
              </dt>
              <dd className="flex text-base text-gray-500">
                {/* <!-- Heroicon name: solid/mail --> */}
                <svg
                  className="flex-shrink-0 h-6 w-6 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 10h16M4 14h16M4 18h16"
                  />
                </svg>
                <span className="ml-3 ">support@yourwebsite.com</span>
              </dd>
              <dt>
                <span className="sr-only">Phone number</span>
              </dt>
              <dd className="flex text-base text-gray-500">
                {/* <!-- Heroicon name: solid/phone --> */}
                <svg
                  className="flex-shrink-0 h-6 w-6 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3a2.828 2.828 0 014 0L9 4.172m6 0L21 3a2.828 2.828 0 014 0v12a2.828 2.828 0 01-4 0l-2-2.172m-6 0L9 15.828m6 0L15 15a2.828 2.828 0 014 0v4a2.828 2.828 0 01-4 0l-2-2.172m-6 0L3 15"
                  />
                </svg>
                <span className="ml-3">1-800-123-4567</span>
              </dd>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Help;
