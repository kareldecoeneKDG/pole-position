import React from 'react';
import List from '../../4_organisms/List';
import { Game } from '../../types';

interface ListPageProps {
    games: Game[],
}

const ListPage = ({games} : ListPageProps) => {
    return (
        <div>
            <List games={games} />
        </div>
    );
}

export default ListPage;