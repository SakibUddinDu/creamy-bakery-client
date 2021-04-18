import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import SimpleForm from './SimpleForm';

// import SplitCardForm from './SplitCardForm';

const stripePromise = loadStripe('pk_test_51Ie9AOSCv8z2a4PzXOP4MPoOVO4khg5bcvvRMfoxugwNZM4I3K8sQn6bZceksXwDH5dfUuwiqDRpADvZ9nT02QjN00WTfZmZdo');

const PaymentProcess = () => {
    return (
        <Elements stripe={stripePromise}>
            <SimpleForm ></SimpleForm>
        </Elements>
    );
};

export default PaymentProcess;