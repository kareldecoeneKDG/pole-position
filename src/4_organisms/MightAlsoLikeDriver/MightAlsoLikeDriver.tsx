import React from 'react';

import Driver from'../../3_molecules/Driver/Driver';

function MightAlsoLike() {
    return (
        <section className="mightAlsoLike section">
            <h2 className="section__title">You might also like</h2>

            <div className="mightAlsoLike__drivers">
                <Driver />
                <Driver />
                <Driver />
                <Driver />
            </div>
        </section>
    );
}

export default MightAlsoLike;