import React, { useEffect, useState } from 'react';

import Settings from '../../4_organisms/Settings/Settings';
import Subnav from '../../4_organisms/Subnav/Subnav';

function AccountPage() {
    useEffect(() => { document.documentElement.scrollTo(0,0); }, []);

    const [selected, setSelected] = useState("");

    if(selected == "") {
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