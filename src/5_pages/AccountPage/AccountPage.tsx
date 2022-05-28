import React, { useEffect, useState } from 'react';

import Settings from '../../4_organisms/Settings/Settings';
import Subnav from '../../4_organisms/Subnav/Subnav';

function AccountPage() {
    useEffect(() => {
        //scroll to top on opening
        document.documentElement.scrollTo(0, 0);

        //change title of tab
        document.title = "Account | Pole Positon - F1 Blog";
    }, []);

    const [selected, setSelected] = useState("");

    if (selected == "") {
        setSelected("Account");
    }

    return (
        <div className="dashboard">
            <Subnav selected={selected} setSelected={setSelected} />
            <Settings />
        </div>
    );
}

export default AccountPage;