import React from 'react';
import { Link } from 'react-router-dom';

import Benefit from '../../3_molecules/Benefit/Benefit';

//types
import { BenefitItem } from '../../types';

interface BenefitsProps {
    benefits: BenefitItem[]
}

function Benefits({ benefits }: { benefits: BenefitItem[] }) {
    return (
        <section id="benefits" className="benefits section">
            <h2 className="benefits__title section__title">Discuss the next F1 GP live with others</h2>

            <p className="benefits__p">
                Are you in search of a true F1 community where you can find <br className="desktop" />all latest info related to F1?
            </p>

            <div className="benefits__items flex-desktop">
                {/*<Benefit />
                <Benefit />
                <Benefit />
                <Benefit />*/}
                {benefits.map((benefit: BenefitItem) => {
                    return <Benefit benefit={benefit} />
                })}
            </div>

            <p className="cta__p">You've heard enough?</p>

            <Link className="button button-primary skew" to="/register">
                <span>Sign me up <i className="fa fa-chevron-right first-chevron" aria-hidden="true"></i><i className="fa fa-chevron-right" aria-hidden="true"></i></span>
            </Link>
        </section>
    );
}

export default Benefits;