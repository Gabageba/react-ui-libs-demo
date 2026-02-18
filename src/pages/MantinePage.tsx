import { useState, useMemo } from 'react'
import {
  MantineProvider,
  createTheme,
  Button,
  TextInput,
  Select,
  Checkbox,
  Switch,
  Modal,
  Tabs,
  Card,
  Alert,
  Badge,
  Group,
  Stack,
  Box,
  Table,
  Progress,
  Avatar,
  Breadcrumbs,
  Anchor,
  Accordion,
  List,
  Divider,
  Skeleton,
  Stepper,
  Pagination,
  Slider,
  Tooltip,
  Menu,
} from '@mantine/core'
import '@mantine/core/styles.css'
import { useTheme } from '../context/ThemeContext'
import { SECTION_ORDER } from '../lib/sectionOrder'

function makeShades(hex: string): [string, string, string, string, string, string, string, string, string, string] {
  const same = hex.trim() || '#646cff'
  return [same, same, same, same, same, same, same, same, same, same]
}

export default function MantinePage() {
  const { primaryColor, theme: appTheme } = useTheme()
  const [modalOpen, setModalOpen] = useState(false)
  const [switchChecked, setSwitchChecked] = useState(false)
  const [sliderVal, setSliderVal] = useState(50)

  const mantineTheme = useMemo(
    () =>
      createTheme({
        primaryColor: 'appPrimary',
        colors: {
          appPrimary: makeShades(primaryColor),
        },
      }),
    [primaryColor]
  )

  return (
    <MantineProvider theme={mantineTheme} forceColorScheme={appTheme}>
      <div className="page-container">
        <h1>Mantine</h1>
        <p>100+ компонентов. Все компоненты в едином порядке.</p>

        <h2 className="section-title">{SECTION_ORDER[0]}</h2>
        <Group gap="sm">
          <Button>Default</Button>
          <Button variant="filled">Filled</Button>
          <Button variant="light">Light</Button>
          <Button variant="outline">Outline</Button>
          <Button color="red">Danger</Button>
          <Button variant="subtle">Subtle</Button>
        </Group>

        <h2 className="section-title">{SECTION_ORDER[1]}</h2>
        <TextInput label="Текстовое поле" placeholder="Введите текст" style={{ maxWidth: 280 }} />

        <h2 className="section-title">{SECTION_ORDER[2]}</h2>
        <Select
          label="Выбор"
          placeholder="Выберите вариант"
          data={['Вариант 1', 'Вариант 2']}
          style={{ maxWidth: 280 }}
        />

        <h2 className="section-title">{SECTION_ORDER[3]}</h2>
        <Checkbox label="Чекбокс" defaultChecked />

        <h2 className="section-title">{SECTION_ORDER[4]}</h2>
        <Switch
          label={`Switch ${switchChecked ? 'вкл' : 'выкл'}`}
          checked={switchChecked}
          onChange={(e) => setSwitchChecked(e.currentTarget.checked)}
        />

        <h2 className="section-title">{SECTION_ORDER[5]}</h2>
        <Button onClick={() => setModalOpen(true)}>Открыть диалог</Button>
        <Modal opened={modalOpen} onClose={() => setModalOpen(false)} title="Заголовок модалки">
          <p>Содержимое модального окна.</p>
          <Group mt="md">
            <Button variant="default" onClick={() => setModalOpen(false)}>Отмена</Button>
            <Button onClick={() => setModalOpen(false)}>ОК</Button>
          </Group>
        </Modal>

        <h2 className="section-title">{SECTION_ORDER[6]}</h2>
        <Tabs defaultValue="1">
          <Tabs.List>
            <Tabs.Tab value="1">Вкладка 1</Tabs.Tab>
            <Tabs.Tab value="2">Вкладка 2</Tabs.Tab>
            <Tabs.Tab value="3">Вкладка 3</Tabs.Tab>
          </Tabs.List>
          <Box py="md">
            <Tabs.Panel value="1">Контент первой вкладки.</Tabs.Panel>
            <Tabs.Panel value="2">Контент второй вкладки.</Tabs.Panel>
            <Tabs.Panel value="3">Контент третьей вкладки.</Tabs.Panel>
          </Box>
        </Tabs>

        <h2 className="section-title">{SECTION_ORDER[7]}</h2>
        <Card shadow="sm" padding="lg" radius="md" withBorder style={{ maxWidth: 360 }}>
          <Card.Section withBorder inheritPadding py="xs">
            <strong>Заголовок карточки</strong>
          </Card.Section>
          <p style={{ margin: '0.5rem 0 0' }}>Текст карточки с описанием или контентом.</p>
          <Group mt="md">
            <Button variant="light" size="xs">Действие 1</Button>
            <Button variant="light" size="xs">Действие 2</Button>
          </Group>
        </Card>

        <h2 className="section-title">{SECTION_ORDER[8]}</h2>
        <Stack gap="sm">
          <Alert color="green" title="Успех">Успешное сообщение</Alert>
          <Alert color="blue" title="Информация">Информационное сообщение</Alert>
          <Alert color="yellow" title="Предупреждение">Предупреждение</Alert>
          <Alert color="red" title="Ошибка">Ошибка</Alert>
        </Stack>

        <h2 className="section-title">{SECTION_ORDER[9]}</h2>
        <Group>
          <Badge>Badge</Badge>
          <Badge color="blue">Синий</Badge>
          <Badge color="green">Зелёный</Badge>
          <Badge color="red" variant="light">Красный</Badge>
        </Group>

        <h2 className="section-title">{SECTION_ORDER[10]}</h2>
        <Table withTableBorder withColumnBorders style={{ maxWidth: 500 }}>
          <Table.Thead>
            <Table.Tr><Table.Th>Имя</Table.Th><Table.Th>Роль</Table.Th><Table.Th>Статус</Table.Th></Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            <Table.Tr><Table.Td>Анна</Table.Td><Table.Td>Админ</Table.Td><Table.Td>Активен</Table.Td></Table.Tr>
            <Table.Tr><Table.Td>Борис</Table.Td><Table.Td>Редактор</Table.Td><Table.Td>Активен</Table.Td></Table.Tr>
            <Table.Tr><Table.Td>Виктор</Table.Td><Table.Td>Гость</Table.Td><Table.Td>Ожидание</Table.Td></Table.Tr>
          </Table.Tbody>
        </Table>

        <h2 className="section-title">{SECTION_ORDER[11]}</h2>
        <Group>
          <Avatar color="blue">A</Avatar>
          <Avatar color="green">Б</Avatar>
          <Avatar color="red">M</Avatar>
        </Group>

        <h2 className="section-title">{SECTION_ORDER[12]}</h2>
        <Box style={{ maxWidth: 360 }}>
          <Progress value={40} size="sm" style={{ marginBottom: 8 }} />
          <Progress value={70} color="green" />
        </Box>

        <h2 className="section-title">{SECTION_ORDER[13]}</h2>
        <Breadcrumbs>
          <Anchor href="#">Главная</Anchor>
          <Anchor href="#">Библиотеки</Anchor>
          <span>Mantine</span>
        </Breadcrumbs>

        <h2 className="section-title">{SECTION_ORDER[14]}</h2>
        <Stepper active={1} style={{ maxWidth: 400 }}>
          <Stepper.Step label="Шаг 1" />
          <Stepper.Step label="Шаг 2" />
          <Stepper.Step label="Шаг 3" />
        </Stepper>

        <h2 className="section-title">{SECTION_ORDER[15]}</h2>
        <Box style={{ maxWidth: 360 }}>
          <p>Текст выше</p>
          <Divider />
          <p>Текст ниже</p>
        </Box>

        <h2 className="section-title">{SECTION_ORDER[16]}</h2>
        <List size="sm" style={{ maxWidth: 360 }}>
          <List.Item>Пункт списка 1</List.Item>
          <List.Item>Пункт списка 2</List.Item>
          <List.Item>Пункт с описанием</List.Item>
        </List>

        <h2 className="section-title">{SECTION_ORDER[17]}</h2>
        <Accordion>
          <Accordion.Item value="1">
            <Accordion.Control>Заголовок 1</Accordion.Control>
            <Accordion.Panel>Содержимое первого блока.</Accordion.Panel>
          </Accordion.Item>
          <Accordion.Item value="2">
            <Accordion.Control>Заголовок 2</Accordion.Control>
            <Accordion.Panel>Содержимое второго блока.</Accordion.Panel>
          </Accordion.Item>
        </Accordion>

        <h2 className="section-title">{SECTION_ORDER[18]}</h2>
        <Stack gap="sm" style={{ maxWidth: 280 }}>
          <Skeleton height={20} />
          <Skeleton height={40} circle />
          <Skeleton height={60} />
        </Stack>

        <h2 className="section-title">{SECTION_ORDER[19]}</h2>
        <Pagination total={10} defaultValue={1} withEdges />

        <h2 className="section-title">{SECTION_ORDER[20]}</h2>
        <Box style={{ maxWidth: 280 }}>
          <Slider value={sliderVal} onChange={setSliderVal} />
          <span>{sliderVal}</span>
        </Box>

        <h2 className="section-title">{SECTION_ORDER[21]}</h2>
        <Tooltip label="Подсказка Mantine">
          <Button variant="light">Наведи курсор</Button>
        </Tooltip>

        <h2 className="section-title">{SECTION_ORDER[22]}</h2>
        <Menu shadow="md" width={180}>
          <Menu.Target>
            <Button>Открыть меню</Button>
          </Menu.Target>
          <Menu.Dropdown>
            <Menu.Item>Пункт 1</Menu.Item>
            <Menu.Item>Пункт 2</Menu.Item>
            <Menu.Divider />
            <Menu.Item disabled>Отключено</Menu.Item>
          </Menu.Dropdown>
        </Menu>

        <h2 className="section-title">{SECTION_ORDER[23]}</h2>
        <Button variant="outline">Toast: используйте @mantine/notifications</Button>
      </div>
    </MantineProvider>
  )
}
