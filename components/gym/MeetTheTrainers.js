import Image from "next/image";
import { v4 } from "uuid";

const MeetTheTrainers = ({ trainers }) => {
  return (
    <section className="responsive">
      {/* Title */}
      <h2 className="dynamicPageHeading mb-2">Meet Your Trainers</h2>

      {/* Trainers */}
      <div className="flex flex-wrap">
        {trainers.map((trainer) => (
          <div
            key={v4()}
            className="flex rounded-lg border border-gray-300 w-full md:w-5/12 lg:w-[40%] mr-2 md:mr-4 lg:mr-8 mt-4 py-4 px-3 group cursor-pointer hover:bg-gray-900 hover:text-white"
          >
            {/* Image */}
            <div className="relative pr-6">
              <Image
                src={trainer.profile_picture}
                height={50}
                width={50}
                className="rounded-full"
              />
            </div>

            {/* Info */}
            <div className="flex flex-col">
              {/* Name */}
              <h3 className="font-medium">{trainer.name}</h3>

              {/* Awards / Accomplishments */}

              {/* Bio */}
              {/* <p className="">{trainer.bio}</p> */}

              {/* Styles */}
              <ul className="flex">
                {trainer.styles.map((style) => (
                  <li
                    key={v4()}
                    className="mr-4 text-gray-600 group-hover:text-gray-300"
                  >
                    {style}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <hr className="spacedHR" />
    </section>
  );
};

export default MeetTheTrainers;

// IX_TSK
// 1. Add awards or accomplishments to the trainer object
// 2. Add modals on click of trainer that shoes full bio and awards and photos etc
