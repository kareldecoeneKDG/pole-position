import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import bannerImg from './article1.jpeg';

function LoginPage() {
    useEffect(() => {
        //scroll to top on opening
        document.documentElement.scrollTo(0, 0);

        //change title of tab
        document.title = "Login | Pole Positon - F1 Blog";
    }, []);

    /* --- FORM FEEDBACK --- */
    //form
    const form = document.querySelector('.login__form');

    //inputs
    const email = document.querySelector('.email') as HTMLInputElement;
    const password = document.querySelector('.password') as HTMLInputElement;

    if (form != null) {

        //If you really want to make the form work, change structure...
        form!.addEventListener('submit', (e) => {
            e.preventDefault();

            checkInputs();
        });
    }

    function checkInputs() {
        const emailValue = email.value.trim();
        const passwordValue = password.value.trim();

        //email input
        if (emailValue === "") {
            setErrorFor(email, 'Email can\'t be blank');
        } else if (!isEmail(emailValue)) {
            setErrorFor(email, 'Email is not valid');
        } else {
            setSuccessFor(email);
        }

        //password input
        if (passwordValue === "") {
            setErrorFor(password, 'Password can\'t be blank')
        } else if (passwordValue.length < 8) {
            setErrorFor(password, 'Password is incorrect (min 8 characters)');
        } else {
            setSuccessFor(password);
        }

        email.addEventListener('input', checkInputs);
        password.addEventListener('input', checkInputs);
    }

    //Function sets error for certain input
    function setErrorFor(input: { parentElement: any; }, message: any) {
        const formGroup = input.parentElement; //form-group
        const small = formGroup.querySelector('small');

        if (small != null) {
            small.innerText = message;
        }

        formGroup.className = 'form-group error';
    }

    //Function sets success for certain input
    function setSuccessFor(input: { parentElement: any; }) {
        const formGroup = input.parentElement;
        formGroup.className = 'form-group success';
    }

    //Function to check if value is mail
    function isEmail(email: string) {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    }

    return (
        <section className="login section formPage">
            <div className="login__content">
                <h2 className="title">Login</h2>
                <p className="p">Please enter your email and password.</p>

                <form className="login__form custom-form">

                    {/* TEXT INPUTS */}
                    <div className="form__inputs-container">

                        {/* EMAIL INPUT */}
                        <div className="form-control-forms">
                            <div className="form-group">
                                <input type="text" id="email" className="form__input input email" name="email" placeholder=" " />
                                <label htmlFor="email" className="form__label">Email</label>

                                {/* form feedback */}
                                <i className="fa fa-check-circle" aria-hidden="true"></i>
                                <i className="fa fa-exclamation-triangle" aria-hidden="true"></i>
                                <small>Error message</small>
                            </div>
                        </div>

                        {/* PASSWORD INPUT */}
                        <div className="form-control-forms">
                            <div className="form-group">
                                <input id="password" className="form__input input password" type="password" name="password" placeholder=" " />
                                <label htmlFor="password" className="form__label">Password</label>

                                {/* form feedback */}
                                <i className="fa fa-check-circle" aria-hidden="true"></i>
                                <i className="fa fa-exclamation-triangle" aria-hidden="true"></i>
                                <small>Error message</small>
                            </div>
                        </div>
                    </div>

                    <p className="custom-form__disclaimer">
                        By login you agree to <span className="custom-form__disclaimer__link">terms & conditions</span>
                    </p>

                    <div className="flex">
                        <button className="button button-primary skew" type="submit"><span>Login <i className="fa fa-chevron-right first-chevron" aria-hidden="true"></i><i className="fa fa-chevron-right" aria-hidden="true"></i></span></button>
                        <a className="custom-form__forgot-pw p" href="#">Forgot password?</a>
                    </div>

                    <p className="custom-form__no-acc p">
                        Don't have an account yet?<br />

                        <Link className="custom-form__no-acc__link" to="/register">
                            Create account
                        </Link>
                    </p>
                </form>
            </div>

            <img className="login__img" src={bannerImg} alt="Banner img login page" />
        </section>
    );
}

export default LoginPage;