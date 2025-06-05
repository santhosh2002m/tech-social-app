"use client";

import postData from "@/data/postData";

interface PostReactionProps {
  reaction?: string;
  toggleCommentSection: () => void;
  isCommentSectionOpen: boolean;
  postId: number;
}

const PostReaction: React.FC<PostReactionProps> = ({
  reaction = "",
  toggleCommentSection,
  isCommentSectionOpen,
  postId,
}) => {
  const post = postData.find((p) => p.id === postId);

  return (
    <>
      <div className="like-comment-share py-5 d-center flex-wrap gap-3 gap-md-0 justify-content-between">
        <button
          className={`d-center gap-1 gap-sm-2 mdtxt ${
            post?.isLiked ? "active" : ""
          }`}
          disabled
        >
          <i className="material-symbols-outlined mat-icon"> thumb_up </i>
          1.6K
        </button>
        <button
          className={`d-center gap-1 gap-sm-2 mdtxt ${
            isCommentSectionOpen ? "active" : ""
          }`}
          onClick={toggleCommentSection}
        >
          <i className="material-symbols-outlined mat-icon"> chat_bubble </i>
          2.4K
        </button>
        <button
          className="d-center gap-1 gap-sm-2 mdtxt"
          onClick={() => console.log("AI Search clicked for post:", postId)}
          title="AI Search"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="ai-search-icon"
          >
            <circle
              cx="20"
              cy="20"
              r="16"
              strokeWidth="4"
              fill="black"
              className="ai-search-icon-stroke"
            />
            <text
              x="13"
              y="25"
              fontFamily="Arial, sans-serif"
              fontWeight="bold"
              fontSize="14"
              className="ai-search-icon-text"
            >
              AI
            </text>
            <line
              x1="31"
              y1="31"
              x2="44"
              y2="44"
              strokeWidth="4"
              strokeLinecap="round"
              className="ai-search-icon-stroke"
            />
          </svg>
          <span className="d-none d-sm-inline">45k</span>
        </button>
        <button
          className={`d-center gap-1 gap-sm-2 mdtxt ${
            post?.isShared ? "active" : ""
          }`}
          disabled
        >
          <i className="material-symbols-outlined mat-icon"> arrow_upward </i>
          1.9K
        </button>
        <button className="d-center gap-1 gap-sm-2 mdtxt" disabled>
          <i className="material-symbols-outlined mat-icon"> visibility </i>
          12.5K
        </button>
      </div>
      <div className="view-comments-date d-flex justify-content-between align-items-center mt-2">
        <span className="mdtxt">View 1,654 Comments</span>
        <span className="mdtxt">9 days ago</span>
      </div>
    </>
  );
};

export default PostReaction;
