"use client";
import React, { useState } from "react";

const Subscription: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<"annual" | "monthly">(
    "annual"
  );
  const [selectedPlans, setSelectedPlans] = useState<string[]>([]);
  const [selectedWorkAIFeatures, setSelectedWorkAIFeatures] = useState<
    string[]
  >([]);

  const plans = [
    {
      name: "Ad ai",
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
      name: "Work Ai",
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
  ];

  const togglePlanSelection = (planName: string) => {
    if (selectedPlans.includes(planName)) {
      setSelectedPlans(selectedPlans.filter((plan) => plan !== planName));
      if (planName === "Work Ai") {
        setSelectedWorkAIFeatures([]);
      }
    } else {
      setSelectedPlans([...selectedPlans, planName]);
    }
  };

  const toggleWorkAIFeature = (
    feature: string,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    event.stopPropagation(); // Prevent the card's onClick from firing
    if (selectedWorkAIFeatures.includes(feature)) {
      setSelectedWorkAIFeatures(
        selectedWorkAIFeatures.filter((f) => f !== feature)
      );
    } else {
      setSelectedWorkAIFeatures([...selectedWorkAIFeatures, feature]);
    }
  };

  const handleFeaturesClick = (event: React.MouseEvent<HTMLUListElement>) => {
    // Only stop propagation if the "Work Ai" card is already selected
    if (selectedPlans.includes("Work Ai")) {
      event.stopPropagation(); // Prevent clicks on the features list from triggering the card's onClick
    }
    // If "Work Ai" is not selected, allow the click to propagate to select the card
  };

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
              selectedPlans.includes(plan.name) ? "selected" : ""
            }`}
            onClick={() => togglePlanSelection(plan.name)}
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
            <ul
              className="features"
              onClick={
                plan.name === "Work Ai" ? handleFeaturesClick : undefined
              }
            >
              {plan.name === "Work Ai"
                ? plan.features.map((feature, index) => (
                    <li key={index}>
                      <label>
                        <input
                          type="checkbox"
                          checked={selectedWorkAIFeatures.includes(feature)}
                          onChange={(event) =>
                            toggleWorkAIFeature(feature, event)
                          }
                          disabled={!selectedPlans.includes("Work Ai")}
                        />
                        <span className="reset">{feature}</span>
                      </label>
                    </li>
                  ))
                : plan.features.map((feature, index) => (
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
