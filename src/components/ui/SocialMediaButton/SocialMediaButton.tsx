import './SocialMediaButton.scss';
import facebookIcon from '../../../assets/images/icons/facebook-icon.png';
import googleIcon from '../../../assets/images/icons/google-icon.png';
import {
    createUserDocumentFromAuth,
    signInWithFacebookPopup,
    signInWithGooglePopup,
} from '../../../utils/firebase/firebase';
import { UserContext } from '../../../contexts/UserContext';
import { useContext } from 'react';

type SocialMedia = 'facebook' | 'google';
interface IProp {
    socialMedia: SocialMedia;
    onClick?: Function;
    size?: number;
}
const SocialMediaButton = ({ socialMedia = 'facebook', onClick, size = 30 }: IProp) => {
    const { setCurrentUser } = useContext(UserContext);

    const logUser = async () => {
        if (socialMedia === 'facebook') {
            const resp = await signInWithFacebookPopup();
            await createUserDocumentFromAuth(resp.user, {});
            setCurrentUser(resp.user);
            console.log(resp);
        } else if (socialMedia === 'google') {
            const resp = await signInWithGooglePopup();
            await createUserDocumentFromAuth(resp.user, {});
            setCurrentUser(resp.user);
            console.log(resp);
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
