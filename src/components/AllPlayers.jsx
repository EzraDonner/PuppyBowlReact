import React, { useState, useEffect } from "react";
import { fetchAllPlayers } from "../API";
import { useNavigate } from "react-router-dom";

export default function AllPlayers() {
  const [players, setPlayers] = useState([]);
  const navigate = useNavigate();
  const [filteredPlayers, setFilteredPlayers] = useState([]);
  
  
  useEffect(() => {
    const getAllPlayers = async () =>{
    const response = await fetchAllPlayers();
    
    setPlayers(response.data.players);
    console.log('RESPONSE: ', response);
   
    }
    getAllPlayers();
  }, []);


  const searchBar = players.length ? 
  players.filter((name) => name.name.includes(filteredPlayers)) : [];

  return (  
    <>
      <input type="text" placeholder="Search Here" value={filteredPlayers} onChange={(e) => setFilteredPlayers(e.target.value)}></input>


      <div>AllPlayers</div>
      <div id="container">
        {searchBar &&
          searchBar.map((puppy) => (
            <div key={puppy.id}>
              <img src={puppy.imageUrl} />
              <h3>{puppy.name}</h3>
              <p>{puppy.breed}</p>
              <button onClick={() => navigate(`/players/${puppy.id}`)}>See Details</button>
            </div>
          ))}
      </div>
    </>
  );
}
