import Select from "./Select";

const Selected = ({
  selected,
  handleDeletePlayer,
  handleIsActiveState,
  isActive,
}) => {
  return (
    <div className="mt-10 mb-10">
      {/* <h1 className="text-2xl font-bold">Selected Player {selected.length}</h1> */}
      {selected.map((select) => (
        <Select
          key={select.playerId}
          selected={select}
          handleDeletePlayer={handleDeletePlayer}
        ></Select>
      ))}
      {/* <button className="mt-20 btn font-bold bg-[#E7FE29]">
        Add more player
      </button> */}

      <button
        onClick={() => handleIsActiveState("cart")}
        className="btn font-bold bg-[#E7FE29] mt-10"
      >
        Add More Player
      </button>
    </div>
  );
};

export default Selected;
