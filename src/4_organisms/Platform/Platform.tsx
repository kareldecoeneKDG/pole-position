import React from 'react';
import { Link } from 'react-router-dom';

import PlatformItem from '../../3_molecules/PlatformItem/PlatformItem';

//types
import { PlatformItemType } from '../../types';

interface PlatformProps {
    platformItems: PlatformItemType[]
}

function Platform({ platformItems }: { platformItems: PlatformItemType[] }) {
    return (
        <section id="platform" className="platform section">
            <div className="flex-desktop">
                <div className="platform__heading">
                    <h2 className="platform__title section__title">All-in-one platform</h2>
                    <p className="desktop">
                        This is your number one access to F1 articles, driver & team socials, view their history and more.
                    </p>
                </div>

                <div className="platform__items ">
                    {/*<PlatformItem />
                    <PlatformItem />
                    <PlatformItem />
                    <PlatformItem />*/}

                    {platformItems.map((platformItem: PlatformItemType) => {
                        return <PlatformItem platformItem={platformItem} />
                    })}
                </div>
            </div>

            <div className="signup flex-desktop">
                <div className="signup__content">
                    <h3 className="signup__content__title">$9/month</h3>
                    <p className="signup__content__p">It's cheap as well</p>
                </div>

                <Link className="button button-primary skew" to="/register">
                    <span>Sign me up <i className="fa fa-chevron-right first-chevron" aria-hidden="true"></i><i className="fa fa-chevron-right" aria-hidden="true"></i></span>
                </Link>
            </div>
        </section>
    );
}

export default Platform;