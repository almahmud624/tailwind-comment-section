/* eslint-disable react/prop-types */
export default function Avatar({
  userThumbnail = "https://avatar.iran.liara.run/public/27",
}) {
  return (
    <>
      <img
        className="w-7 h-7 rounded-full"
        src={userThumbnail}
        alt="user avatar"
      />
    </>
  );
}
