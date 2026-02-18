/** Единый порядок секций для всех библиотек */
export const SECTION_ORDER = [
  'Кнопки',
  'Поле ввода',
  'Select',
  'Checkbox',
  'Switch',
  'Диалог',
  'Табы',
  'Карточка',
  'Alert',
  'Chip / Tag / Badge',
  'Таблица',
  'Avatar',
  'Progress',
  'Breadcrumbs',
  'Steps',
  'Divider',
  'List',
  'Accordion',
  'Skeleton',
  'Pagination',
  'Slider',
  'Tooltip',
  'Dropdown Menu',
  'Message / Toast',
] as const

export type SectionTitle = (typeof SECTION_ORDER)[number]
