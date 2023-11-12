import Button from "./Button";

export default function Form() {
  return (
    <div>
      <form className="w-full h-full mx-auto bg-gray-100 p-10 my-6 rounded">
        <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <label
              htmlFor="name"
              className="block text-xl font-bold font-epilogue leading-6 text-gray-800"
            >
              Name <span className="text-primary"> *</span>
            </label>
            <div className="mt-2">
              <input
                placeholder="Your Name"
                type="text"
                name="name"
                id="name"
                className="block w-full rounded-md p-2 text-gray-800 font-kumbh placeholder:text-slate-400 sm:text-sm sm:leading-6 "
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label
              htmlFor="email"
              className="block text-xl font-bold font-epilogue leading-6 text-gray-800"
            >
              Email<span className="text-primary"> *</span>
            </label>
            <div className="mt-2">
              <input
                placeholder="Youremail@example.com"
                type="email"
                id="email"
                className="block w-full rounded-md p-2 text-gray-800 font-kumbh placeholder:text-slate-400 sm:text-sm sm:leading-6 "
              />
            </div>
          </div>
        </div>
        <div className=" my-5">
          <label
            htmlFor="message"
            className="block text-xl font-bold font-epilogue leading-6 text-gray-800"
          >
            Message<span className="text-primary"> *</span>
          </label>
          <div className="mt-2">
            <textarea
              placeholder="Message"
              id="message"
              name="message"
              rows={10}
              className="block w-full rounded-md border-0 p-2 text-gray-800 sm:text-sm sm:leading-6 placeholder:text-slate-400"
              defaultValue={""}
            />
          </div>
        </div>
        <div className="w-48">
          <Button text="Send a Message" link="#" />
        </div>
      </form>
    </div>
  );
}
