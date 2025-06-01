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
        <h1 className="h3">Explore AI</h1>
      </div>

      {/* Ad.AI Section */}
      <div className="">
        <div
          className="banner ad-ai"
          onClick={onAdAIClick}
          style={{ cursor: "pointer" }}
        >
          <span className="imagine-ads">Imagine Ads</span>
        </div>
        <p className="mt-3">
          Ad.AI is a multimodal AI model; now search with Text, Image, Video &
          PDF/Doc.
        </p>
      </div>

      {/* Work.AI Section */}
      <div className="">
        <div
          className="banner work-ai"
          onClick={onWorkAIClick}
          style={{ cursor: "pointer" }}
        >
          <div className="ribbon">Work Easy</div>
        </div>
        <p className="mt-3 Ts_explore_ai_p">
          Work.AI is a collection of professional AI models for routine
          workflow, research, complex tasks, etc.
        </p>
      </div>
    </>
  );
}
