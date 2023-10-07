import Image from "next/image";
import vector from "@/icons/vector.svg";
import { CircularProgress } from "@nextui-org/react";

const ProfileProgress = () => {
  return (
    <div className="flex justify-between px-8 bg-thirdColor rounded-md py-4 items-center">
      <div>your profile is almost completed </div>
      <div className="flex gap-8 items-center">
        <CircularProgress
          
          className="text-secondaryColor"
          aria-label="Loading..."
          size="lg"
          value={40}
          color="success"
          showValueLabel={true}
        />
        <Image alt="vector" src={vector} />
      </div>
    </div>
  );
};

export default ProfileProgress;