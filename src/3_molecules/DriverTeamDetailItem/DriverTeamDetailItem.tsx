import React from 'react';

function DriverTeamDetailItem() {
    return (
        <div className="item flex">
            <div className="flex">
                <div className="item__icon-bg">
                    <i className="fa fa-trophy" aria-hidden="true"></i>
                </div>

                <p className="item__title">
                    World<br />
                    Championships
                </p>
            </div>

            <h2 className="item__number">1x</h2>
        </div>
    );
}

export default DriverTeamDetailItem;