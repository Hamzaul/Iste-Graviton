import Link from 'next/link';
import { EVENT } from '@/lib/data/event';

export default function SiteFooter() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer__grid">
          <div className="footer__brand">
            <span className="brandmark">
              {EVENT.name} <small>{EVENT.tagline}</small>
            </span>
            <p>
              A 24-hour build sprint hosted by the {EVENT.host}, in collaboration with{' '}
              {EVENT.collaborator}.
            </p>
          </div>

          <div>
            <h4>Mission</h4>
            <ul>
              <li><Link href="/themes">Themes</Link></li>
              <li><Link href="/schedule">Schedule</Link></li>
              <li><Link href="/rules">Rules</Link></li>
              <li>
                <a href={EVENT.registerUrl} target="_blank" rel="noopener noreferrer">
                  Register on Unstop
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4>Ground control</h4>
            <ul>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/faq">FAQ</Link></li>
              <li><a href={`mailto:${EVENT.email}`}>{EVENT.email}</a></li>
            </ul>
          </div>

          <div>
            <h4>Hosts</h4>
            <ul>
              <li>
                <a href="https://www.cgcuniversity.in/" target="_blank" rel="noopener noreferrer">
                  CGC University
                </a>
              </li>
              <li>
                <a href={EVENT.instagramUrl} target="_blank" rel="noopener noreferrer">
                  @{EVENT.instagram}
                </a>
              </li>
              <li><Link href="/sponsor">Sponsor us</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer__base">
          <span>
            © {new Date().getFullYear()} {EVENT.name} · {EVENT.venue}
          </span>
          <span>Built for people who look up</span>
        </div>
      </div>
    </footer>
  );
}
