import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";

import Article from '../../3_molecules/Article/Article';

function SavedBlogposts() {
    return (
        <section className="savedBlogposts section">
            <Article />
            <Article />
            <Article />
            <Article />

            <div className="center">
                <a className="button button-tertiary">More articles <i className="fa fa-chevron-down first-chevron" aria-hidden="true"></i></a>
            </div>
        </section>
    );
}

export default SavedBlogposts;