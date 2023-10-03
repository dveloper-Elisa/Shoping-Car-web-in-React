export default function NewcarCompnent(pros) {
  return (
    <>
      <div className=" bg-gray-800 p-1 text-white w-fit grid m-auto h-[300px]">
        <h2 className="font-bold tracking-widest">{pros.name}</h2>
        <p>Brand New</p>
        <p className="text-green-600">Egine: {pros.egine}</p>
        <img
          src={`./photo/${pros.image}`}
          alt="Image for the card not found"
          className="p- max-w-[15rem]"
        />
        <div className="flex flex-1 items-end justify-end">
          <i className="fa fa-cart-plus bg-green-600 p-2 rounded-tl-xl rounded-br-xl text-white w-fit static"></i>
        </div>
      </div>
    </>
  );
}
