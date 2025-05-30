interface PostReactionProps {
  reaction?: string;
  toggleCommentSection: () => void;
  isCommentSectionOpen: boolean;
}

const PostReaction: React.FC<PostReactionProps> = ({
  reaction = "",
  toggleCommentSection,
  isCommentSectionOpen,
}) => {
  return (
    <>
      <div className="like-comment-share py-5 d-center flex-wrap gap-3 gap-md-0 justify-content-between">
        <button className="d-center gap-1 gap-sm-2 mdtxt">
          <i className="material-symbols-outlined mat-icon"> thumb_up </i>
          Like
        </button>
        <button
          className={`d-center gap-1 gap-sm-2 mdtxt ${
            isCommentSectionOpen ? "active" : ""
          }`}
          onClick={toggleCommentSection}
        >
          <i className="material-symbols-outlined mat-icon"> chat_bubble </i>
          Comment
        </button>
        <button className="d-center gap-1 gap-sm-2 mdtxt">
          <i className="material-symbols-outlined mat-icon"> search </i>
          AI Search
        </button>
        <button className="d-center gap-1 gap-sm-2 mdtxt">
          <i className="material-symbols-outlined mat-icon"> arrow_upward </i>
          Share
        </button>
        <button className="d-center gap-1 gap-sm-2 mdtxt">
          <i className="material-symbols-outlined mat-icon"> visibility </i>
          View
        </button>
      </div>
    </>
  );
};

export default PostReaction;
