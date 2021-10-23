import {
  FireIcon,
  IdentificationIcon,
  TruckIcon,
  CakeIcon,
  FilmIcon,
  WifiIcon,
  PencilIcon,
  SparklesIcon,
} from "@heroicons/react/outline";

// TSK: ADD all the icons for the available fields once you create the form for new gyms to fill out and think of the options
const featureIcons = [
  {
    name: "Truck",
    icon: TruckIcon,
  },
  {
    name: "Fire",
    icon: FireIcon,
  },
  {
    name: "Identification",
    icon: IdentificationIcon,
  },
];

const amenityIcons = [
  {
    name: "Wifi",
    icon: WifiIcon,
  },
  {
    name: "Knife",
    icon: CakeIcon,
  },
  {
    name: "AC",
    icon: SparklesIcon,
  },
  {
    name: "TV",
    icon: FilmIcon,
  },
  {
    name: "Desk",
    icon: PencilIcon,
  },
];

export function getMatchingFeatureIcon(feature) {
  const selectedIcon = featureIcons.filter((item) => item.name === feature);
  return selectedIcon[0].icon;
}

export function getMatchingAmenityIcon(amenity) {
  const selectedIcon = amenityIcons.filter((item) => item.name === amenity);
  return selectedIcon[0].icon;
}
