import './SocialMediaButton.scss';
import facebookIcon from '../../../assets/images/icons/facebook-icon.png';
import googleIcon from '../../../assets/images/icons/google-icon.png';
import {
    createUserDocumentFromAuth,
    signInWithFacebookPopup,
    signInWithGooglePopup,
} from '../../../utils/firebase/firebase';

type SocialMedia = 'facebook' | 'google';
interface IProp {
    socialMedia: SocialMedia;
    onClick?: Function;
    size?: number;
}
const SocialMediaButton = ({ socialMedia = 'facebook', onClick, size = 30 }: IProp) => {
    const logUser = async () => {
        if (socialMedia === 'facebook') {
            const resp = await signInWithFacebookPopup();
            await createUserDocumentFromAuth(resp.user, {});

            if (resp.user) {
                return (document.location.href = '/');
            }
        } else if (socialMedia === 'google') {
            const resp = await signInWithGooglePopup();
            await createUserDocumentFromAuth(resp.user, {});

            if (resp.user) {
                return (document.location.href = '/');
            }
        } else if (onClick) {
            onClick();
        }
    };
    return (
        <button className="social-media-button" onClick={logUser}>
            <img src={SocialMediaLogo(socialMedia)} width={size} height={size} alt={`${socialMedia} icon`} />
        </button>
    );
};

const SocialMediaLogo = (socialMedia: SocialMedia) => {
    switch (socialMedia) {
        case 'facebook':
            return facebookIcon;
        case 'google':
            return googleIcon;
    }
};

export default SocialMediaButton;
