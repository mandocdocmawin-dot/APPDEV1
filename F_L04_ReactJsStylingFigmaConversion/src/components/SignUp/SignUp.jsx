import layout from '../Login/Login.module.css'
import logo from '../../assets/logo.svg'
import styles from './SignUp.module.css'

export default function SignUp() {
  return (
    <main className={layout.login}>
      <section className={layout.left} aria-label="Design Spacee">
        <h1 className={layout.tagline}>
          Need webdesign<br />
          for your business?<br />
          <strong>Design Spacee</strong><br />
          will help you.
        </h1>
        <img className={layout.logo} src={logo} alt="Design Spacee logo" />
        <p className={layout.link}>figma.com/@designspacee</p>
      </section>
      <section className={layout.right}>
        <div className={styles.content}>
          <h2 className={styles.heading}>Create Account</h2>
          <div className={styles.socialOptions}>
            <button type="button" className={styles.socialButton}>Sign up with Google</button>
            <button type="button" className={styles.socialButton}>Sign up with Facebook</button>
          </div>
          <div className={styles.divider} aria-hidden="true">OR</div>
          <form className={styles.fields} onSubmit={(event) => event.preventDefault()}>
            <input className={styles.input} type="text" name="fullName" placeholder="Full Name" aria-label="Full Name" autoComplete="name" />
            <input className={styles.input} type="email" name="email" placeholder="Email" aria-label="Email" autoComplete="email" />
            <input className={styles.input} type="password" name="password" placeholder="Password" aria-label="Password" autoComplete="new-password" />
            <button type="button" className={styles.createButton}>Create Account</button>
          </form>
          <p className={styles.loginPrompt}>
            Already have an account?{' '}
            <a className={styles.loginLink} href="#" onClick={(event) => event.preventDefault()}>Login</a>
          </p>
        </div>
      </section>
    </main>
  )
}
