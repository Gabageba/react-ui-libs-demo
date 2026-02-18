import { useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import * as Tabs from '@radix-ui/react-tabs'
import * as Checkbox from '@radix-ui/react-checkbox'
import * as Switch from '@radix-ui/react-switch'
import * as Slider from '@radix-ui/react-slider'
import * as Tooltip from '@radix-ui/react-tooltip'
import * as Accordion from '@radix-ui/react-accordion'
import * as Progress from '@radix-ui/react-progress'
import { SECTION_ORDER } from '../lib/sectionOrder'
import './RadixPage.css'

export default function RadixPage() {
  const [dialogOpen, setDialogOpen] = useState(false)
  const [switchChecked, setSwitchChecked] = useState(false)
  const [sliderValue, setSliderValue] = useState([50])
  const [progressValue, setProgressValue] = useState(65)
  const [messageShown, setMessageShown] = useState(false)

  return (
    <div className="page-container">
      <h1>Radix UI</h1>
      <p>Headless примитивы. Все компоненты в едином порядке.</p>

      <h2 className="section-title">{SECTION_ORDER[0]}</h2>
      <div className="component-row radix-buttons">
        <button type="button" className="radix-btn radix-btn-primary">Primary</button>
        <button type="button" className="radix-btn radix-btn-secondary">Secondary</button>
        <button type="button" className="radix-btn radix-btn-outline">Outline</button>
        <button type="button" className="radix-btn radix-btn-ghost">Ghost</button>
      </div>

      <h2 className="section-title">{SECTION_ORDER[1]}</h2>
      <input type="text" className="radix-input" placeholder="Текстовое поле" />

      <h2 className="section-title">{SECTION_ORDER[2]}</h2>
      <select className="radix-select">
        <option value="">Выберите вариант</option>
        <option value="1">Вариант 1</option>
        <option value="2">Вариант 2</option>
      </select>

      <h2 className="section-title">{SECTION_ORDER[3]}</h2>
      <label className="radix-label">
        <Checkbox.Root className="radix-checkbox" defaultChecked onCheckedChange={() => {}}>
          <Checkbox.Indicator className="radix-checkbox-indicator">✓</Checkbox.Indicator>
        </Checkbox.Root>
        Чекбокс
      </label>

      <h2 className="section-title">{SECTION_ORDER[4]}</h2>
      <label className="radix-label">
        <Switch.Root className="radix-switch" checked={switchChecked} onCheckedChange={setSwitchChecked}>
          <Switch.Thumb className="radix-switch-thumb" />
        </Switch.Root>
        Switch {switchChecked ? 'вкл' : 'выкл'}
      </label>

      <h2 className="section-title">{SECTION_ORDER[5]}</h2>
      <Dialog.Root open={dialogOpen} onOpenChange={setDialogOpen}>
        <Dialog.Trigger asChild>
          <button type="button" className="radix-btn radix-btn-primary">Открыть диалог</button>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="radix-dialog-overlay" />
          <Dialog.Content className="radix-dialog-content">
            <Dialog.Title className="radix-dialog-title">Заголовок диалога</Dialog.Title>
            <Dialog.Description className="radix-dialog-description">Содержимое модального окна.</Dialog.Description>
            <div style={{ marginTop: 20, display: 'flex', gap: 8, justifyContent: 'flex-end' }}>
              <Dialog.Close asChild>
                <button type="button" className="radix-btn radix-btn-outline">Отмена</button>
              </Dialog.Close>
              <Dialog.Close asChild>
                <button type="button" className="radix-btn radix-btn-primary">ОК</button>
              </Dialog.Close>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>

      <h2 className="section-title">{SECTION_ORDER[6]}</h2>
      <Tabs.Root className="radix-tabs" defaultValue="1">
        <Tabs.List className="radix-tabs-list">
          <Tabs.Trigger className="radix-tabs-trigger" value="1">Вкладка 1</Tabs.Trigger>
          <Tabs.Trigger className="radix-tabs-trigger" value="2">Вкладка 2</Tabs.Trigger>
          <Tabs.Trigger className="radix-tabs-trigger" value="3">Вкладка 3</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content className="radix-tabs-content" value="1">Контент первой вкладки.</Tabs.Content>
        <Tabs.Content className="radix-tabs-content" value="2">Контент второй вкладки.</Tabs.Content>
        <Tabs.Content className="radix-tabs-content" value="3">Контент третьей вкладки.</Tabs.Content>
      </Tabs.Root>

      <h2 className="section-title">{SECTION_ORDER[7]}</h2>
      <div className="radix-card">
        <strong>Заголовок карточки</strong>
        <p style={{ margin: '0.5rem 0 0' }}>Текст карточки с описанием или контентом.</p>
        <div className="component-row" style={{ marginTop: 12 }}>
          <button type="button" className="radix-btn radix-btn-ghost" style={{ padding: '4px 8px', fontSize: 12 }}>Действие 1</button>
          <button type="button" className="radix-btn radix-btn-ghost" style={{ padding: '4px 8px', fontSize: 12 }}>Действие 2</button>
        </div>
      </div>

      <h2 className="section-title">{SECTION_ORDER[8]}</h2>
      <div className="radix-alerts">
        <div className="radix-alert radix-alert-success">Успешное сообщение</div>
        <div className="radix-alert radix-alert-info">Информация</div>
        <div className="radix-alert radix-alert-warn">Предупреждение</div>
        <div className="radix-alert radix-alert-error">Ошибка</div>
      </div>

      <h2 className="section-title">{SECTION_ORDER[9]}</h2>
      <div className="component-row">
        <span className="radix-chip">Chip</span>
        <span className="radix-chip radix-chip-primary">Цветной</span>
      </div>

      <h2 className="section-title">{SECTION_ORDER[10]}</h2>
      <div className="radix-table-wrap">
        <table className="radix-table">
          <thead>
            <tr><th>Имя</th><th>Роль</th><th>Статус</th></tr>
          </thead>
          <tbody>
            <tr><td>Анна</td><td>Админ</td><td>Активен</td></tr>
            <tr><td>Борис</td><td>Редактор</td><td>Активен</td></tr>
            <tr><td>Виктор</td><td>Гость</td><td>Ожидание</td></tr>
          </tbody>
        </table>
      </div>

      <h2 className="section-title">{SECTION_ORDER[11]}</h2>
      <div className="component-row">
        <div className="radix-avatar">А</div>
        <div className="radix-avatar radix-avatar-primary">Б</div>
        <div className="radix-avatar radix-avatar-green">M</div>
      </div>

      <h2 className="section-title">{SECTION_ORDER[12]}</h2>
      <div className="radix-progress-wrap">
        <Progress.Root className="radix-progress" value={progressValue}>
          <Progress.Indicator className="radix-progress-indicator" style={{ width: `${progressValue}%` }} />
        </Progress.Root>
        <span className="radix-slider-value">{progressValue}%</span>
      </div>
      <div className="component-row" style={{ marginTop: 8 }}>
        <button type="button" className="radix-btn radix-btn-outline" onClick={() => setProgressValue((v) => Math.max(0, v - 10))}>−10</button>
        <button type="button" className="radix-btn radix-btn-outline" onClick={() => setProgressValue((v) => Math.min(100, v + 10))}>+10</button>
      </div>

      <h2 className="section-title">{SECTION_ORDER[13]}</h2>
      <nav className="radix-breadcrumbs">
        <a href="#">Главная</a>
        <span aria-hidden>/</span>
        <a href="#">Библиотеки</a>
        <span aria-hidden>/</span>
        <span>Radix UI</span>
      </nav>

      <h2 className="section-title">{SECTION_ORDER[14]}</h2>
      <div className="radix-steps">
        <span className="radix-step-done">1. Шаг 1</span>
        <span className="radix-step-arrow">→</span>
        <span className="radix-step-current">2. Шаг 2</span>
        <span className="radix-step-arrow">→</span>
        <span>3. Шаг 3</span>
      </div>

      <h2 className="section-title">{SECTION_ORDER[15]}</h2>
      <div>
        <p>Текст выше</p>
        <hr className="radix-divider" />
        <p>Текст ниже</p>
      </div>

      <h2 className="section-title">{SECTION_ORDER[16]}</h2>
      <ul className="radix-list">
        <li>Пункт списка 1</li>
        <li>Пункт списка 2</li>
        <li>Пункт с описанием</li>
      </ul>

      <h2 className="section-title">{SECTION_ORDER[17]}</h2>
      <Accordion.Root type="multiple" className="radix-accordion">
        <Accordion.Item value="1">
          <Accordion.Header>
            <Accordion.Trigger className="radix-accordion-trigger">Заголовок 1</Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="radix-accordion-content">Содержимое первого блока.</Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="2">
          <Accordion.Header>
            <Accordion.Trigger className="radix-accordion-trigger">Заголовок 2</Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="radix-accordion-content">Содержимое второго блока.</Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>

      <h2 className="section-title">{SECTION_ORDER[18]}</h2>
      <div className="radix-skeleton">
        <div className="radix-skeleton-line" />
        <div className="radix-skeleton-circle" />
        <div className="radix-skeleton-rect" />
      </div>

      <h2 className="section-title">{SECTION_ORDER[19]}</h2>
      <div className="component-row">
        <button type="button" className="radix-btn radix-btn-outline">‹</button>
        <button type="button" className="radix-btn radix-btn-primary">1</button>
        <button type="button" className="radix-btn radix-btn-outline">2</button>
        <button type="button" className="radix-btn radix-btn-outline">›</button>
      </div>

      <h2 className="section-title">{SECTION_ORDER[20]}</h2>
      <div className="radix-slider-wrap">
        <Slider.Root className="radix-slider" value={sliderValue} onValueChange={setSliderValue} max={100} step={1}>
          <Slider.Track className="radix-slider-track">
            <Slider.Range className="radix-slider-range" />
          </Slider.Track>
          <Slider.Thumb className="radix-slider-thumb" />
        </Slider.Root>
        <span className="radix-slider-value">{sliderValue[0]}</span>
      </div>

      <h2 className="section-title">{SECTION_ORDER[21]}</h2>
      <Tooltip.Provider>
        <Tooltip.Root>
          <Tooltip.Trigger asChild>
            <button type="button" className="radix-btn radix-btn-secondary">Наведи курсор</button>
          </Tooltip.Trigger>
          <Tooltip.Portal>
            <Tooltip.Content className="radix-tooltip-content" sideOffset={5}>
              Подсказка Radix UI
            </Tooltip.Content>
          </Tooltip.Portal>
        </Tooltip.Root>
      </Tooltip.Provider>

      <h2 className="section-title">{SECTION_ORDER[22]}</h2>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>
          <button type="button" className="radix-btn radix-btn-primary">Открыть меню</button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Portal>
          <DropdownMenu.Content className="radix-dropdown-content" sideOffset={5}>
            <DropdownMenu.Item className="radix-dropdown-item">Пункт 1</DropdownMenu.Item>
            <DropdownMenu.Item className="radix-dropdown-item">Пункт 2</DropdownMenu.Item>
            <DropdownMenu.Separator className="radix-dropdown-separator" />
            <DropdownMenu.Item className="radix-dropdown-item" disabled>Отключено</DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>

      <h2 className="section-title">{SECTION_ORDER[23]}</h2>
      <button type="button" className="radix-btn radix-btn-primary" onClick={() => setMessageShown(true)}>Показать Toast</button>
      {messageShown && (
        <div className="radix-toast" role="status">
          Сообщение показано!
        </div>
      )}
    </div>
  )
}
