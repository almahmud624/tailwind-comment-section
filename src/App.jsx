import Avatar from "./components/Avatar";
import CommentCard from "./components/CommentCard";
import Button from "./components/PrimaryButton";
import { commentReplyInfo, commentsInfo } from "./data/demoCommentsData";

function App() {
  return (
    <>
      <div className="py-10 grid place-items-center">
        <CommentsSection />
      </div>
    </>
  );
}

const CommentsSection = () => {
  return (
    <>
      <div className="space-y-4 w-1/2">
        {commentsInfo?.map((comment) => (
          <div key={comment?.username} className="space-y-4">
            <CommentCard comment={comment} />
            {comment?.repliesCount > 0 && (
              <div className="ml-8 flex h-full gap-x-10">
                <div className="border-l-2 border-muted/10" />
                <div className="space-y-4">
                  {commentReplyInfo?.map((comment) => (
                    <CommentCard
                      key={comment?.username}
                      comment={comment}
                      reply={true}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}

        <CommentInputArea />
      </div>
    </>
  );
};

const CommentInputArea = () => {
  return (
    <>
      <div className="p-5 w-full bg-white rounded-md flex gap-x-3 items-start">
        <Avatar />
        <textarea
          rows="3"
          placeholder="Add a comment..."
          className="border text-sm p-2 w-full rounded-md focus:outline-none focus:border-primary text-muted"
        ></textarea>
        <Button>Send</Button>
      </div>
    </>
  );
};
export default App;
