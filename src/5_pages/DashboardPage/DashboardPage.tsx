import React, { useEffect } from 'react';

import SubNav from '../../4_organisms/SubNav/SubNav';
import SavedBlogposts from '../../4_organisms/SavedBlogposts/SavedBlogposts';
import LatestGP from '../../4_organisms/LatestGP/LatestGP';
import Settings from '../../4_organisms/Settings/Settings';

function DashboardPage() {
    useEffect(() => { document.documentElement.scrollTo(0,0); }, []);
    
    return (
        <div className="dashboard">
            <SubNav />

            
            
            
            <SavedBlogposts />
            <LatestGP />
            
            
            

            {/* <Settings /> */}
        </div>
    );
}

export default DashboardPage;