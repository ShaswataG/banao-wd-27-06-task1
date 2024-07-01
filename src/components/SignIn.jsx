import facebookLogo from '../assets/facebook-logo.svg';
import googleLogo from '../assets/google-logo.svg';
import formImage from '../assets/create-account-pic.svg';
import closeButton from '../assets/closeButton.svg';

export default function SignIn() {
    return (
        <div>
            <button>
                <img src={closeButton}  alt='+'/>
            </button>
            <div>
                <div>
                    <form>
                        <h1>Create Account</h1>
                        <input placeholder="First Name"/>
                        <input placeholder="Last Name"/>
                        <input type='email' placeholder="Email"/>
                        <input type='password' placeholder="Password"/>
                        <input type='password' placeholder='Confirm Password'/>
                        <button>Create Account</button>
                    </form>
                    <button>
                        <img src={facebookLogo} alt='facebook logo' />
                        Sign up with Facebook
                    </button>
                    <button>
                        <img src={googleLogo} alt='google logo' />
                        Sign up with Google
                    </button>
                </div>
                <div>
                    <img src={formImage} alt='Form image' />
                </div>
            </div>
        </div>
    )
}