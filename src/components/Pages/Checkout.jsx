import React from "react";
import AuthForm from "../Checkout/AuthForm.jsx";
import OrderSummary from "../Checkout/OrderSummary.jsx";
import BillingDetails from "../Checkout/BillingDetails.jsx";
import PaymentMethod from "../Checkout/PaymentMethod.jsx";

export default function Checkout() {

    const Auth = false; // Placeholder for authentication state
    const added = false; // Placeholder for billing details state

    return (
        <div className="min-h-screen py-4 px-4 lg:px-56">
            <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-4">
                {/* Left Side */}
                <div className="md:col-span-2 space-y-5">
                    {!Auth && <AuthForm />}
                    {!added ? <BillingDetails auth={Auth} /> : ""}
                    <PaymentMethod auth={Auth} added={added} />
                </div>

                {/* Right Side */}

                <OrderSummary />
            </div>
        </div>
    );
}



