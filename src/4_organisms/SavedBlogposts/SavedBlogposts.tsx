import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";

import Article from '../../3_molecules/Article/Article';

function SavedBlogposts() {
    return (
        <section className="savedBlogposts section">
            <div className="welcome desktop">
                <h2 className="welcome__title">Hi Karel, how are you?</h2>
                <p className="welcome__p">Find your saved blogposts below</p>
            </div>

            <div className="savedBlogposts__articles">
                <Article />
                <Article />
                <Article />
                <Article />
                <Article />
                <Article />
            </div>

            <div className="center">
                <a className="button button-tertiary">More articles <i className="fa fa-chevron-down first-chevron" aria-hidden="true"></i></a>
            </div>
        </section>
    );
}

export default SavedBlogposts;