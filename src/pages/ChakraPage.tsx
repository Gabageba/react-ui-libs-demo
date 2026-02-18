import { useState } from 'react'
import {
  ChakraProvider,
  defaultSystem,
  Box,
  Button,
  Input,
  Field,
  Checkbox,
  Switch,
  Dialog,
  Tabs,
  Card,
  Alert,
  Badge,
  HStack,
  VStack,
  Avatar,
  Progress,
  Breadcrumb,
  List,
  Separator,
  Accordion,
  Skeleton,
  Table,
  Slider,
  Tooltip,
  Menu,
  Toast,
  Toaster,
  createToaster,
  NativeSelect,
} from '@chakra-ui/react'
import { useTheme } from '../context/ThemeContext'
import { SECTION_ORDER } from '../lib/sectionOrder'

const toaster = createToaster({
  placement: 'top-end',
  pauseOnPageIdle: true,
})

export default function ChakraPage() {
  const { theme: appTheme } = useTheme()
  const [dialogOpen, setDialogOpen] = useState(false)
  const [switchChecked, setSwitchChecked] = useState(false)
  const [sliderVal, setSliderVal] = useState([50])

  return (
    <div data-theme={appTheme}>
      <ChakraProvider value={defaultSystem}>
        <div className="page-container">
          <h1>Chakra UI</h1>
          <p>Удобный DX, доступность. Все компоненты в едином порядке.</p>

          <h2 className="section-title">{SECTION_ORDER[0]}</h2>
          <HStack gap={2} flexWrap="wrap">
            <Button variant="solid">Solid</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button colorPalette="blue">Primary</Button>
            <Button colorPalette="red">Danger</Button>
          </HStack>

          <h2 className="section-title">{SECTION_ORDER[1]}</h2>
          <Field.Root maxW="280px">
            <Field.Label>Текстовое поле</Field.Label>
            <Input placeholder="Введите текст" />
          </Field.Root>

          <h2 className="section-title">{SECTION_ORDER[2]}</h2>
          <NativeSelect.Root>
            <NativeSelect.Field>
              <option value="">Выберите вариант</option>
              <option value="1">Вариант 1</option>
              <option value="2">Вариант 2</option>
            </NativeSelect.Field>
            <NativeSelect.Indicator />
          </NativeSelect.Root>

          <h2 className="section-title">{SECTION_ORDER[3]}</h2>
          <Checkbox.Root defaultChecked>
            <Checkbox.HiddenInput />
            <Checkbox.Control />
            <Checkbox.Label>Чекбокс</Checkbox.Label>
          </Checkbox.Root>

          <h2 className="section-title">{SECTION_ORDER[4]}</h2>
          <Switch.Root checked={switchChecked} onCheckedChange={(e) => setSwitchChecked(e.checked)}>
            <Switch.HiddenInput />
            <Switch.Control />
            <Switch.Label>Switch {switchChecked ? 'вкл' : 'выкл'}</Switch.Label>
          </Switch.Root>

          <h2 className="section-title">{SECTION_ORDER[5]}</h2>
          <Dialog.Root open={dialogOpen} onOpenChange={(e) => setDialogOpen(e.open)}>
            <Dialog.Trigger asChild>
              <Button variant="solid" onClick={() => setDialogOpen(true)}>Открыть диалог</Button>
            </Dialog.Trigger>
            <Dialog.Backdrop />
            <Dialog.Positioner>
              <Dialog.Content>
                <Dialog.Header>
                  <Dialog.Title>Заголовок диалога</Dialog.Title>
                  <Dialog.CloseTrigger />
                </Dialog.Header>
                <Dialog.Body>Содержимое модального окна.</Dialog.Body>
                <Dialog.Footer>
                  <Button variant="outline" onClick={() => setDialogOpen(false)}>Отмена</Button>
                  <Button variant="solid" onClick={() => setDialogOpen(false)}>ОК</Button>
                </Dialog.Footer>
              </Dialog.Content>
            </Dialog.Positioner>
          </Dialog.Root>

          <h2 className="section-title">{SECTION_ORDER[6]}</h2>
          <Tabs.Root defaultValue="1">
            <Tabs.List>
              <Tabs.Trigger value="1">Вкладка 1</Tabs.Trigger>
              <Tabs.Trigger value="2">Вкладка 2</Tabs.Trigger>
              <Tabs.Trigger value="3">Вкладка 3</Tabs.Trigger>
            </Tabs.List>
            <Box py={3}>
              <Tabs.Content value="1">Контент первой вкладки.</Tabs.Content>
              <Tabs.Content value="2">Контент второй вкладки.</Tabs.Content>
              <Tabs.Content value="3">Контент третьей вкладки.</Tabs.Content>
            </Box>
          </Tabs.Root>

          <h2 className="section-title">{SECTION_ORDER[7]}</h2>
          <Card.Root maxW="360px">
            <Card.Header>
              <Card.Title>Заголовок карточки</Card.Title>
            </Card.Header>
            <Card.Body>
              <p style={{ margin: 0 }}>Текст карточки с описанием или контентом.</p>
            </Card.Body>
            <Card.Footer>
              <Button size="sm" variant="ghost">Действие 1</Button>
              <Button size="sm" variant="ghost">Действие 2</Button>
            </Card.Footer>
          </Card.Root>

          <h2 className="section-title">{SECTION_ORDER[8]}</h2>
          <VStack align="stretch" gap={2}>
            <Alert.Root colorPalette="green" variant="solid">
              <Alert.Indicator />
              <Alert.Title>Успех</Alert.Title>
              <Alert.Description>Успешное сообщение</Alert.Description>
            </Alert.Root>
            <Alert.Root colorPalette="blue">
              <Alert.Indicator />
              <Alert.Title>Информация</Alert.Title>
            </Alert.Root>
            <Alert.Root colorPalette="orange">
              <Alert.Indicator />
              <Alert.Title>Предупреждение</Alert.Title>
            </Alert.Root>
            <Alert.Root colorPalette="red">
              <Alert.Indicator />
              <Alert.Title>Ошибка</Alert.Title>
            </Alert.Root>
          </VStack>

          <h2 className="section-title">{SECTION_ORDER[9]}</h2>
          <HStack gap={2}>
            <Badge>Badge</Badge>
            <Badge colorPalette="blue">Синий</Badge>
            <Badge colorPalette="green">Зелёный</Badge>
            <Badge colorPalette="red">Красный</Badge>
          </HStack>

          <h2 className="section-title">{SECTION_ORDER[10]}</h2>
          <Box overflowX="auto" maxW="500px">
            <Table.Root size="sm">
              <Table.Header>
                <Table.Row>
                  <Table.ColumnHeader>Имя</Table.ColumnHeader>
                  <Table.ColumnHeader>Роль</Table.ColumnHeader>
                  <Table.ColumnHeader textAlign="right">Статус</Table.ColumnHeader>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                <Table.Row><Table.Cell>Анна</Table.Cell><Table.Cell>Админ</Table.Cell><Table.Cell textAlign="right">Активен</Table.Cell></Table.Row>
                <Table.Row><Table.Cell>Борис</Table.Cell><Table.Cell>Редактор</Table.Cell><Table.Cell textAlign="right">Активен</Table.Cell></Table.Row>
                <Table.Row><Table.Cell>Виктор</Table.Cell><Table.Cell>Гость</Table.Cell><Table.Cell textAlign="right">Ожидание</Table.Cell></Table.Row>
              </Table.Body>
            </Table.Root>
          </Box>

          <h2 className="section-title">{SECTION_ORDER[11]}</h2>
          <HStack gap={3}>
            <Avatar.Root><Avatar.Fallback>А</Avatar.Fallback></Avatar.Root>
            <Avatar.Root colorPalette="blue"><Avatar.Fallback>Б</Avatar.Fallback></Avatar.Root>
            <Avatar.Root colorPalette="green"><Avatar.Fallback>M</Avatar.Fallback></Avatar.Root>
          </HStack>

          <h2 className="section-title">{SECTION_ORDER[12]}</h2>
          <Box maxW="360px">
            <Progress.Root value={60} size="sm"><Progress.Track><Progress.Range /></Progress.Track></Progress.Root>
          </Box>

          <h2 className="section-title">{SECTION_ORDER[13]}</h2>
          <Breadcrumb.Root>
            <Breadcrumb.List>
              <Breadcrumb.Item><Breadcrumb.Link href="#">Главная</Breadcrumb.Link></Breadcrumb.Item>
              <Breadcrumb.Separator />
              <Breadcrumb.Item><Breadcrumb.Link href="#">Библиотеки</Breadcrumb.Link></Breadcrumb.Item>
              <Breadcrumb.Separator />
              <Breadcrumb.Item><Breadcrumb.CurrentLink>Chakra UI</Breadcrumb.CurrentLink></Breadcrumb.Item>
            </Breadcrumb.List>
          </Breadcrumb.Root>

          <h2 className="section-title">{SECTION_ORDER[14]}</h2>
          <HStack gap={2} fontSize="sm">
            <Box as="span" fontWeight="bold">1. Шаг 1</Box>
            <Box as="span">→</Box>
            <Box as="span" fontWeight="bold">2. Шаг 2</Box>
            <Box as="span">→</Box>
            <Box as="span">3. Шаг 3</Box>
          </HStack>

          <h2 className="section-title">{SECTION_ORDER[15]}</h2>
          <Box maxW="360px">
            <p>Текст выше</p>
            <Separator />
            <p>Текст ниже</p>
          </Box>

          <h2 className="section-title">{SECTION_ORDER[16]}</h2>
          <List.Root maxW="360px">
            <List.Item>Пункт списка 1</List.Item>
            <List.Item>Пункт списка 2</List.Item>
            <List.Item>Пункт с описанием</List.Item>
          </List.Root>

          <h2 className="section-title">{SECTION_ORDER[17]}</h2>
          <Accordion.Root defaultValue={['1']} multiple>
            <Accordion.Item value="1">
              <Accordion.ItemTrigger>Заголовок 1</Accordion.ItemTrigger>
              <Accordion.ItemContent>Содержимое первого блока.</Accordion.ItemContent>
            </Accordion.Item>
            <Accordion.Item value="2">
              <Accordion.ItemTrigger>Заголовок 2</Accordion.ItemTrigger>
              <Accordion.ItemContent>Содержимое второго блока.</Accordion.ItemContent>
            </Accordion.Item>
          </Accordion.Root>

          <h2 className="section-title">{SECTION_ORDER[18]}</h2>
          <VStack align="stretch" gap={2} maxW="280px">
            <Skeleton height="20px" />
            <Skeleton width="40px" height="40px" borderRadius="full" />
            <Skeleton height="60px" />
          </VStack>

          <h2 className="section-title">{SECTION_ORDER[19]}</h2>
          <HStack gap={1}>
            <Button size="sm" variant="outline">‹</Button>
            <Button size="sm" variant="solid">1</Button>
            <Button size="sm" variant="outline">2</Button>
            <Button size="sm" variant="outline">›</Button>
          </HStack>

          <h2 className="section-title">{SECTION_ORDER[20]}</h2>
          <Box maxW="280px">
            <Slider.Root value={sliderVal} onValueChange={(e) => setSliderVal(e.value)} min={0} max={100}>
              <Slider.Control>
                <Slider.Track><Slider.Range /></Slider.Track>
                <Slider.Thumb index={0} />
              </Slider.Control>
            </Slider.Root>
            <span>{sliderVal[0]}</span>
          </Box>

          <h2 className="section-title">{SECTION_ORDER[21]}</h2>
          <Tooltip.Root>
            <Tooltip.Trigger asChild>
              <Button variant="outline">Наведи курсор</Button>
            </Tooltip.Trigger>
            <Tooltip.Positioner>
              <Tooltip.Content>Подсказка Chakra UI</Tooltip.Content>
            </Tooltip.Positioner>
          </Tooltip.Root>

          <h2 className="section-title">{SECTION_ORDER[22]}</h2>
          <Menu.Root>
            <Menu.Trigger asChild>
              <Button variant="solid">Открыть меню</Button>
            </Menu.Trigger>
            <Menu.Positioner>
              <Menu.Content>
                <Menu.Item value="1">Пункт 1</Menu.Item>
                <Menu.Item value="2">Пункт 2</Menu.Item>
                <Menu.Item value="3" disabled>Отключено</Menu.Item>
              </Menu.Content>
            </Menu.Positioner>
          </Menu.Root>

          <h2 className="section-title">{SECTION_ORDER[23]}</h2>
          <Button
            variant="solid"
            onClick={() =>
              toaster.create({
                title: 'Сообщение показано!',
                type: 'success',
              })
            }
          >
            Показать Toast
          </Button>
        </div>
        <Toaster toaster={toaster}>
          {(toast) => (
            <Toast.Root key={toast.id}>
              <Toast.Title>{toast.title}</Toast.Title>
              <Toast.CloseTrigger />
            </Toast.Root>
          )}
        </Toaster>
      </ChakraProvider>
    </div>
  )
}
