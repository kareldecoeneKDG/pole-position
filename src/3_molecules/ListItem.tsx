import React from "react";
import { Game } from "../types";
import { Link } from "react-router-dom";

interface ListItemProps {
    game: Game
}

const ListItem = ({ game }: ListItemProps) => {
    return (
        <Link to={`/detail/${game.id}`}>
            <div key={game.id}>
                <div>{game.name}</div>
                <div>{game.releaseYear}</div>
                <div>{game.sales}</div>
            </div>
        </Link>
    )
}

export default ListItem;