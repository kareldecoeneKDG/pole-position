import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import FadeIn from 'react-fade-in';

import BlogSearch from '../../4_organisms/BlogSearch/BlogSearch';
import MoreRecentNews from '../../4_organisms/MoreRecentNews/MoreRecentNews';
import Navbar from '../../4_organisms/NavBar/NavBar';

const Fade = require("react-reveal/Fade");

function BlogPage() {
    useEffect(() => {
        //scroll to top on opening
        document.documentElement.scrollTo(0, 0);
    }, []);

    return (
        <FadeIn>
            <section className="blogPage">
                <Helmet>
                    <title>Blog | Pole Positon - F1 Blog</title>
                </Helmet>

                <Navbar />

                <Fade>
                    <BlogSearch />
                </Fade>

                <Fade delay={500}>
                    <MoreRecentNews />
                </Fade>
            </section>
        </FadeIn>
    );
}

export default BlogPage;