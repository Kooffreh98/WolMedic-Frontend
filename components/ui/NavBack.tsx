import { useRouter } from "next/navigation";
import { MdKeyboardBackspace } from "react-icons/md";

const NavBack = () => {
  const router = useRouter();

  return (
    <div className="w-24">
      <button
        className="flex items-center mt-5 p-2 bg-transparent hover:bg-gray-200 rounded transition-colors"
        onClick={() => router.back()}
      >
        <MdKeyboardBackspace size={30} className="mr-2" />
        Back
      </button>
    </div>
  );
};

export default NavBack;
