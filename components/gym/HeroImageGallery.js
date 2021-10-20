import Image from "next/image";

// TSK: Button to see more/all
const HeroImageGallery = ({ images }) => {
  return (
    <section className="mt-6 lg:grid lg:grid-cols-3 lg:gap-x-8">
      <div className="hidden aspect-w-3 aspect-h-4 rounded-lg overflow-hidden lg:block">
        <Image
          src={images[0].src}
          alt={images[0].alt}
          layout="fill"
          priority={true}
          objectFit="cover"
          objectPosition="center"
        />
      </div>
      <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
        <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
          <Image
            src={images[1].src}
            alt={images[1].alt}
            layout="fill"
            priority={true}
            objectFit="cover"
            objectPosition="center"
          />
        </div>
        <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
          <Image
            src={images[2]?.src}
            alt={images[2]?.alt}
            layout="fill"
            priority={true}
            objectFit="cover"
            objectPosition="center"
          />
        </div>
      </div>
      <div className="aspect-w-4 aspect-h-5 sm:rounded-lg sm:overflow-hidden lg:aspect-w-3 lg:aspect-h-4">
        <Image
          src={images[3]?.src}
          alt={images[3]?.alt}
          layout="fill"
          priority={true}
          objectFit="cover"
          objectPosition="center"
        />
      </div>
    </section>
  );
};

export default HeroImageGallery;

// IX_TSK
// 1. Create validation so user has to input atleast 4 photos
// 2. Check if there are > 4 photos => Add a button in bottom right to open a gallery like page modal
// 3. That modal should have the ability to select a photo and look up close
