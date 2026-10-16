import styles from './Login.module.css';
import googleIcon from '../../assets/flat-color-icons_google.svg';
import facebookIcon from '../../assets/Vector.svg';

export default function Login() {
    return (
        <div className={styles.login}>
            <div className={styles.left}></div>

            <div className={styles.right}>
                <div className={styles.content}>
                    <h1 className={styles.title}>
                        Hello, <span>Guyss!</span>
                    </h1>

                    <div className={styles.tabs}>
                        <button type="button" className={styles.tabActive}>Login</button>
                        <button type="button" className={styles.tab}>SignUp</button>
                    </div>

                    <form className={styles.form}>
                        <input
                            type="email"
                            className={styles.input}
                            placeholder="Enter your email"
                        />

                        <input
                            type="password"
                            className={styles.input}
                            placeholder="Enter Password"
                        />

                        <button type="button" className={styles.loginBtn}>Login</button>
                    </form>

                    <p className={styles.or}>Or</p>

                    <div className={styles.socials}>
                        <button type="button" aria-label="Continue with Google">
                            <img src={googleIcon} alt="" />
                        </button>
                        <button type="button" aria-label="Continue with Facebook">
                            <img src={facebookIcon} alt="" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}