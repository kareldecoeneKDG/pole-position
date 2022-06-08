import React from 'react';
import { Game } from '../types';
import ListItem from "../3_molecules/ListItem";

interface ListProps {
    games: Game[]
}

function List({games}: {games: Game[]}) {
    return (
        <div>
            <ul>{games.map((game: Game) => {
                return <ListItem game={game} />
            })}</ul>
        </div>
    );
}

export default List;