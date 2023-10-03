export default function Footer() {
  return (
    <div className="flex flex-col  border-t-green-800 border-t-2 justify-center my-3 mx-16 mb-10 ">
      {/* end of form crearion */}
      <div className="md:flex md:flex-row flex flex-col justify-between">
        <div className="text-white flex flex-col gap-5">
          <h2 className="underline font-extralight">Quick Contact</h2>
          <li className="list-none flex gap-2 items-center">
            <i className="fa fa-github-square text-[25px] hover:bg-black hover:scale-125 duration-500 cursor-pointer"></i>
            <span>github</span>
          </li>
          <li className="list-none flex gap-2 items-center">
            <i className="fa fa-facebook-official text-[25px] hover:bg-black hover:scale-125 duration-500 cursor-pointer"></i>
            <span>FaceBook</span>
          </li>
          <li className="list-none flex gap-2 items-center">
            <i className="fa fa-linkedin-square text-[25px] hover:bg-black hover:scale-125 duration-500 cursor-pointer"></i>
            <span>Linked In</span>
          </li>
        </div>
        <div className="flex flex-col gap-5">
          <h2 className="underline text-white font-extralight">
            More About Us
          </h2>
          <li className="text-white list-none flex gap-3">
            <i className="fa fa-foursquare text-[25px]"></i>
            <span>FAQ</span>
          </li>
          <li className="text-white list-none flex gap-3">
            <i className="fa fa-quora text-[25px]"></i>
            <span>How do we work</span>
          </li>
        </div>
        <div className="flex flex-col gap-5">
          <h2 className="underline text-white font-extralight">Contacts</h2>
          <li className="text-white list-none flex gap-2">
            <i className="fa fa-phone text-[25px]"></i>
            <span>
              +250 787647168 <br />
              +250 726982830
            </span>
          </li>
          <li className="text-white list-none flex gap-2">
            <i className="fa fa-envelope-o text-[25px]"></i>
            <span>kwizeraelisa@gmail.com</span>
          </li>
        </div>
      </div>
    </div>
  );
}
