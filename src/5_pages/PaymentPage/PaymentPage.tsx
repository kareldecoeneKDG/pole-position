import React from 'react';

function PaymentPage() {
    return (
        <section className="payment section formPage">
            <h2 className="title">Payment</h2>
            <p className="p">Small cost, big value.</p>

            <form className="payment__form custom-form">
                {/* TEXT INPUTS */}
                <div className="form__inputs-container">
                    <div className="form-control-forms">
                        <div className="form-group">
                            <input type="text" id="nameCardHolder" className="form__input input" name="nameCardHolder" placeholder=" " required />
                            <label htmlFor="nameCardHolder" className="form__label">Name card holder</label>

                            {/*
                            <i className="fa fa-check-circle" aria-hidden="true"></i>
                            <i className="fa fa-exclamation-triangle" aria-hidden="true"></i>
                            <small>Error message</small>
                            */}
                        </div>
                    </div>

                    <div className="form-control-forms">
                        <div className="form-group">
                            <input type="text" id="creditCardNumber" className="form__input input" name="creditCardNumber" placeholder=" " required />
                            <label htmlFor="creditCardNumber" className="form__label">Credit card number</label>

                            {/*
                            <i className="fa fa-check-circle" aria-hidden="true"></i>
                            <i className="fa fa-exclamation-triangle" aria-hidden="true"></i>
                            <small>Error message</small>
                            */}
                        </div>
                    </div>

                    <div className="form-control-forms">
                        <div className="form-group">
                            <input type="text" id="expiration" className="form__input input" name="expiration" placeholder=" " required />
                            <label htmlFor="expiration" className="form__label">Expiration</label>

                            {/*
                            <i className="fa fa-check-circle" aria-hidden="true"></i>
                            <i className="fa fa-exclamation-triangle" aria-hidden="true"></i>
                            <small>Error message</small>
                            */}
                        </div>
                    </div>

                    <div className="form-control-forms">
                        <div className="form-group">
                            <input type="text" id="cvv" className="form__input input" name="cvv" placeholder=" " required />
                            <label htmlFor="cvv" className="form__label">CVV</label>

                            {/*
                            <i className="fa fa-check-circle" aria-hidden="true"></i>
                            <i className="fa fa-exclamation-triangle" aria-hidden="true"></i>
                            <small>Error message</small>
                            */}
                        </div>
                    </div>
                </div>

                <button className="button button-primary">Continue <i className="fa fa-chevron-right first-chevron" aria-hidden="true"></i><i className="fa fa-chevron-right" aria-hidden="true"></i></button>
            </form>
        </section>
    );
}

export default PaymentPage;