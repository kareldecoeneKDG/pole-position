import React from 'react';

//types
import { BenefitItem } from '../../types';

interface BenefitProps {
    benefit: BenefitItem
}

function Benefit({ benefit }: BenefitProps) {
    return (
        <div className="benefit">
            <div className="icon-bg-lg">
                <i className={`fa ${benefit.icon}`} aria-hidden="true"></i>
            </div>

            <h4 className="benefit__title">{benefit.title}</h4>

            <p className="benefit__p">{benefit.paragraph}</p>
        </div>
    );
}

export default Benefit;