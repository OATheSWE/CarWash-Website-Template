// Exporting Images from images folder
import { Asset } from 'expo-asset';

// @ts-ignore
const logo = Asset.fromModule(require('./logo.svg')).uri;
const logo2 = Asset.fromModule(require('./logo2.png')).uri;
const cover = Asset.fromModule(require('./cover-video.mp4')).uri;
const car1 = Asset.fromModule(require('./car1.jpg')).uri;
const car2 = Asset.fromModule(require('./car2.jpg')).uri;
const car3 = Asset.fromModule(require('./car3.svg')).uri;
const service1 = Asset.fromModule(require('./service1.jpg')).uri;
const service2 = Asset.fromModule(require('./service2.jpg')).uri;
const service3 = Asset.fromModule(require('./service3.jpg')).uri;
const service4 = Asset.fromModule(require('./service4.jpg')).uri;
const service5 = Asset.fromModule(require('./service5.jpg')).uri;
const service6 = Asset.fromModule(require('./service6.jpg')).uri;
const service7 = Asset.fromModule(require('./service7.jpg')).uri;
const service8 = Asset.fromModule(require('./service8.jpg')).uri;
const service9 = Asset.fromModule(require('./service9.jpg')).uri;
const blog1 = Asset.fromModule(require('./blog1.png')).uri;
const aboutHeader = Asset.fromModule(require('./about-header.png')).uri;
const serviceHeader = Asset.fromModule(require('./servicesHeader.jpg')).uri;
const pricingHeader = Asset.fromModule(require('./pricingHeader.jpg')).uri;
const contactHeader = Asset.fromModule(require('./contactHeader.jpg')).uri;
const about1 = Asset.fromModule(require('./about1.jpg')).uri;
const about2 = Asset.fromModule(require('./about2.webp')).uri;
const about3 = Asset.fromModule(require('./about3.webp')).uri;
const aboutVideo = Asset.fromModule(require('./aboutpage.mp4')).uri;


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
   blog1,
   aboutHeader,
   serviceHeader,
   about1,
   about2,
   about3,
   aboutVideo,
   pricingHeader,
   contactHeader
}

export { ImageCollection };
