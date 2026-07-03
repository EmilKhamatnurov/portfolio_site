import { useEffect, useState } from 'react'
import s from './SideNav.module.scss'

const items = [
  { id: 'top', label: '00 · Профиль' },
  { id: 'stack', label: '01 · Стек' },
  { id: 'experience', label: '02 · Опыт' },
  { id: 'capabilities', label: '03 · Возможности' },
  { id: 'education', label: '04 · Обучение' },
  { id: 'contact', label: '05 · Связь' },
]

export default function SideNav() {
  const [active, setActive] = useState('top')

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    items.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) io.observe(el)
    })
    return () => io.disconnect()
  }, [])

  return (
    <nav className={s.nav} aria-label="Разделы">
      <ul>
        {items.map((it) => (
          <li key={it.id}>
            <a
              href={`#${it.id}`}
              className={active === it.id ? s.active : ''}
              aria-current={active === it.id ? 'true' : undefined}
            >
              <i className={s.tick} />
              <span>{it.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
