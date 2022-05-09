import React from 'react';

import BlogSearch from '../../4_organisms/BlogSearch/BlogSearch';
import MoreRecentNews from '../../4_organisms/MoreRecentNews/MoreRecentNews';

function BlogPage() {
    return (
        <section className="blogPage">
            <BlogSearch />
            <MoreRecentNews />
        </section>
    );
}

export default BlogPage;