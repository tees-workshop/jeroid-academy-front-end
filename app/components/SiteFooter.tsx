export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-main mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
        <div className="footer-brand-col">
          <a href="/" className="inline-flex items-center gap-3" aria-label="Jeroid Academy, back to top"><span className="brand-mark">J</span><span className="font-display text-[17px] font-extrabold tracking-[.04em] text-white">JEROID <small className="block pt-0.5 font-data text-[9px] tracking-[.28em] text-[#00AFEF]">ACADEMY</small></span></a>
          <p>Jeroid Academy is the education arm of Jeroid Cyto Exchange. Lessons are for education only and are not financial advice.</p>
        </div>
        <nav aria-label="Footer tracks">
          <h2 className="footer-heading font-data">TRACKS</h2>
          <ul className="footer-list">{["Beginner", "Intermediate", "Advanced", "Career", "Industry"].map(label => <li key={label}><a href="/tracks">{label}</a></li>)}</ul>
        </nav>
        <nav aria-label="Footer academy">
          <h2 className="footer-heading font-data">ACADEMY</h2>
          <ul className="footer-list">
            <li><a href="/#start">Start learning free</a></li>
            <li><a href="/signin">Sign in</a></li>
            <li><a href="/verify-certificate">Verify a certificate</a></li>
            <li><span className="footer-pending">Privacy policy</span></li>
            <li><span className="footer-pending">Terms of use</span></li>
            <li><a href="/#exchange">Jeroid exchange</a></li>
          </ul>
        </nav>
      </div>
      <div className="footer-bottom"><div className="mx-auto flex max-w-[1320px] flex-col gap-3 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12"><p>Crypto assets are volatile; never invest money you can’t afford to lose.</p><p className="footer-meta">© {new Date().getFullYear()} Jeroid Academy <span aria-hidden="true">·</span> <a href="#home">Back to top <span aria-hidden="true">↑</span></a></p></div></div>
    </footer>
  );
}
