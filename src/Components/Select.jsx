const Select = ({ selected, handleDeletePlayer }) => {
  const { image, name, battingType, playerId } = selected;

  return (
    <div className="collapse collapse-plus bg-base-200 mt-5 border-2">
      <div className="flex justify-between items-center p-5">
        <div className="flex gap-2 items-center">
          <img className="w-16 h-16 rounded-full" src={image} alt="" />

          <div>
            <p className="font-bold text-lg">{name}</p>
            <p>{battingType}</p>
          </div>
        </div>
        <button onClick={() => handleDeletePlayer(playerId)}>
          <i className="fa-solid fa-trash"></i>
        </button>
      </div>
    </div>
  );
};

export default Select;
