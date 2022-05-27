import React, { useEffect, useState } from 'react';

import SubNav from '../../4_organisms/SubNav/SubNav';
import SavedBlogposts from '../../4_organisms/SavedBlogposts/SavedBlogposts';
import LatestGP from '../../4_organisms/LatestGP/LatestGP';
import Settings from '../../4_organisms/Settings/Settings';
import Dropdown from '../../Dropdown';

function DashboardPage() {
    useEffect(() => { document.documentElement.scrollTo(0,0); }, []);

    const [selected, setSelected] = useState("");
    //console.log(selected);

    if(selected == "") {
        setSelected("Saved Blogposts");
    }
    
    return (
        <div className="dashboard">
            {/* Subnavigation */}
            <Dropdown selected={selected} setSelected={setSelected} />

            
            
            {/* Saved blogposts content */}
            <SavedBlogposts />
            <LatestGP />
        </div>
    );
}

export default DashboardPage;