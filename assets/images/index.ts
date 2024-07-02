// Exporting Images from images folder
import { Asset } from 'expo-asset';

// @ts-ignore
const logo = Asset.fromModule(require('./logo.svg')).uri;
const logo2 = Asset.fromModule(require('./logo2.png')).uri;
const cover = "https://www.youtube.com/embed/URKKzI6Z0mw?autoplay=1&mute=1&loop=1&playlist=URKKzI6Z0mw&controls=0";
const car1 = Asset.fromModule(require('./car1.webp')).uri;
const car2 = Asset.fromModule(require('./car2.webp')).uri;
const car3 = Asset.fromModule(require('./car3.svg')).uri;
const service1 = Asset.fromModule(require('./service1.webp')).uri;
const service2 = Asset.fromModule(require('./service2.webp')).uri;
const service3 = Asset.fromModule(require('./service3.webp')).uri;
const service4 = Asset.fromModule(require('./service4.webp')).uri;
const service5 = Asset.fromModule(require('./service5.webp')).uri;
const service6 = Asset.fromModule(require('./service6.webp')).uri;
const service7 = Asset.fromModule(require('./service7.webp')).uri;
const service8 = Asset.fromModule(require('./service8.webp')).uri;
const service9 = Asset.fromModule(require('./service9.webp')).uri;
const aboutHeader = Asset.fromModule(require('./about-header.webp')).uri;
const header = Asset.fromModule(require('./header.webp')).uri;
const serviceHeader = Asset.fromModule(require('./servicesHeader.webp')).uri;
const pricingHeader = Asset.fromModule(require('./pricingHeader.webp')).uri;
const contactHeader = Asset.fromModule(require('./contactHeader.webp')).uri;
const about1 = Asset.fromModule(require('./about1.webp')).uri;
const about2 = Asset.fromModule(require('./about2.webp')).uri;
const about3 = Asset.fromModule(require('./about3.webp')).uri;
const aboutVideo = "https://www.youtube.com/embed/4RwNo5QT-Ig?autoplay=1&mute=1&loop=1&playlist=4RwNo5QT-Ig&controls=0";


const ImageCollection = {
   logo,
   logo2,
   cover,
   car1,
   car2,
   car3,
   service1,
   service2,
   service3,
   service4,
   service5,
   service6,
   service7,
   service8,
   service9,
   aboutHeader,
   serviceHeader,
   about1,
   about2,   
   about3,
   aboutVideo,
   pricingHeader,
   contactHeader,
   header
}

export { ImageCollection };
