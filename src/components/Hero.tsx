import { profile, metrics } from '../data/resume'
import s from './Hero.module.scss'

export default function Hero() {
  return (
    <header className={s.hero} id="top">
      <div className={s.frame}>
        {/* Верхняя строка статуса — как индикаторы на приборной панели */}
        <div className={s.statusbar}>
          <span className={s.sys}>PORTFOLIO</span>
          <span className={s.online}>
            <i className={s.led} /> {profile.status}
          </span>
        </div>

        <div className={s.grid}>
          <div className={s.left}>
            <p className={s.eyebrow}>{profile.role} · {profile.level}</p>
            <h1 className={s.name}>
              <span className={s.line1}>Хаматнуров</span>
              <span className={s.line2}>Эмиль</span>
            </h1>
            <p className={s.stack}>
              <span>{profile.stack}</span>
            </p>
            <p className={s.summary}>{profile.summary}</p>

            <div className={s.coords}>
              <span>{profile.location}</span>
              <i className={s.dot} />
              <span>{profile.format}</span>
              <i className={s.dot} />
              <span>EN B1</span>
            </div>

            <div className={s.actions}>
              <a className={s.btnPrimary} href={`https://t.me/${profile.telegram.replace('@', '')}`}>
                Связаться
              </a>
              <a className={s.btnGhost} href="#experience">
                Опыт работы ↓
              </a>
            </div>
          </div>

          <div className={s.right}>
            {/* Портрет — модуль идентификации */}
            <figure className={s.portrait}>
              <div className={s.portraitHead}>
                <span className={s.portraitTag}>
                  <i className={s.recLed} /> REC
                </span>
              </div>
              <div className={s.portraitMedia}>
                <img
                  src={`${import.meta.env.BASE_URL}portrait.jpg`}
                  alt={`${profile.name} — портрет`}
                  width={900}
                  height={1350}
                  loading="eager"
                  // @ts-expect-error fetchpriority is a valid HTML attribute
                  fetchpriority="high"
                  decoding="async"
                />
                <i className={s.scan} />
                <i className={`${s.bracket} ${s.bracketTL}`} />
                <i className={`${s.bracket} ${s.bracketTR}`} />
                <i className={`${s.bracket} ${s.bracketBL}`} />
                <i className={`${s.bracket} ${s.bracketBR}`} />
              </div>
              <figcaption className={s.portraitFoot}>{profile.name}</figcaption>
            </figure>

            {/* Кластер «приборов» — ключевые показатели */}
            <div className={s.cluster} aria-label="Ключевые показатели">
              {metrics.map((m, i) => (
                <div className={s.gauge} key={m.label} style={{ ['--d' as string]: `${i * 0.12 + 0.3}s` }}>
                  <div className={s.gaugeHead}>
                    <span className={s.gaugeNum}>{m.value}</span>
                    <span className={s.gaugeUnit}>{m.unit}</span>
                  </div>
                  <div className={s.gaugeLabel}>{m.label}</div>
                  <div className={s.gaugeBar}>
                    <i style={{ ['--w' as string]: `${68 + i * 8}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={s.scroll}>
          <span>прокрутка</span>
          <i className={s.scrollLine} />
        </div>
      </div>
    </header>
  )
}
