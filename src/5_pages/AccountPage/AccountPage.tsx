import React, { useEffect, useState } from 'react';

import Settings from '../../4_organisms/Settings/Settings';
import Dropdown from '../../Dropdown';

function AccountPage() {
    useEffect(() => { document.documentElement.scrollTo(0,0); }, []);

    const [selected, setSelected] = useState("");
    //console.log(selected);

    if(selected == "") {
        setSelected("Account");
    }
    
    return (
        <div className="dashboard">
            <Dropdown selected={selected} setSelected={setSelected} />
            <Settings />
        </div>
    );
}

export default AccountPage;