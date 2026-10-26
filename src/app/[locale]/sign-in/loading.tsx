export default function SignInLoading() {
  return (
    <main
      id="main-content"
      className="auth-page"
      aria-busy="true"
      aria-label="Memuatkan halaman log masuk / Loading sign-in page"
    >
      <p className="sr-only" role="status">
        Memuatkan halaman log masuk. Loading sign-in page.
      </p>
      <section className="auth-card auth-card-skeleton" aria-hidden="true">
        <div className="auth-skeleton auth-skeleton-icon" />
        <div className="auth-skeleton auth-skeleton-eyebrow" />
        <div className="auth-skeleton auth-skeleton-title" />
        <div className="auth-skeleton auth-skeleton-copy" />
        <div className="auth-skeleton auth-skeleton-copy auth-skeleton-copy-short" />
        <div className="auth-skeleton auth-skeleton-button" />
        <div className="auth-skeleton auth-skeleton-privacy" />
        <div className="auth-skeleton auth-skeleton-privacy auth-skeleton-privacy-short" />
      </section>
    </main>
  );
}
