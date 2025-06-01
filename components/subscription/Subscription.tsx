"use client";
import React, { useState } from "react";

const Subscription: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<"annual" | "monthly">(
    "annual"
  );
  const [selectedPlan, setSelectedPlan] = useState<string>("Premium");

  const plans = [
    {
      name: "Basic",
      monthlyPrice: 143,
      annualPrice: 1716,
      annualSavings: 16,
      features: [
        "Small reply boost",
        "Encrypted direct messages",
        "Bookmark folders",
        "Highlights tab",
        "Edit post",
        "Longer posts",
      ],
    },
    {
      name: "Premium",
      monthlyPrice: 356,
      annualPrice: 4272,
      annualSavings: 16,
      features: [
        "Everything in Basic, and",
        "Half Ads in For You and Following",
        "Larger reply boost",
        "Get paid to post",
        "Checkmark",
        "Grok with increased limits",
        "X Pro, Analytics, Media Studio",
        "Creator Subscriptions",
      ],
    },
    {
      name: "Premium+",
      monthlyPrice: 2200,
      annualPrice: 26400,
      annualSavings: 14,
      features: [
        "Everything in Premium, and",
        "Fully ad-free",
        "Largest reply boost",
        "Write Articles",
        "Radar",
        "Grok AI",
        "Highest usage limits",
        "Unlock DeepSearch & Think",
        "Early access to new features",
      ],
    },
  ];

  return (
    <div className="subscription">
      <h1 className="subscription-header">Upgrade to Premium</h1>
      <p className="subscription-subheader">
        Enjoy an enhanced experience, exclusive creator tools, top-tier
        verification and security.
        <br />
        <span>
          (For organizations, <a href="#">sign up here</a>)
        </span>
      </p>
      <div className="billing-toggle">
        <button
          className={billingCycle === "annual" ? "active" : ""}
          onClick={() => setBillingCycle("annual")}
        >
          Annual
        </button>
        <button
          className={billingCycle === "monthly" ? "active" : ""}
          onClick={() => setBillingCycle("monthly")}
        >
          Monthly
        </button>
      </div>
      <p className="limited-offer">Limited time offer</p>
      <div className="plans-container">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`plan-card ${
              selectedPlan === plan.name ? "selected" : ""
            }`}
            onClick={() => setSelectedPlan(plan.name)}
          >
            <h3>{plan.name}</h3>
            <div className="price">
              ₹
              {billingCycle === "annual"
                ? plan.annualPrice.toLocaleString()
                : plan.monthlyPrice.toLocaleString()}{" "}
              <span className="billing-cycle">
                / {billingCycle === "annual" ? "year" : "month"}
              </span>
            </div>
            {billingCycle === "annual" && (
              <div className="savings">
                ₹
                {(billingCycle === "annual"
                  ? plan.annualPrice
                  : plan.monthlyPrice * 12
                ).toLocaleString()}{" "}
                billed annually{" "}
                <span className="savings-percentage">
                  SAVE {plan.annualSavings}%
                </span>
              </div>
            )}
            <ul className="features">
              {plan.features.map((feature, index) => (
                <li key={index}>
                  <span className="checkmark">✓</span> {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Subscription;
