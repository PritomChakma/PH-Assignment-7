import { useEffect, useState } from "react";
const Players = ({ handleSelectedPlayer, minusMoney, notify2 }) => {
  const [players, setPlayers] = useState([]);
  useEffect(() => {
    fetch("./players.json")
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, []);

  return (
    <div className="md:grid md: grid-cols-3 gap-5 mt-10 mb-20">
      {players.map((player) => (
        <div
          key={player.playerId}
          className="card card-compact bg-base-100  shadow-xl mt-10 md:mt-5"
        >
          <figure>
            <img
              className="h-52 rounded-xl "
              src={player.image}
              alt="Crickter"
            />
          </figure>
          <div className="card-body">
            {/* name */}
            <div className="flex items-center gap-3">
              <i className="fa-solid fa-user"></i>
              <h3 className="font-bold ">{player.name}</h3>
            </div>
            {/* country */}
            <div className="flex items-center justify-between text-gray-600 border-b-2 pb-2">
              <i className="fa-solid fa-flag"></i>
              <h3 className="">{player.country}</h3>
            </div>
            {/* rating */}
            <p className="font-bold">Rating</p>
            {/* hand */}
            <div className="flex justify-between items-center">
              <h5 className="font-bold">{player.battingType}</h5>
              <h5>{player.bowlingType}</h5>
            </div>
            <div className="flex justify-between items-center">
              <p className="font-bold">Price: ${player.biddingPrice}</p>
              <button
                onClick={() => {
                  handleSelectedPlayer(player);
                  minusMoney(7000);
                  notify2();
                }}
                // onClick={() => handleSelectedPlayer(player) }
                className="px-3 py-1 rounded-xl bg-gray-200 font-semibold"
              >
                Choose Player
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Players;
