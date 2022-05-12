import React from 'react';

import Team from '../../3_molecules/Team/Team';

function MightAlsoLikeTeams() {
    return (
        <section className="mightAlsoLike section">
            <h2 className="section__title">You might also like</h2>

            <div className="mightAlsoLike__drivers-teams">
                <Team />
                <Team />
                <Team />
                {/* <Team /> */}
            </div>
        </section>
    );
}

export default MightAlsoLikeTeams;