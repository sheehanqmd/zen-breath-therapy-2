import React from 'react'
import StripeCheckout from 'react-stripe-checkout';
import Cart from "./cart/Cart";


export default class CheckoutForm extends React.Component {
  onToken = (token) => {
    fetch('/save-stripe-token', {
      method: 'POST',
      body: JSON.stringify(token),
    }).then(response => {
      response.json().then(data => {
        alert(`Checkout, ${data.email}`);
      });
    });
  }

  // ...

  render() {
    return (
      // ...PUBLIC KEY
      <StripeCheckout
        token={this.onToken}
        stripeKey="pk_test_fCsl61Lrhj9Avk7NxHRBmZe800wot3l4za"


      />
    )
  }
}