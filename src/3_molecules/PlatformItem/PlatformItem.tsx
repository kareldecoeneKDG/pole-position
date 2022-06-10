import React from 'react';

//types
import { PlatformItemType } from '../../types';

interface PlatformItemProps {
    platformItem: PlatformItemType
}

function PlatformItem({ platformItem }: PlatformItemProps) {
    return (
        <div className="platform-item">
            <h4 className="platform-item__title"><i className="fa fa-check" aria-hidden="true"></i> {platformItem.title}</h4>

            <p className="platform-item__p">
                Het is al geruime tijd een bekend gegeven dat een lezer, tijdens het.
            </p>
        </div>
    );
}

export default PlatformItem;