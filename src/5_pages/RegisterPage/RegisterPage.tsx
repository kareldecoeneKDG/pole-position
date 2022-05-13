import React from 'react';

import bannerImg from './article1.jpeg';

function RegisterPage() {
    return (
        <section className="register section formPage">
            <div className="register__content">
                <h2 className="title">Register</h2>
                <p className="p">To make a Pole Position account.</p>

                <form className="register__form custom-form">

                    {/* TEXT INPUTS */}
                    <div className="form__inputs-container">
                        <div className="form-control-forms">
                            <div className="form-group">
                                <input type="text" id="firstName" className="form__input input" name="firstName" placeholder=" " required />
                                <label htmlFor="firstName" className="form__label">First name</label>

                                {/*
                            <i className="fa fa-check-circle" aria-hidden="true"></i>
                            <i className="fa fa-exclamation-triangle" aria-hidden="true"></i>
                            <small>Error message</small>
                            */}
                            </div>
                        </div>

                        <div className="form-control-forms">
                            <div className="form-group">
                                <input type="text" id="lastName" className="form__input input" name="lastName" placeholder=" " required />
                                <label htmlFor="lastName" className="form__label">Last name</label>

                                {/*
                            <i className="fa fa-check-circle" aria-hidden="true"></i>
                            <i className="fa fa-exclamation-triangle" aria-hidden="true"></i>
                            <small>Error message</small>
                            */}
                            </div>
                        </div>

                        <div className="form-control-forms">
                            <div className="form-group">
                                <input type="text" id="salutation" className="form__input input" name="salutation" placeholder=" " required />
                                <label htmlFor="salutation" className="form__label">Salutation</label>

                                {/*
                            <i className="fa fa-check-circle" aria-hidden="true"></i>
                            <i className="fa fa-exclamation-triangle" aria-hidden="true"></i>
                            <small>Error message</small>
                            */}
                            </div>
                        </div>

                        <div className="form-control-forms">
                            <div className="form-group">
                                <input type="text" id="birthDate" className="form__input input" name="birthDate" placeholder=" " required />
                                <label htmlFor="birthDate" className="form__label">Birthdate</label>

                                {/*
                            <i className="fa fa-check-circle" aria-hidden="true"></i>
                            <i className="fa fa-exclamation-triangle" aria-hidden="true"></i>
                            <small>Error message</small>
                            */}
                            </div>
                        </div>

                        <div className="form-control-forms">
                            <div className="form-group">
                                <input type="text" id="country" className="form__input input" name="country" placeholder=" " required />
                                <label htmlFor="country" className="form__label">Country</label>

                                {/*
                            <i className="fa fa-check-circle" aria-hidden="true"></i>
                            <i className="fa fa-exclamation-triangle" aria-hidden="true"></i>
                            <small>Error message</small>
                            */}
                            </div>
                        </div>

                        <hr className="form__line line" />

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

                    {/*
                <div className="register__form__checkbox flex">
                    <input id="newsletter" className="register__form__checkbox__box" type="checkbox" checked />
                    <label className="checkbox-label" htmlFor="newsletter">Sign up for the Pole Position newsletter</label>
                </div>
                */}

                    {/* PIZZA CHECKBOX */}
                    <div className="register__form__checkbox flex">
                        <label className="input-container">
                            <input id="pizzaCheckbox" className="pizzaCheckbox input" type="checkbox" name="pizzaCheckbox" value="pizzaCheckbox" required />
                            <span className="checkmark"></span>
                        </label>
                        <label className="pizza-label checkbox-label" htmlFor="pizzaCheckbox">Sign up for the Pole Position newsletter</label>
                    </div>

                    <p className="custom-form__no-acc p">
                        By clicking on register you agree to the <span className="custom-form__no-acc__link">terms, conditions & privacy policy</span>
                    </p>

                    <button className="button button-primary">Payment <i className="fa fa-chevron-right first-chevron" aria-hidden="true"></i><i className="fa fa-chevron-right" aria-hidden="true"></i></button>
                </form>
            </div>

            <img className="register__img" src={bannerImg} alt="Banner img login page" />
        </section >
    );
}

export default RegisterPage;