import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import FadeIn from 'react-fade-in';

import BlogSearch from '../../4_organisms/BlogSearch/BlogSearch';
import MoreRecentNews from '../../4_organisms/MoreRecentNews/MoreRecentNews';
import Navbar from '../../4_organisms/NavBar/NavBar';

// types
import { ArticleItem } from '../../types';

interface BlogPageProps {
    articles: ArticleItem[],
}

const Fade = require("react-reveal/Fade");

function BlogPage({articles} : BlogPageProps) {
    useEffect(() => {
        //scroll to top on opening
        document.documentElement.scrollTo(0, 0);
    }, []);

    return (
        <FadeIn className="page-flex">
            <section className="blogPage">
                <Helmet>
                    <title>Blog | Pole Positon - F1 Blog</title>
                </Helmet>

                <Navbar />

                <Fade>
                    <BlogSearch />
                </Fade>

                <Fade delay={500}>
                    <MoreRecentNews articles={articles} />
                </Fade>
            </section>
        </FadeIn>
    );
}

export default BlogPage;