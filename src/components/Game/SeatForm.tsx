import { useContext, useEffect, useState } from "react";
import { LoginContext } from "../../context/Context";
import InputField from "../InputField/InputField";
import LoginButton from "../LoginButton/LoginButton";
import { exit } from "process";

function SeatForm() {
    const [gameFormData, setGameFormData] = useState({
      name: '',
      size: '',
    });
    const [isFormValid, setIsFormValid] = useState(false);
    const gameNameObject = {
      placeholder: 'Name of Game',
      className: 'inputType-name',
      name: 'name',
    };
    const gameSizeObject = {
      placeholder: 'Size of Game',
      className: 'inputType-size',
      name: 'size',
    };
    const context = useContext(LoginContext);
    const handleChange = (event) => {
      setGameFormData({
        ...gameFormData,
        [event.target.name]: event.target.value,
      });
    };
    const handleSubmit = (event) => {
      event.preventDefault();
  
      const dataToSend = {
        user_1_id: 1,
        user_2_id: 2,
        user_1_game_state_id: '',
        user_2_game_state_id: '',
        n_game: gameFormData.size
      };
      
  const intervalId = setInterval(() => {
    fetch('http://localhost:3000/game', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend),
      })
        .then((response) => {
            return response.json();
        })
        .then((data: { id: number }) => {
            if (data.id) {
            context.setShowView('game');
            clearInterval(intervalId);
            }
        })
        .catch((error) => {
            console.log(error);
        });
      }, 5000);
    };
    useEffect(() => {
      console.log(gameFormData);
      setIsFormValid(!!gameFormData.name && !!gameFormData.size);
    }, [gameFormData]);
  
    return (
      <div className="seatForm">
        <form onSubmit={handleSubmit}>
          <InputField type={gameNameObject} onChange={handleChange}></InputField>
          <InputField type={gameSizeObject} onChange={handleChange}></InputField>
          <LoginButton disabled={!isFormValid} type="submitButton">
            Seat
          </LoginButton>
        </form>
      </div>
    );
  }
  
  export default SeatForm;
