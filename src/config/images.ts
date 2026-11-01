import bulldozer from '../assets/images/bulldozer.jpg';
import drillRigCrew from '../assets/images/drill-rig-crew.jpg';
import drillRigForest from '../assets/images/drill-rig-forest.jpg';
import drillRigTower from '../assets/images/drill-rig-tower.jpg';
import drillRigTrack from '../assets/images/drill-rig-track.jpg';
import drillRigYard from '../assets/images/drill-rig-yard.jpg';
import drillSitePipes from '../assets/images/drill-site-pipes.jpg';
import fgmWall from '../assets/images/fgm-wall.jpg';
import haulRoadTractor from '../assets/images/haul-road-tractor.jpg';
import leachTanks from '../assets/images/leach-tanks.jpg';
import plantGantry from '../assets/images/plant-gantry.jpg';
import plantOverview from '../assets/images/plant-overview.jpg';
import truckFleet from '../assets/images/truck-fleet.jpg';
import wheelLoader from '../assets/images/wheel-loader.jpg';
import logoDark from '../assets/images/dark-fgm-logo.png';
import logoLight from '../assets/images/light-fgm-logo.png';

export interface ImageAsset {
  /** Image URL. Leave empty to show the placeholder. */
  readonly src: string;
  /** Accessible description of the image. */
  readonly alt: string;
  /** Intrinsic pixel width of the file. */
  readonly width?: number;
  /** Intrinsic pixel height of the file. */
  readonly height?: number;
  /** CSS object-position used when the image is cropped to fit its frame. */
  readonly focus?: string;
}

/** An unfilled slot (renders the grey placeholder tile). */
const slot = (alt: string): ImageAsset => ({ src: '', alt });

/** A filled slot. */
const photo = (src: string, alt: string, width: number, height: number, focus?: string): ImageAsset => ({
  src,
  alt,
  width,
  height,
  focus,
});

export interface SiteImages {
  /** Black monogram used in the navigation pill (design size ≈ 51×28). */
  readonly logoDark: ImageAsset;
  /** White monogram used in the footer (design size ≈ 147×82). */
  readonly logoLight: ImageAsset;
  /** Home hero background (landscape; tinted with the brand brown by CSS). */
  readonly hero: ImageAsset;
  /** Three portrait photos on Home (design: 400×518 each). */
  readonly homeGallery: readonly [ImageAsset, ImageAsset, ImageAsset];
  /** About page portrait beside the intro text (design: 638×748). */
  readonly aboutFoundation: ImageAsset;
  /** Every photo on the Gallery page, in display order. */
  readonly gallery: readonly ImageAsset[];
}

export const images: SiteImages = {
  // PLACEHOLDER: add the logo files and set them here (see the notes at the top of this file).
  logoDark: photo(logoDark, 'FGM Gold Mining Limited', 51, 28),
  logoLight: photo(logoLight, 'FGM Gold Mining Limited', 147, 82),

  hero: photo(
    truckFleet,
    'Dump trucks, a bulldozer and a water tanker parked in the site yard below forested hills',
    1024,
    767,
    'center 62%',
  ),

  homeGallery: [
    photo(drillRigCrew, 'Drill crew in hard hats beside a diamond drill rig', 461, 1024, 'center 62%'),
    photo(haulRoadTractor, 'Vehicle driving along a graded haul road below forested hills', 720, 1056, 'center 60%'),
    photo(bulldozer, 'Bulldozer and wheel loader working in the equipment yard', 499, 889, 'center 55%'),
  ],

  aboutFoundation: photo(
    haulRoadTractor,
    'Vehicle driving along a graded haul road below forested hills under an overcast sky',
    720,
    1056,
    'center 55%',
  ),

  gallery: [
    photo(truckFleet, 'Dump trucks, a bulldozer and a water tanker parked in the site yard', 1024, 767),
    photo(drillRigCrew, 'Drill crew in red and yellow hard hats beside a diamond drill rig', 461, 1024),
    photo(drillSitePipes, 'Drill rods laid out on the ground beside a drill shelter', 960, 432),
    photo(plantOverview, 'Processing plant with floodlit gantries at dusk', 617, 1080),
    photo(drillRigTrack, 'Crawler-mounted drill rig operating under a canvas shelter', 960, 432),
    photo(leachTanks, 'Large steel tanks at the processing plant', 602, 1079),
    photo(drillRigForest, 'Drill rig mast raised among trees, with a crew member in a yellow hard hat', 461, 1024),
    photo(haulRoadTractor, 'Vehicle driving along a graded haul road below forested hills', 720, 1056),
    photo(wheelLoader, 'Wheel loader moving material on site', 499, 889),
    photo(plantGantry, 'Conveyor gantry and mill building at the processing plant', 617, 1080),
    photo(bulldozer, 'Bulldozer and wheel loader working in the equipment yard', 499, 889),
    photo(drillRigYard, 'Drill rig parked in the yard under green tarpaulins', 499, 889),
    photo(drillRigTower, 'Close-up of a drill rig mast and its hydraulic hoses', 499, 889),
    photo(fgmWall, 'FGM lettering painted on a white boundary wall', 499, 666),
  ],
};
