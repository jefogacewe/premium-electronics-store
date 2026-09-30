export default function LoginPage() {
  return (
    <div className="container page-section auth-shell">
      <div className="auth-card">
        <div className="auth-header">
          <p className="eyebrow">Welcome</p>
          <h2>Login or create an account</h2>
        </div>

        <form className="auth-form">
          <label>
            Email
            <input type="email" placeholder="name@email.com" />
          </label>
          <label>
            Password
            <input type="password" placeholder="••••••••" />
          </label>
          <button type="submit" className="primary-btn full-width">
            Login
          </button>
        </form>

        <div className="auth-divider">
          <span>or</span>
        </div>

        <button type="button" className="secondary-btn full-width">
          Create new account
        </button>
      </div>
    </div>
  );
}
