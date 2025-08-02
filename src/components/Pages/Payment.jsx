import React from "react";
import AuthForm from "../PaymentComponents/AuthForm.jsx";
import OrderSummary from "../PaymentComponents/OrderSummary.jsx";
import BillingDetails from "../PaymentComponents/BillingDetails.jsx";
import PaymentMethod from "../PaymentComponents/PaymentMethod.jsx";

export default function Checkout() {

    const Auth = false; // Placeholder for authentication state

    return (
        <div className="min-h-screen py-4 px-4 lg:px-56">
            <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-4">
                {/* Left Side */}
                <div className="md:col-span-2 space-y-5">
                    {!Auth && <AuthForm />}
                    <BillingDetails />
                    <PaymentMethod />
                </div>

                {/* Right Side */}

                <OrderSummary />
            </div>
        </div>
    );
}



