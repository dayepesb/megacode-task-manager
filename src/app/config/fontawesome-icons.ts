import {FaIconLibrary} from '@fortawesome/angular-fontawesome';
import {faFacebook, faFacebookF, faGithub, faInstagram, faMedium, faStackOverflow, faTwitter} from '@fortawesome/free-brands-svg-icons';
import {faHome} from '@fortawesome/free-solid-svg-icons/faHome';

export function addLibraryIcons(library: FaIconLibrary) {
  library.addIcons(
    faStackOverflow,
    faGithub,
    faMedium,
    faFacebook,
    faInstagram,
    faFacebookF,
    faTwitter,
    faHome
  );
}
