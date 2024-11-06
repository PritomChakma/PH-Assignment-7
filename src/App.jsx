import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import AvailablePlayer from "./Components/AvailablePlayer";
import Banner from "./Components/Banner";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Newsletter from "./Components/Newsletter";

function App() {
  const [balance, setBalance] = useState(0);
  //for active button
  const [isActive, setIsActive] = useState({
    cart: true,
    status: "cart",
  });
  const [selected, setSelected] = useState([]);
  const handleSelectedPlayer = (player) => {
    const newSelected = [...selected, player];
    setSelected(newSelected);
  };
  const [players, setPlayers] = useState([]);

  const handleDeletePlayer = (id) => {
    const remainingPlayer = players.filter((p) => p.id !== id);
    setPlayers(remainingPlayer);
  };
  //for active button
  const handleIsActiveState = (status) => {
    if (status == "cart") {
      setIsActive({
        cart: true,
        status: "cart",
      });
    } else {
      setIsActive({
        cart: false,
        status: "about",
      });
    }
  };

  // react tostify
  const notify = () => {
    toast.success("Successfully Money Added", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  // add money balance
  const notify2 = () => {
    toast.success("Congratulation!! Player Added ", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  // add money balance

  const addMoney = (amount) => {
    setBalance((prevBalance) => prevBalance + amount);
  };
  const minusMoney = (amount) => {
    setBalance((prevBalance) => prevBalance - amount);
  };

  return (
    <div className="w-11/12 mx-auto">
      {/* header section */}
      <Header balance={balance}></Header>

      {/* banner section */}
      <Banner notify={notify} addMoney={addMoney}></Banner>

      {/* available Player section */}
      <AvailablePlayer
        notify2={notify2}
        handleIsActiveState={handleIsActiveState}
        handleSelectedPlayer={handleSelectedPlayer}
        isActive={isActive}
        selected={selected}
        minusMoney={minusMoney}
        handleDeletePlayer={handleDeletePlayer}
      ></AvailablePlayer>

      {/* Players section */}
      {/* <Players handleSelectedPlayer={handleSelectedPlayer}></Players> */}
      <Newsletter></Newsletter>
      <Footer></Footer>
    </div>
  );
}

export default App;
