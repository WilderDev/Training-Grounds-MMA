import { useState } from "react";
import { ChevronRightIcon } from "@heroicons/react/solid";
import GymDescriptionModal from "../modals/GymDescriptionModal";

const GymDescription = ({ desc, detailedDesc }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <section className="responsive">
      <p>{desc}</p>
      <button
        onClick={() => setModalIsOpen(true)}
        className="flex items-center text-gray-800 mt-3 hover:text-red-500 transition-colors"
      >
        <span className="font-semibold underline">Expand Details</span>{" "}
        <ChevronRightIcon className="h-6 " />
      </button>

      {modalIsOpen && (
        <GymDescriptionModal
          open={modalIsOpen}
          setOpen={setModalIsOpen}
          desc={desc}
          detailedDesc={detailedDesc}
        />
      )}

      <hr className="spacedHR" />
    </section>
  );
};

export default GymDescription;

// IX_TSK
// 1. Modal transition on open and close
// 2. Setup data so there is more descriptions... either an object or more fields
