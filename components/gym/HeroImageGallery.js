import Image from "next/image";

// TSK: Button to see more/all
const HeroImageGallery = ({ images }) => {
  return (
    <section className="mt-6 max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
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
