import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';

import BlogSearch from '../../4_organisms/BlogSearch/BlogSearch';
import MoreRecentNews from '../../4_organisms/MoreRecentNews/MoreRecentNews';
import Navbar from '../../4_organisms/NavBar/NavBar';

function BlogPage() {
    useEffect(() => {
        //scroll to top on opening
        document.documentElement.scrollTo(0, 0);
    }, []);

    return (
        <section className="blogPage">
            <Helmet>
                <title>Blog | Pole Positon - F1 Blog</title>
            </Helmet>

            <Navbar />
            <BlogSearch />
            <MoreRecentNews />
        </section>
    );
}

export default BlogPage;