import { useParams } from "react-router-dom";
import { Game } from "../../types";

interface ParamTypes {
    //[id: string]: string
    id: string | undefined
}

interface DetailPageProps {
    games: Game[]
}

function DetailPage({games} : DetailPageProps) {
    let { id } = useParams();
    let game = games.find((game: Game) => game.id === parseInt(id!));

    return (
        <div>
            <div>{game?.name}</div>
            <div>{game?.releaseYear}</div>
            <div>{game?.sales}</div>
        </div>
    )
}

export default DetailPage;