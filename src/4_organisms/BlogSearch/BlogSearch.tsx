import React from 'react';

function BlogSearch() {
    return (
        <div className="blogSearch">
            <h2 className="blogSearch__title">Blog</h2>

            <p className="blogSearch__p">
                Het is al geruime tijd een bekend gegeven dat een lezer, tijdens het bekijken.
            </p>

            <form className="blogSearch__form">
                <input className="blogSearch__form__input" type="text" placeholder="Search on title" />
                <button className="button button-primary skew"><span>Search <i className="fa fa-chevron-right first-chevron" aria-hidden="true"></i><i className="fa fa-chevron-right" aria-hidden="true"></i></span></button>
            </form>
        </div>
    );
}

export default BlogSearch;