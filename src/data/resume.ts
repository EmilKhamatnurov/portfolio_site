// Единый источник данных визитки. Всё содержимое страницы берётся отсюда.

export const profile = {
  name: 'Хаматнуров Эмиль',
  role: 'Frontend-разработчик и веб-дизайнер',
  stack: 'React · TypeScript',
  level: 'Middle',
  location: 'Уфа',
  format: 'Удалённо',
  status: 'Открыт к предложениям',
  phone: '+7 (917) 425-69-18',
  email: 'emil.khamatnurov@gmail.com',
  telegram: '@emil_khamatnurov',
  summary:
    'Frontend-разработчик уровня middle с опытом создания сложного продуктового веб-приложения на React + TypeScript. Разрабатывал универсальные UI-компоненты, drag-and-drop интерфейсы и собственную дизайн-систему. Совмещаю инженерный подход с навыками UX/UI-дизайна.',
  about:
    'Работаю самостоятельно и довожу задачи до результата без постоянного контроля. Смотрю на разработку через призму бизнеса: понимаю, какая задача стоит за фичей, и исходя из этого расставляю приоритеты и реалистично оцениваю сроки. Главное — чтобы продукт был удобным и приятным для пользователя и решал свою задачу.',
} as const

// Ключевые «приборные» показатели для шапки
export const metrics: { value: string; unit: string; label: string }[] = [
  { value: '3', unit: 'года', label: 'Коммерческий опыт' },
]

// Радиальные «гейджи» — основной стек с уровнем владения
export const coreSkills: { name: string; level: number }[] = [
  { name: 'React', level: 90 },
  { name: 'TypeScript', level: 88 },
  { name: 'Redux / RTK', level: 84 },
  { name: 'SCSS / Sass', level: 90 },
  { name: 'React DnD', level: 82 },
  { name: 'Figma / Pixso', level: 80 },
]

// Полный стек по группам — «системы на борту»
export const stackGroups: { id: string; title: string; items: string[] }[] = [
  {
    id: 'lang',
    title: 'Языки и фреймворки',
    items: ['TypeScript', 'JavaScript (ES6+)', 'React', 'Redux', 'Redux Toolkit'],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    items: [
      'React DnD',
      'react-router-dom',
      'react-hook-form',
      'Material UI',
      'HTML5',
      'SCSS / Sass',
      'SCSS Modules',
      'CSS Grid',
      'Flexbox',
      'БЭМ',
      'REST API',
      'Компонентная архитектура',
      'Адаптивная вёрстка',
    ],
  },
  {
    id: 'build',
    title: 'Сборка · Тесты · CI/CD',
    items: ['Webpack', 'Vite', 'Jest (Unit-тесты)', 'CI/CD (GitLab)'],
  },
  {
    id: 'tools',
    title: 'Инструменты',
    items: ['Git', 'Bitbucket', 'Jira', 'Confluence', 'MobX (базовый)', 'AI / промпт-инжиниринг'],
  },
  {
    id: 'design',
    title: 'UX/UI-дизайн',
    items: [
      'Figma',
      'Pixso',
      'UX-исследования',
      'User Flow',
      'Wireframes',
      'Прототипирование',
      'Проектирование интерфейсов',
      'Дизайн-системы',
      'UI-киты',
      'Auto Layout',
      'Компоненты и варианты',
      'Типографика',
      'Работа с цветом и сеткой',
      'Адаптивный дизайн',
      'Дизайн-токены',
      'Accessibility (a11y)',
    ],
  },
  {
    id: 'base',
    title: 'База',
    items: ['SQL (базово)'],
  },
]

export interface Job {
  company: string
  role: string
  period: string
  status: 'active' | 'done'
  product?: string
  highlights: string[]
}

