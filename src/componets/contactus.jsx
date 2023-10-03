import Btn from "./button";

const Contact = () => {
  return (
    <>
      <div id="contact" className="contact text-white mx-16">
        <div className="text-center ">
          <h4 className="uppercase text-green-600 my-4">
            for any Query don not heistate to contact us here
          </h4>
        </div>
        <div className="text-white grid lg:grid-cols-2 bg-transparent">
          <div className="flex justify-center items-center flex-col">
            <i className="fa fa-phone text-[100px]"></i>
            <p>
              This is Elisa `s Car web shop, if you have any problem or advice,
              opinion or questions, fell free to reach out us, we are here to
              help.
              <p className="text-center pt-5">
                <i className="fa fa-arrow-right text-green-600 animate-bounce text-[30px] mx-2"></i>
                Here we go
                <i className="fa fa-send text-[30px] text-green-600 "></i>
              </p>
            </p>
          </div>
          <form
            action="#"
            className="text-white my-4 font-mono grid border rounded-xl p-4"
          >
            <input
              type="text"
              //   value=""
              className="text-[15px] first-letter:uppercase text-gray-500 font-mono outline-none border-b-2 p-1 bg-transparent tracking-wider my-4"
              placeholder="Name..."
            />
            <input
              type="text"
              //   value=""
              className="text-[15px] first-letter:uppercase text-gray-500 font-mono outline-none border-b-2 p-1 bg-transparent tracking-wider my-4"
              placeholder="+250 7..."
            />
            <input
              type="email"
              //   value=""
              className="text-[15px] first-letter:uppercase text-gray-500 font-mono outline-none border-b-2 p-1 bg-transparent tracking-wider my-4"
              placeholder="Email Address"
            />
            <textarea
              name=""
              id=""
              cols="10"
              rows="3"
              className="text-[15px] first-letter:uppercase text-gray-500 font-mono outline-none border-b-2 p-1 bg-transparent tracking-wider my-4"
              placeholder="Message..."
            ></textarea>
            <Btn />
          </form>
        </div>
      </div>
    </>
  );
};
export default Contact;
