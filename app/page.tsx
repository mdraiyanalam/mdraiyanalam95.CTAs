import Image from "next/image";
import { FaArrowRight, FaArrowUpRightFromSquare } from "react-icons/fa6";
import profilePic from "@/public/img/profile.jpg";
import ShareButton from "@/components/ShareButton";
import Year from "@/components/Year";
import { callLink, profile, profileLinks, quickLinks } from "./links";

const ext = { target: "_blank", rel: "noopener noreferrer" } as const;

export default function Home() {
  const CallIcon = callLink.icon;

  return (
    <>
      <div className="backdrop" aria-hidden>
        <span className="blob blob-a" />
        <span className="blob blob-b" />
        <span className="blob blob-c" />
      </div>

      <main className="page">
        <ShareButton />

        <header className="hero reveal" style={{ ["--d" as string]: 0 }}>
          <div className="avatar-ring">
            <Image
              className="avatar"
              src={profilePic}
              alt={profile.name}
              width={120}
              height={120}
              priority
            />
          </div>
          <h1>{profile.name}</h1>
          <p className="handle">{profile.handle}</p>
        </header>

        <section className="greet reveal" style={{ ["--d" as string]: 1 }} aria-label="Greeting">
          <p className="greet-ar" lang="ar" dir="rtl">
            السَّلَامُ عَلَيْكُمْ
          </p>
          <p className="greet-en">Peace be upon you</p>
          <p className="greet-bn" lang="bn">
            আসসালামু আলাইকুম
          </p>
          <p className="greet-hint">Tap a button to call or open a profile. No number to copy.</p>
        </section>

        <nav className="links" aria-label="Contact links">
          <a className="call reveal" style={{ ["--d" as string]: 2 }} href={callLink.href}>
            <span className="call-icon">
              <CallIcon aria-hidden />
            </span>
            <span className="call-text">
              <strong>{callLink.label}</strong>
              <small>{callLink.hint}</small>
            </span>
            <FaArrowRight className="call-arrow" aria-hidden />
          </a>

          <div className="quick reveal" style={{ ["--d" as string]: 3 }}>
            {quickLinks.map(({ label, href, icon: Icon, hint, external, tone }) => (
              <a key={label} className={`tile tile-${tone}`} href={href} {...(external ? ext : {})}>
                <span className="tile-icon">
                  <Icon aria-hidden />
                </span>
                <strong>{label}</strong>
                <small>{hint}</small>
              </a>
            ))}
          </div>

          <p className="section-label reveal" style={{ ["--d" as string]: 4 }}>
            Find me online
          </p>

          <ul className="list">
            {profileLinks.map(({ label, href, icon: Icon, hint }, i) => (
              <li key={label} className="reveal" style={{ ["--d" as string]: 5 + i }}>
                <a className="row" href={href} {...ext}>
                  <span className="row-icon">
                    <Icon aria-hidden />
                  </span>
                  <span className="row-text">
                    <strong>{label}</strong>
                    <small>{hint}</small>
                  </span>
                  <FaArrowUpRightFromSquare className="row-arrow" aria-hidden />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <footer className="reveal" style={{ ["--d" as string]: 11 }}>
          © <Year /> {profile.name}
        </footer>
      </main>
    </>
  );
}
