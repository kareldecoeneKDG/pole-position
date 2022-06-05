import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';

import Settings from '../../4_organisms/Settings/Settings';
import Subnav from '../../4_organisms/Subnav/Subnav';

function AccountPage() {
    useEffect(() => {
        //scroll to top on opening
        document.documentElement.scrollTo(0, 0);
    }, []);

    const [selected, setSelected] = useState("");

    if (selected == "") {
        setSelected("Account");
    }

    return (
        <div className="dashboard">
            <Helmet>
                <title>Account | Pole Positon - F1 Blog</title>
            </Helmet>

            <Subnav selected={selected} setSelected={setSelected} />
            <Settings />
        </div>
    );
}

export default AccountPage;