export const experience: Job[] = [
  {
    company: 'Фикслайн / ЛАТИ',
    role: 'Frontend-разработчик',
    period: 'Март 2024 — июнь 2026',
    status: 'active',
    product:
      'WebTools — профессиональное средство визуализации контролируемых параметров баз данных для администраторов, разработчиков и аналитиков. Клиент-серверная архитектура; подключение к ПК «Каскад», PostgreSQL, MES/ERP. Команда 3–4 разработчика, PM и тимлид.',
    highlights: [
      'Реализовал ключевые инструменты: редактор страниц с компоновкой виджетов, конфигуратор меню с иерархией и отображением, страницу управления пользователями (данные, полномочия, группы)',
      'Спроектировал и реализовал библиотеку базовых UI-компонентов, на основе которых формируются виджеты приложения',
      'Разработал универсальный редактор компонентов с глубокой настройкой — единый инструмент для всех типов компонентов',
      'Внедрил drag-and-drop для элементов, вкладок настроек и блоков страниц (React DnD)',
      'Разрабатывал изолированные функциональные модули с чёткими границами ответственности',
      'Участвовал в код-ревью и в разработке собственной дизайн-системы продукта',
      'Проектировал архитектуру страниц и оптимизировал производительность компонентов',
      'Совмещал разработку с UX/UI-дизайном — макеты интерфейса в Figma и Pixso',
    ],
  },
  {
    company: 'Фриланс',
    role: 'Frontend-разработчик',
    period: 'Сентябрь 2023 — февраль 2024',
    status: 'done',
    highlights: [
      'Разрабатывал сайты для ИП и малого бизнеса под потребности заказчиков',
      'Работал со стеком HTML, SCSS, JavaScript, React',
    ],
  },
]

// Что умею делать — вынесено из опыта в «возможности»
export const capabilities: { title: string; desc: string; tag: string }[] = [
  {
    title: 'Drag-and-drop интерфейсы',
    desc: 'Перетаскивание виджетов, вкладок и блоков страниц на React DnD — в реальном продуктовом редакторе.',
    tag: 'React DnD',
  },
  {
    title: 'Дизайн-системы и UI-кит',
    desc: 'Библиотека базовых компонентов с нуля, на которой строится весь интерфейс приложения.',
    tag: 'Design System',
  },
  {
    title: 'Универсальный редактор',
    desc: 'Единый инструмент глубокой настройки для всех типов компонентов вместо десятка частных.',
    tag: 'Architecture',
  },
  {
    title: 'UX/UI-дизайн',
    desc: 'Сам проектирую интерфейсы в Figma и Pixso — от макета до реализации в коде.',
    tag: 'Figma · Pixso',
  },
]

export const projects: { title: string; desc: string; stack: string[]; note: string }[] = [
  {
    title: 'Интернет-магазин',
    desc: 'Pet-проект на React с активным использованием AI-инструментов в разработке.',
    stack: ['React', 'TypeScript', 'AI-tools'],
    note: 'Репозиторий — запуск в ближайшее время',
  },
]

// Портфолио — живые работы со ссылками
export const portfolio: {
  title: string
  desc: string
  url: string
  tag: string
  kind: string
  stack: string[]
}[] = [
  {
    title: 'Nothing Ear — лендинг',
    desc: 'Промо-страница беспроводных наушников с активным шумоподавлением. Минималистичный чёрно-белый дизайн, адаптивная вёрстка и акцент на продукте.',
    url: 'https://emilkhamatnurov.github.io/Nothing_Ear_Landing/',
    tag: 'Landing',
    kind: 'Сайт',
    stack: ['HTML5', 'SCSS', 'JavaScript'],
  },
  {
    title: 'Метрика — студия интерьера',
    desc: 'Лендинг студии дизайна интерьера: проекты, услуги, отзывы и контакты. Аккуратная типографика и понятная навигация.',
    url: 'https://emilkhamatnurov.github.io/Metrika/',
    tag: 'Landing',
    kind: 'Сайт',
    stack: ['HTML5', 'SCSS', 'JavaScript'],
  },
  {
    title: 'Yandex Pet Day',
    desc: 'UX/UI-макет по техническому заданию от Яндекса. Проектирование интерфейса и визуального стиля в Figma.',
    url: 'https://www.figma.com/design/0lS0TxyX2WuZDngO0Rmmrh/Yandex-Pet-Day.-%D0%A2%D0%B5%D1%85%D0%BD%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B5-%D0%B7%D0%B0%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5-%D0%BE%D1%82-%D0%AF%D0%BD%D0%B4%D0%B5%D0%BA%D1%81%D0%B0.?node-id=8-2&p=f',
    tag: 'UX/UI',
    kind: 'Figma',
    stack: ['Figma', 'UX/UI', 'Прототип'],
  },
]

export const education: { title: string; place: string; period: string }[] = [
  {
    title: 'Бакалавр, Прикладная информатика',
    place: 'Уфимский гос. авиационный технический университет',
    period: '2022',
  },
  { title: 'Middle Frontend-разработчик', place: 'Result University', period: '2025–2026' },
  { title: 'UX/UI-дизайнер', place: 'Яндекс Практикум', period: 'в процессе' },
  { title: 'Frontend-разработчик', place: 'SD Code', period: '2023' },
  { title: 'Программирование на Python', place: 'Stepik', period: '2022' },
  { title: 'HTML, CSS, JS', place: 'WEB Hero School', period: '2022' },
]
