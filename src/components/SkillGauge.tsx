import { useEffect, useRef, useState } from 'react'
import s from './SkillGauge.module.scss'

interface Props {
  name: string
  level: number // 0..100
}

// Радиальный «прибор» уровня владения технологией.
export default function SkillGauge({ name, level }: Props) {
  const ref = useRef<SVGSVGElement | null>(null)
  const [on, setOn] = useState(false)
  const R = 52
  const C = 2 * Math.PI * R
  const gap = C * 0.26 // нижний зазор — стиль спидометра
  const arc = C - gap
  const filled = on ? (arc * level) / 100 : 0

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setOn(true)
          io.disconnect()
        }
      },
      { threshold: 0.4 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <div className={s.wrap}>
      <svg ref={ref} className={s.svg} viewBox="0 0 130 130" role="img" aria-label={`${name}: ${level}%`}>
        <g transform="rotate(133 65 65)">
          <circle
            className={s.track}
            cx="65"
            cy="65"
            r={R}
            strokeDasharray={`${arc} ${C}`}
          />
          <circle
            className={s.value}
            cx="65"
            cy="65"
            r={R}
            strokeDasharray={`${filled} ${C}`}
          />
        </g>
        <text className={s.pct} x="65" y="60" textAnchor="middle">
          {on ? level : 0}
        </text>
        <text className={s.unit} x="65" y="78" textAnchor="middle">
          %
        </text>
      </svg>
      <span className={s.name}>{name}</span>
    </div>
  )
}
