import {FaIconLibrary} from '@fortawesome/angular-fontawesome';
import {faFacebook, faFacebookF, faGithub, faInstagram, faMedium, faStackOverflow} from '@fortawesome/free-brands-svg-icons';

export function addLibraryIcons(library: FaIconLibrary) {
  library.addIcons(
    faStackOverflow,
    faGithub,
    faMedium,
    faFacebook,
    faInstagram,
    faFacebookF
  );
}
