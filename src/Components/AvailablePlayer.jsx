import Players from "./Players";
import Selected from "./Selected";

const AvailablePlayer = ({
  notify2,
  handleDeletePlayer,
  minusMoney,
  selected,
  handleIsActiveState,
  isActive,
  handleSelectedPlayer,
}) => {
  return (
    <div className=" mx-auto items-center mt-20">
      <div className="flex justify-between items-center">
        {/* text */}
        {/* <div className="font-bold md:text-2xl">Available Player</div> */}
        <h1 className="font-bold md:text-2xl">{`${
          isActive.cart ? "Available Player" : "Selected Player "
        }`}</h1>
        {/* button */}
        <div className="flex gap-5">
          <button
            onClick={() => handleIsActiveState("cart")}
            className={`${
              isActive.cart
                ? "btn bg-[#E7FE29] font-semibold rounded-l-lg"
                : "btn rounded-l-lg"
            }`}
          >
            Available
          </button>
          <button
            onClick={() => handleIsActiveState("about")}
            className={`${
              isActive.cart ? "btn " : "btn bg-[#E7FE29] font-semibold"
            }`}
          >
            Selected ({selected.length})
          </button>
        </div>
      </div>

      {isActive.cart ? (
        <Players
          notify2={notify2}
          handleSelectedPlayer={handleSelectedPlayer}
          minusMoney={minusMoney}
        ></Players>
      ) : (
        <Selected
          selected={selected}
          handleDeletePlayer={handleDeletePlayer}
          handleIsActiveState={handleIsActiveState}
          isActive={isActive}
        ></Selected>
      )}
    </div>
  );
};

export default AvailablePlayer;
