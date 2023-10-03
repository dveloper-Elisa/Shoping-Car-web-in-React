export default function Advant() {
  return (
    <>
      <div className="text-white font-bold tracking-widest text-center py-5 text-[20px]">
        <h2>The Latest Updates for BMW</h2>
      </div>
      <div className="md:flex md:flex-row md:justify-between mx-16">
        <div className="flex flex-col gap-2 max-w-[25vw]">
          <h3 className="text-sky-900 font-bold first-letter:uppercase">
            the new BMW brand.
          </h3>
          <p className="text-[30px] text-white">
            THE NEW RELEASE
            <strong className="text-orange-400 first-line:uppercase">
              <nbsp /> BMW
              <br />
            </strong>
            CAR PRIZE
          </p>
          <p className="text-white">
            here choice is for you and customer is king, make choice
            <code>price is very low than what you expect.</code>
          </p>
          <button className="bg-green-600 rounded text-white w-32 my-2 py-1">
            Buy Now
          </button>
        </div>

        <div className="flex justify-center">
          <img
            src="./public/photo/10-removebg-preview.png"
            alt="first image not found"
            className="-rotate-12 max-w-3xl z-0"
          />
        </div>
      </div>
    </>
  );
}
