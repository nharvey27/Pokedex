import React from 'react';

const Profile = ({ pokemon }) => (
  <div className="col-md-12">
    <div className="row">
      <div className="col-md-6 ability-col">
        <p className="ability-title">tid:</p>
        <p className="pokemon-id pokemon-ability">#{pokemon.id}</p>
      </div>
      <div className="col-md-6 ability-col">
        <p className="ability-title">Weight:</p>
        <p className="pokemon-weight pokemon-ability">
          {pokemon.weight} kg's
        </p>
      </div>
    </div>
    <div className="row">
      <div className="col-md-6 ability-col">
        <p className="ability-title">Height:</p>
        <p className="pokemon_height pokemon-ability">{pokemon.height} m's</p>
      </div>
      <div className="col-md-6 ability-col">
        <p className="ability-title">BaseExp:</p>
        <p className="pokemon-base_exp pokemon-ability">{pokemon.base_exp}</p>
      </div>
    </div>
    <div className="row">
      <div className="col-md-6 ability-col">
        <p className="ability-title">Abilities:</p>
        <ul className="ability-list">
          {pokemon.abilities.map(ability =>
              (<li key={ability.name} className="ability-name pokemon-ability">
                {' '}{ability.name}
               </li>))}
        </ul>
      </div>
    </div>
  </div>
);

export default Profile;
