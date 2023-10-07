import Image from "next/image";
import emptyStar from "@/icons/emptyStart.svg";
import Button from "../Button";
import SingleComment from "../SingleComment";

const Comments = () => {
  return (
    <>
      <div className="bg-thirdColor rounded-md p-8">
        <textarea
          className="outline-none bg-transparent border-0 p-0 resize-none w-full text-textColor"
          rows={5} // Set the number of rows for the multi-line text field
          placeholder="Enter your comment..."
        ></textarea>
        <div className="flex justify-between">
          <div className="flex gap-2">
            <Image src={emptyStar} alt="start" />
            <Image src={emptyStar} alt="start" />
            <Image src={emptyStar} alt="start" />
            <Image src={emptyStar} alt="start" />
            <Image src={emptyStar} alt="start" />
          </div>
          <Button className="w-48"> comment</Button>
        </div>
      </div>
      <div className="pt-12 flex flex-col gp-4">
        <SingleComment />
        <SingleComment />
      </div>
    </>
  );
};

export default Comments;
