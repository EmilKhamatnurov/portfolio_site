import { useReveal } from './hooks/useReveal'
import Hero from './components/Hero'
import SideNav from './components/SideNav'
import {
  profile,
  stackGroups,
  experience,
  capabilities,
  projects,
  portfolio,
  education,
} from './data/resume'
import s from './App.module.scss'

function SectionHead({ index, title, note }: { index: string; title: string; note?: string }) {
  return (
    <div className={`${s.head} reveal`}>
      <span className={s.headIndex}>{index}</span>
      <h2 className={s.headTitle}>{title}</h2>
      {note && <span className={s.headNote}>{note}</span>}
      <i className={s.headLine} />
    </div>
  )
}

export default function App() {
  useReveal()

  return (
    <>
      <SideNav />
      <main>
        <Hero />

        {/* ── 01 · СТЕК ── */}
        <section className={s.section} id="stack">
          <div className={s.wrap}>
            <SectionHead index="01" title="Стек" note="Системы на борту" />

            <div className={s.stackGrid}>
              {stackGroups.map((g) => (
                <div className={`${s.stackPanel} reveal`} key={g.id}>
                  <div className={s.stackPanelHead}>
                    <span className={s.stackPanelTitle}>{g.title}</span>
                    <span className={s.stackCount}>{String(g.items.length).padStart(2, '0')}</span>
                  </div>
                  <ul className={s.chips}>
                    {g.items.map((it) => (
                      <li key={it}>{it}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 02 · ОПЫТ ── */}
        <section className={s.section} id="experience">
          <div className={s.wrap}>
            <SectionHead index="02" title="Бортовой журнал" note="Опыт работы" />

            <div className={s.timeline}>
              {experience.map((job) => (
                <article className={`${s.job} reveal`} key={job.company}>
                  <div className={s.jobRail}>
                    <i className={`${s.node} ${job.status === 'active' ? s.nodeActive : ''}`} />
                  </div>
                  <div className={s.jobBody}>
                    <div className={s.jobTop}>
                      <h3 className={s.jobCompany}>{job.company}</h3>
                      <span className={s.jobPeriod}>{job.period}</span>
                    </div>
                    <p className={s.jobRole}>
                      {job.role}
                      {job.status === 'active' && <span className={s.badge}>в работе</span>}
                    </p>
                    {job.product && <p className={s.jobProduct}>{job.product}</p>}
                    <ul className={s.jobList}>
                      {job.highlights.map((h, i) => (
                        <li key={i}>{h}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── 03 · ВОЗМОЖНОСТИ + ПРОЕКТЫ ── */}
        <section className={s.section} id="capabilities">
          <div className={s.wrap}>
            <SectionHead index="03" title="Что умею" note="Возможности" />

            <div className={s.capGrid}>
              {capabilities.map((c) => (
                <article className={`${s.cap} reveal`} key={c.title}>
                  <span className={s.capTag}>{c.tag}</span>
                  <h3 className={s.capTitle}>{c.title}</h3>
                  <p className={s.capDesc}>{c.desc}</p>
                </article>
              ))}
            </div>

            <div className={s.projects}>
              {projects.map((p) => (
                <article className={`${s.project} reveal`} key={p.title}>
                  <div className={s.projectMeta}>
                    <span className={s.projectLabel}>Pet-проект</span>
                    <h3 className={s.projectTitle}>{p.title}</h3>
                    <p className={s.projectDesc}>{p.desc}</p>
                    <p className={s.projectNote}>{p.note}</p>
                  </div>
                  <ul className={s.projectStack}>
                    {p.stack.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                </article>
              ))}

              <article className={`${s.about} reveal`}>
                <span className={s.aboutLabel}>Подход</span>
                <p className={s.aboutText}>{profile.about}</p>
              </article>
            </div>
          </div>
        </section>

        {/* ── 04 · ПОРТФОЛИО ── */}
        <section className={s.section} id="portfolio">
          <div className={s.wrap}>
            <SectionHead index="04" title="Портфолио" note="Живые работы" />

            <div className={s.portfolio}>
              {portfolio.map((p) => (
                <a
                  className={`${s.work} reveal`}
                  key={p.url}
                  href={p.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className={s.workHead}>
                    <span className={s.workKind}>{p.kind}</span>
                    <span className={s.workTag}>{p.tag}</span>
                  </div>
                  <h3 className={s.workTitle}>{p.title}</h3>
                  <p className={s.workDesc}>{p.desc}</p>
                  <ul className={s.workStack}>
                    {p.stack.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                  <span className={s.workLink}>
                    Открыть <i className={s.workArrow}>↗</i>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── 05 · ОБУЧЕНИЕ ── */}
        <section className={s.section} id="education">
          <div className={s.wrap}>
            <SectionHead index="05" title="Образование и курсы" />
            <div className={s.eduGrid}>
              {education.map((e) => (
                <article className={`${s.edu} reveal`} key={e.title + e.place}>
                  <span className={s.eduPeriod}>{e.period}</span>
                  <h3 className={s.eduTitle}>{e.title}</h3>
                  <p className={s.eduPlace}>{e.place}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── 06 · СВЯЗЬ ── */}
        <section className={`${s.section} ${s.contactSection}`} id="contact">
          <div className={s.wrap}>
            <div className={`${s.contact} reveal`}>
              <p className={s.contactEyebrow}>06 · Связь</p>
              <h2 className={s.contactTitle}>
                Готов к работе в офисе или удалённо
              </h2>
              <div className={s.contactRows}>
                <a className={s.contactRow} href={`mailto:${profile.email}`}>
                  <span className={s.contactKey}>Email</span>
                  <span className={s.contactVal}>{profile.email}</span>
                  <span className={s.arrow}>↗</span>
                </a>
                <a className={s.contactRow} href={`tel:${profile.phone.replace(/[^+\d]/g, '')}`}>
                  <span className={s.contactKey}>Телефон</span>
                  <span className={s.contactVal}>{profile.phone}</span>
                  <span className={s.arrow}>↗</span>
                </a>
                <a
                  className={s.contactRow}
                  href={`https://t.me/${profile.telegram.replace('@', '')}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className={s.contactKey}>Telegram</span>
                  <span className={s.contactVal}>{profile.telegram}</span>
                  <span className={s.arrow}>↗</span>
                </a>
              </div>
            </div>
          </div>

          <footer className={s.footer}>
            <span>{profile.name}</span>
            <span className={s.footMono}>React · TypeScript · Vite · SCSS Modules</span>
            <span className={s.footMono}>© 2026</span>
          </footer>
        </section>
      </main>
    </>
  )
}
