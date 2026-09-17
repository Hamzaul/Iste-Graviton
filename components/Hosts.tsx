import Image from 'next/image';
import { HOSTS } from '@/lib/data/hosts';

/** Host row. CGC University is the anchor and sits in the middle. */
export default function Hosts() {
  return (
    <div className="hosts">
      {HOSTS.map((host) => {
        const logo = (
          <span className="host__logo">
            <Image
              src={host.logo}
              alt={`${host.name} logo`}
              width={host.width}
              height={host.height}
              sizes="(max-width: 1040px) 60vw, 220px"
            />
          </span>
        );

        return (
          <div className={`host${host.primary ? ' host--primary' : ''}`} key={host.name}>
            {host.url ? (
              <a href={host.url} target="_blank" rel="noopener noreferrer" aria-label={host.name}>
                {logo}
              </a>
            ) : (
              logo
            )}
            <b>{host.name}</b>
            <span>{host.role}</span>
            <p>{host.note}</p>
          </div>
        );
      })}
    </div>
  );
}
