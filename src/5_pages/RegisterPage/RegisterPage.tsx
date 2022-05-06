import React from 'react';

function RegisterPage() {
    return (
        <section className="register section">
            <h2 className="register__title">Register</h2>
            <p className="register__p">To make a Pole Position account.</p>

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
                            <label htmlFor="password" className="form__label">Full Name</label>
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
        </section>
    );
}

export default RegisterPage;