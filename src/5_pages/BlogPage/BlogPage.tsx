import React, { useEffect } from 'react';

import BlogSearch from '../../4_organisms/BlogSearch/BlogSearch';
import MoreRecentNews from '../../4_organisms/MoreRecentNews/MoreRecentNews';

function BlogPage() {
    useEffect(() => {
        //scroll to top on opening
        document.documentElement.scrollTo(0, 0);

        //change title of tab
        document.title = "Blog | Pole Positon - F1 Blog";
    }, []);

    return (
        <section className="blogPage">
            <BlogSearch />
            <MoreRecentNews />
        </section>
    );
}

export default BlogPage;