import Image from 'next/image';
import { EVENT } from '@/lib/data/event';

export default function RegisterBand() {
  return (
    <div className="band">
      <div className="band__body">
        <h2>Bring three friends and an idea.</h2>
        <p className="lede" style={{ marginTop: 16 }}>
          Registration runs on Unstop. Lock your team of {EVENT.teamSize} before the deadline —
          places at the venue are limited by floor space, not enthusiasm.
        </p>
        <p className="price">{EVENT.prizePool}</p>
        <p style={{ color: 'var(--fg-dim)', fontSize: 13, marginBottom: 26 }}>
          Total prize pool across categories
        </p>
        <a
          className="cta cta--lg"
          href={EVENT.registerUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Register on Unstop
        </a>
      </div>

      <div className="band__qr">
        <Image
          src="/qr.png"
          alt="QR code linking to the Graviton registration page on Unstop"
          width={150}
          height={150}
        />
        <span>Scan to register</span>
      </div>
    </div>
  );
}
