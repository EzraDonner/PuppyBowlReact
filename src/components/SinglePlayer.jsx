import React, { useState, useEffect } from "react";
import { fetchSinglePlayer } from "../API";
import { useNavigate, useParams } from "react-router-dom";

export default function SinglePlayer() {
  const [player, setPlayer] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const getSinglePlayer = async () => {
      const response = await fetchSinglePlayer(id);
      console.log(response);
      setPlayer(response.data.player);
    };
    getSinglePlayer();
  }, []);

  return (
    <>
      <div>Single Player</div>
      <div id="container">
        {player && (

          
          <div key={player.id}>
              <h3>Name {player.name}</h3>
              <h3>Breed {player.breed}</h3>
              <img src={player.imageUrl} />
              <button onClick={() => navigate("/")}>Go Back</button>
            </div>
            
          )
          }
      </div>
    </>
  );
}
