import React from 'react';
import StripeCheckout from 'react-stripe-checkout';


const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_O6HDRHcJG8IKpwuZGnvPpaSR00lJoMP0T8'
  
  const onToken = token => {
    console.log(token)
    alert('Payment Successful')
  }

  return (
    <StripeCheckout 
      label='Pay Now'
      name='Konya-designs'
      billingAddress
      shippingAddress
      description={`Your total is £${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;

