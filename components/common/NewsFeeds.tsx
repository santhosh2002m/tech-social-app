// components/common/NewsFeeds.tsx
"use client";

import { useState } from "react";
import postData from "@/data/postData";
import ParentComment from "../ui/ParentComment";
import Post from "../ui/Post";
import PostReaction from "../ui/PostReaction";
import SiblingComment from "../ui/SiblingComment";
import WriteComment from "../ui/WriteComment";

interface NewsFeedsProps {
  clss?: string;
  reaction?: string;
}

const NewsFeeds: React.FC<NewsFeedsProps> = ({ clss = "", reaction = "" }) => {
  const [openCommentSections, setOpenCommentSections] = useState<{
    [key: number]: boolean;
  }>({});

  const toggleCommentSection = (postId: number): void => {
    setOpenCommentSections((prev) => ({
      ...prev,
      [postId]: !prev[postId] || false,
    }));
  };

  const filteredPosts = postData.filter((post) => {
    if (reaction === "/" || reaction === "/posts") return true;
    if (reaction === "/liked") return post.isLiked;
    if (reaction === "/shared") return post.isShared;
    if (reaction === "/commented")
      return post.isCommented || post.comments.length > 0;
    if (reaction === "/mentioned") return post.isMentioned;
    if (reaction === "/saved") return post.isSaved;
    return false;
  });

  return (
    <div className="post-item d-flex flex-column gap-5 gap-md-7" id="news-feed">
      {filteredPosts.length === 0 ? (
        <p className="text-center mdtxt">
          No {reaction.replace("/", "")} posts yet
        </p>
      ) : (
        filteredPosts.map((post) => {
          const isCommentSectionOpen = openCommentSections[post.id] || false;

          return (
            <div key={post.id} className={`post-single-box ${clss}`}>
              <Post post={post} />
              <PostReaction
                reaction={reaction}
                toggleCommentSection={() => toggleCommentSection(post.id)}
                isCommentSectionOpen={isCommentSectionOpen}
                postId={post.id}
              />
              {isCommentSectionOpen && (
                <>
                  <WriteComment />
                  {post.comments &&
                    post.comments.map((comment) => (
                      <div key={comment.id} className="comments-area mt-5">
                        <div className="single-comment-area ms-1 ms-xxl-15">
                          <ParentComment comment={comment} />
                          {comment?.replies.map((reply, i, arr) => (
                            <SiblingComment
                              key={reply.id}
                              clss={
                                arr.length - 1 === i
                                  ? "single-comment-area"
                                  : "sibling-comment"
                              }
                              reply={reply}
                            />
                          ))}
                        </div>
                      </div>
                    ))}
                </>
              )}
            </div>
          );
        })
      )}
    </div>
  );
};

export default NewsFeeds;
