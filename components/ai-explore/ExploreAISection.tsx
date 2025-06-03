import React from "react";

interface ExploreAISectionProps {
  onAdAIClick: () => void;
  onWorkAIClick: () => void;
}

export default function ExploreAISection({
  onAdAIClick,
  onWorkAIClick,
}: ExploreAISectionProps) {
  return (
    <>
      <div className="text-center bg-orange">
        <h1 className="h3">Uncover AI</h1>
      </div>

      {/* Ad.AI Section */}
      <div className="">
        <img
          src="/images/ad-ad.jpg"
          alt="Ad.AI Banner"
          className="banner ad-ai border-area"
          onClick={onAdAIClick}
          style={{ cursor: "pointer" }}
        />
        <p className="mt-3">
          Ad.AI is a multimodal AI model; now search with Text, Image, Video &
          PDF/Doc.
        </p>
      </div>

      {/* Work.AI Section */}
      <div className="">
        <img
          src="/images/work-work.jpg"
          alt="Work.AI Banner"
          className="banner work-ai border-area"
          onClick={onWorkAIClick}
          style={{ cursor: "pointer" }}
        />
        <p className="mt-3 Ts_explore_ai_p">
          Work.AI is a collection of professional AI models for routine
          workflow, research, complex tasks, etc.
        </p>
      </div>
    </>
  );
}
