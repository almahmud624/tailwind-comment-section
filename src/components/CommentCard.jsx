/* eslint-disable react/prop-types */
import { FaReply } from "react-icons/fa";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { MdDelete, MdEdit } from "react-icons/md";
import Avatar from "./Avatar";
import IconButton from "./IconButton";

export default function CommentCard(props) {
  const { reply, comment } = props;
  const {
    username,
    userThumbnail,
    commentText,
    commentdAt,
    hasOwnComment,
    commentOwnerUsername,
  } = comment || {};
  return (
    <div className="p-5 w-full bg-white rounded-md flex gap-x-5 items-start">
      <CountButton />
      <div className="space-y-3">
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-x-3">
            <UserInfo
              hasOwnComment={hasOwnComment}
              username={username}
              userThumbnail={userThumbnail}
            />
            <span className="text-muted text-sm">{commentdAt}</span>
          </div>
          <div className="md:block hidden">
            <CommentActionButtons hasOwnComment={hasOwnComment} />
          </div>
        </div>
        <p className="text-muted text-sm">
          {(reply || hasOwnComment) && (
            <span className="text-primary font-semibold mr-1 cursor-pointer hover:text-primary/80">
              @{commentOwnerUsername}
            </span>
          )}
          {commentText}
        </p>
        <div className="md:hidden block">
          <CommentActionButtons hasOwnComment={hasOwnComment} />
        </div>
      </div>
    </div>
  );
}

const UserInfo = ({ hasOwnComment, username, userThumbnail }) => {
  return (
    <>
      <Avatar userThumbnail={userThumbnail} />
      <div className="flex items-center gap-x-2">
        <span className="font-semibold text-secondary text-sm">{username}</span>
        {hasOwnComment && (
          <span className="text-[10px] bg-primary text-white px-1.5 rounded-sm">
            you
          </span>
        )}
      </div>
    </>
  );
};

const CommentActionButtons = ({ hasOwnComment }) => {
  return (
    <>
      <div className="flex items-center gap-x-5">
        {hasOwnComment ? (
          <>
            <IconButton
              icon={<MdDelete />}
              className={"text-red-600 hover:text-red-600/80"}
            >
              <span>Delete</span>
            </IconButton>
            <IconButton icon={<MdEdit />}>
              <span>Reply</span>
            </IconButton>
          </>
        ) : (
          <IconButton icon={<FaReply className="text-xs" />}>
            <span>Reply</span>
          </IconButton>
        )}
      </div>
    </>
  );
};

const CountButton = () => {
  return (
    <>
      <button className="text-muted/50 bg-[#f5f6fa] px-2.5 p-2 rounded-lg text-xs h-[82px] flex flex-col justify-between items-center">
        <FaPlus className="hover:text-muted transition-all duration-150" />
        <span className="text-primary font-semibold text-sm">5</span>
        <FaMinus className="hover:text-muted transition-all duration-150" />
      </button>
    </>
  );
};
