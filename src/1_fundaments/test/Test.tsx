import React from 'react';
import './test.scss';
import '../fundaments.scss';
import '../../2_atoms/atoms.scss';

function Test() {
    return (
        <div className="test__p">
            This is not a test.

            <a className="button button-primary" href="#">Read article</a>
            <p className="tag team">team</p>

            <p>
                Dit is een test voor de text color.
            </p>
        </div>
    );
}

export default Test;