import React from 'react';

import bannerImg from './article1.jpeg';

function LoginPage() {
    return (
        <section className="login section formPage">
            <div className="login__content">
                <h2 className="title">Login</h2>
                <p className="p">Please enter your email and password.</p>

                <form className="login__form custom-form">

                    {/* TEXT INPUTS */}
                    <div className="form__inputs-container">
                        <div className="form-control-forms">
                            <div className="form-group">
                                <input type="text" id="email" className="form__input input" name="email" placeholder=" " required />
                                <label htmlFor="email" className="form__label">Email</label>

                                {/*
                            <i className="fa fa-check-circle" aria-hidden="true"></i>
                            <i className="fa fa-exclamation-triangle" aria-hidden="true"></i>
                            <small>Error message</small>
                            */}
                            </div>
                        </div>

                        <div className="form-control-forms">
                            <div className="form-group">
                                <input id="password" className="form__input input" type="password" name="password" placeholder=" " required />
                                <label htmlFor="password" className="form__label">Password</label>
                                {/*
                            <i className="fa fa-check-circle" aria-hidden="true"></i>
                            <i className="fa fa-exclamation-triangle" aria-hidden="true"></i>
                            <small>Error message</small>
                            */}
                            </div>
                        </div>
                    </div>

                    <p className="custom-form__disclaimer">
                        By login you agree to <span className="custom-form__disclaimer__link">terms & conditions</span>
                    </p>

                    <div className="flex">
                        <a className="button button-primary">Login <i className="fa fa-chevron-right first-chevron" aria-hidden="true"></i><i className="fa fa-chevron-right" aria-hidden="true"></i></a>
                        <a className="custom-form__forgot-pw p" href="#">Forgot password?</a>
                    </div>

                    <p className="custom-form__no-acc p">
                        Don't have an account yet?<br />
                        <span className="custom-form__no-acc__link">Create account</span>
                    </p>
                </form>
            </div>

            <img className="login__img" src={bannerImg} alt="Banner img login page" />
        </section>
    );
}

export default LoginPage;