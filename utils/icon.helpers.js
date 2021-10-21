import {
  FireIcon,
  IdentificationIcon,
  TruckIcon,
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

export function getMatchingFeatureIcon(feature) {
  console.log("feature:", feature);
  const selectedIcon = featureIcons.filter((item) => item.name === feature);
  console.log("selectedIcon:", selectedIcon);
  return selectedIcon[0].icon;
  // switch (feature) {
  // 	case "beef":
  // 		return "beef"
  // 		break;

  // 	default:
  // 		break;
  // }
}
