import { useState, useMemo } from 'react'
import {
  ConfigProvider,
  theme as antdTheme,
  Affix,
  Alert,
  Anchor,
  AutoComplete,
  Avatar,
  BackTop,
  Badge,
  Breadcrumb,
  Button,
  Calendar,
  Card,
  Carousel,
  Cascader,
  Checkbox,
  Col,
  Collapse,
  ColorPicker,
  DatePicker,
  Descriptions,
  Divider,
  Drawer,
  Dropdown,
  Empty,
  Flex,
  FloatButton,
  Form,
  Image,
  Input,
  InputNumber,
  Layout,
  List,
  Menu,
  message,
  Modal,
  notification,
  Pagination,
  Popconfirm,
  Popover,
  Progress,
  QRCode,
  Radio,
  Rate,
  Result,
  Row,
  Segmented,
  Select,
  Skeleton,
  Slider,
  Space,
  Spin,
  Statistic,
  Steps,
  Switch,
  Table,
  Tabs,
  Tag,
  TimePicker,
  Timeline,
  Tooltip,
  Transfer,
  Tree,
  TreeSelect,
  Typography,
  Upload,
  Watermark,
} from 'antd'
import type { TabsProps } from 'antd'
import { DeleteOutlined, SendOutlined, UserOutlined, HomeOutlined, DownOutlined, InboxOutlined } from '@ant-design/icons'
import { useTheme } from '../context/ThemeContext'

const anchorItems = [
  { key: 'section1', href: '#section1', title: 'Секция 1' },
  { key: 'section2', href: '#section2', title: 'Секция 2' },
]

const treeData = [
  { key: '1', title: 'Узел 1', children: [{ key: '1-1', title: 'Узел 1-1' }, { key: '1-2', title: 'Узел 1-2' }] },
  { key: '2', title: 'Узел 2' },
]

const treeSelectData = [
  { value: '1', label: 'Вариант 1', children: [{ value: '1-1', label: 'Подвариант 1-1' }] },
  { value: '2', label: 'Вариант 2' },
]

export default function AntdPage() {
  const { primaryColor, theme: appTheme } = useTheme()
  const [modalOpen, setModalOpen] = useState(false)
  const [messageApi, contextHolder] = message.useMessage()
  const [notificationApi, contextHolderNotification] = notification.useNotification()
  const [sliderVal, setSliderVal] = useState(50)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [dateVal, setDateVal] = useState<Parameters<NonNullable<React.ComponentProps<typeof DatePicker>['onChange']>>[0]>(null)
  const [cascaderVal, setCascaderVal] = useState<string[]>([])
  const [form] = Form.useForm()

  const antdConfig = useMemo(
    () => ({
      theme: {
        token: { colorPrimary: primaryColor },
        algorithm: appTheme === 'dark' ? antdTheme.darkAlgorithm : antdTheme.defaultAlgorithm,
      },
    }),
    [primaryColor, appTheme]
  )

  const tabItems: TabsProps['items'] = [
    { key: '1', label: 'Вкладка 1', children: 'Контент первой вкладки.' },
    { key: '2', label: 'Вкладка 2', children: 'Контент второй вкладки.' },
    { key: '3', label: 'Вкладка 3', children: 'Контент третьей вкладки.' },
  ]

  const menuItems = [
    { key: '1', label: 'Пункт 1' },
    { key: '2', label: 'Пункт 2' },
    { key: '3', label: 'Отключено', disabled: true },
  ]

  return (
    <ConfigProvider theme={antdConfig.theme}>
      <div className="page-container">
        {contextHolder}
        {contextHolderNotification}
        <h1>Ant Design</h1>
        <p>Все доступные компоненты библиотеки.</p>

        <h2 className="section-title">Affix</h2>
        <Affix offsetTop={0}>
          <Button type="primary">Кнопка прикреплена к верху</Button>
        </Affix>

        <h2 className="section-title">Alert</h2>
        <Space direction="vertical" style={{ width: '100%' }}>
          <Alert message="Успех" type="success" showIcon />
          <Alert message="Информация" type="info" showIcon />
          <Alert message="Предупреждение" type="warning" showIcon />
          <Alert message="Ошибка" type="error" showIcon />
        </Space>

        <h2 className="section-title">Anchor</h2>
        <Anchor items={anchorItems} />

        <h2 className="section-title">AutoComplete</h2>
        <AutoComplete
          style={{ width: 280 }}
          options={[{ value: 'Текст 1' }, { value: 'Текст 2' }]}
          placeholder="Введите или выберите"
        />

        <h2 className="section-title">Avatar</h2>
        <Space wrap>
          <Avatar icon={<UserOutlined />} />
          <Avatar style={{ backgroundColor: primaryColor }}>Б</Avatar>
          <Avatar style={{ backgroundColor: '#52c41a' }}>M</Avatar>
        </Space>

        <h2 className="section-title">BackTop</h2>
        <BackTop />

        <h2 className="section-title">Badge</h2>
        <Space wrap>
          <Badge count={5}><Avatar shape="square" size="large" /></Badge>
          <Badge dot><Avatar shape="square" size="large" /></Badge>
          <Badge count={0} showZero><Avatar shape="square" size="large" /></Badge>
        </Space>

        <h2 className="section-title">Breadcrumb</h2>
        <Breadcrumb
          items={[
            { href: '#', title: <><HomeOutlined /> Главная</> },
            { href: '#', title: 'Библиотеки' },
            { title: 'Ant Design' },
          ]}
        />

        <h2 className="section-title">Button</h2>
        <Space wrap>
          <Button type="primary">Primary</Button>
          <Button>Default</Button>
          <Button type="dashed">Dashed</Button>
          <Button type="link">Link</Button>
          <Button type="primary" danger>Danger</Button>
          <Button type="primary" icon={<DeleteOutlined />}>С иконкой</Button>
          <Button type="primary" icon={<SendOutlined />}>Отправить</Button>
        </Space>

        <h2 className="section-title">Calendar</h2>
        <div style={{ maxWidth: 360 }}>
          <Calendar fullscreen={false} />
        </div>

        <h2 className="section-title">Card</h2>
        <Card title="Заголовок карточки" style={{ maxWidth: 360 }}>
          <p>Текст карточки с описанием или контентом.</p>
          <Space>
            <Button type="link" size="small">Действие 1</Button>
            <Button type="link" size="small">Действие 2</Button>
          </Space>
        </Card>

        <h2 className="section-title">Carousel</h2>
        <div style={{ maxWidth: 400 }}>
          <Carousel>
            <div style={{ height: 80, background: primaryColor, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Слайд 1</div>
            <div style={{ height: 80, background: '#52c41a', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Слайд 2</div>
            <div style={{ height: 80, background: '#1890ff', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Слайд 3</div>
          </Carousel>
        </div>

        <h2 className="section-title">Cascader</h2>
        <Cascader
          style={{ width: 280 }}
          options={[
            { value: '1', label: 'Вариант 1', children: [{ value: '1-1', label: 'Подвариант 1-1' }] },
            { value: '2', label: 'Вариант 2' },
          ]}
          value={cascaderVal}
          onChange={(v) => setCascaderVal(v as string[])}
          placeholder="Выберите"
        />

        <h2 className="section-title">Checkbox</h2>
        <Checkbox>Чекбокс</Checkbox>

        <h2 className="section-title">Collapse</h2>
        <Collapse
          items={[
            { key: '1', label: 'Заголовок 1', children: 'Содержимое первого блока.' },
            { key: '2', label: 'Заголовок 2', children: 'Содержимое второго блока.' },
          ]}
          style={{ maxWidth: 400 }}
        />

        <h2 className="section-title">ColorPicker</h2>
        <ColorPicker showText />

        <h2 className="section-title">DatePicker</h2>
        <DatePicker value={dateVal} onChange={(d) => setDateVal(d)} style={{ width: 280 }} />

        <h2 className="section-title">Descriptions</h2>
        <Descriptions title="Описание" bordered size="small" column={1} style={{ maxWidth: 360 }}>
          <Descriptions.Item label="Имя">Анна</Descriptions.Item>
          <Descriptions.Item label="Роль">Админ</Descriptions.Item>
        </Descriptions>

        <h2 className="section-title">Divider</h2>
        <div style={{ maxWidth: 360 }}>
          <p>Текст выше</p>
          <Divider />
          <p>Текст ниже</p>
        </div>

        <h2 className="section-title">Drawer</h2>
        <Button type="primary" onClick={() => setDrawerOpen(true)}>Открыть Drawer</Button>
        <Drawer title="Боковая панель" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
          <p>Содержимое боковой панели.</p>
        </Drawer>

        <h2 className="section-title">Dropdown</h2>
        <Dropdown menu={{ items: menuItems }} trigger={['click']}>
          <Button>Открыть меню <DownOutlined /></Button>
        </Dropdown>

        <h2 className="section-title">Empty</h2>
        <Empty description="Нет данных" style={{ maxWidth: 280 }} />

        <h2 className="section-title">Flex</h2>
        <Flex gap="small" wrap="wrap">
          <Button type="primary">Кнопка 1</Button>
          <Button>Кнопка 2</Button>
          <Button>Кнопка 3</Button>
        </Flex>

        <h2 className="section-title">FloatButton</h2>
        <FloatButton icon={<SendOutlined />} type="primary" />

        <h2 className="section-title">Form</h2>
        <Form form={form} layout="vertical" style={{ maxWidth: 360 }}>
          <Form.Item name="field" label="Поле" rules={[{ required: true }]}>
            <Input placeholder="Введите значение" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">Отправить</Button>
          </Form.Item>
        </Form>

        <h2 className="section-title">Image</h2>
        <Image width={120} src="https://via.placeholder.com/120" alt="Пример" />

        <h2 className="section-title">Input</h2>
        <Input placeholder="Текстовое поле" allowClear style={{ width: 280 }} />

        <h2 className="section-title">InputNumber</h2>
        <InputNumber min={0} max={100} defaultValue={50} style={{ width: 120 }} />

        <h2 className="section-title">Layout</h2>
        <Layout style={{ maxWidth: 400 }}>
          <Layout.Header style={{ background: primaryColor, color: '#fff', padding: '0 16px' }}>Header</Layout.Header>
          <Layout.Content style={{ padding: 16, minHeight: 60 }}>Content</Layout.Content>
          <Layout.Footer style={{ textAlign: 'center' }}>Footer</Layout.Footer>
        </Layout>

        <h2 className="section-title">List</h2>
        <List
          size="small"
          style={{ maxWidth: 360 }}
          dataSource={['Пункт списка 1', 'Пункт списка 2', 'Пункт с описанием']}
          renderItem={(item, i) => (
            <List.Item>
              {i === 2 ? <List.Item.Meta title={item} description="Второстепенный текст" /> : item}
            </List.Item>
          )}
        />

        <h2 className="section-title">Menu</h2>
        <Menu mode="inline" style={{ width: 200 }} items={menuItems} />

        <h2 className="section-title">message</h2>
        <Button type="primary" onClick={() => messageApi.success('Сообщение показано!')}>Показать Toast</Button>

        <h2 className="section-title">Modal</h2>
        <Button type="primary" onClick={() => setModalOpen(true)}>Открыть диалог</Button>
        <Modal title="Заголовок модалки" open={modalOpen} onCancel={() => setModalOpen(false)} onOk={() => setModalOpen(false)} okText="ОК" cancelText="Отмена">
          <p>Содержимое модального окна.</p>
        </Modal>

        <h2 className="section-title">notification</h2>
        <Button onClick={() => notificationApi.info({ message: 'Уведомление', description: 'Текст уведомления' })}>Показать notification</Button>

        <h2 className="section-title">Pagination</h2>
        <Pagination simple defaultCurrent={1} total={50} pageSize={10} />

        <h2 className="section-title">Popconfirm</h2>
        <Popconfirm title="Подтвердить действие?" onConfirm={() => messageApi.success('Подтверждено')}>
          <Button danger>Удалить</Button>
        </Popconfirm>

        <h2 className="section-title">Popover</h2>
        <Popover content={<div style={{ padding: 8 }}>Контент всплывающей подсказки.</div>} title="Заголовок">
          <Button>Открыть Popover</Button>
        </Popover>

        <h2 className="section-title">Progress</h2>
        <div style={{ maxWidth: 360 }}>
          <Progress percent={30} showInfo={false} style={{ marginBottom: 8 }} />
          <Progress percent={70} status="active" />
        </div>

        <h2 className="section-title">QRCode</h2>
        <QRCode value="https://ant.design" style={{ marginBottom: 8 }} />

        <h2 className="section-title">Radio</h2>
        <Radio.Group defaultValue="a">
          <Radio value="a">Вариант A</Radio>
          <Radio value="b">Вариант B</Radio>
        </Radio.Group>

        <h2 className="section-title">Rate</h2>
        <Rate defaultValue={3} />

        <h2 className="section-title">Result</h2>
        <Result status="success" title="Операция выполнена" subTitle="Всё прошло успешно." style={{ maxWidth: 360 }} />

        <h2 className="section-title">Row / Col (Grid)</h2>
        <Row gutter={[16, 16]}>
          <Col span={12}><div style={{ padding: 16, background: '#f5f5f5' }}>Col 12</div></Col>
          <Col span={12}><div style={{ padding: 16, background: '#f5f5f5' }}>Col 12</div></Col>
        </Row>

        <h2 className="section-title">Segmented</h2>
        <Segmented options={['Карта', 'Список', 'Схема']} />

        <h2 className="section-title">Select</h2>
        <Select
          placeholder="Выберите вариант"
          style={{ width: 280 }}
          options={[
            { value: '1', label: 'Вариант 1' },
            { value: '2', label: 'Вариант 2' },
          ]}
        />

        <h2 className="section-title">Skeleton</h2>
        <Skeleton active style={{ maxWidth: 280 }} />

        <h2 className="section-title">Slider</h2>
        <div style={{ maxWidth: 280 }}>
          <Slider value={sliderVal} onChange={setSliderVal} />
          <span>{sliderVal}</span>
        </div>

        <h2 className="section-title">Space</h2>
        <Space wrap>
          <Button>Кнопка 1</Button>
          <Button>Кнопка 2</Button>
          <Button>Кнопка 3</Button>
        </Space>

        <h2 className="section-title">Spin</h2>
        <Spin tip="Загрузка..." />

        <h2 className="section-title">Statistic</h2>
        <Space>
          <Statistic title="Просмотры" value={1128} />
          <Statistic title="Баланс" value={93.5} precision={2} prefix="₽" />
        </Space>

        <h2 className="section-title">Steps</h2>
        <Steps
          current={1}
          size="small"
          style={{ maxWidth: 400 }}
          items={[{ title: 'Шаг 1' }, { title: 'Шаг 2' }, { title: 'Шаг 3' }]}
        />

        <h2 className="section-title">Switch</h2>
        <Switch defaultChecked /> Switch

        <h2 className="section-title">Table</h2>
        <Table
          dataSource={[
            { key: '1', name: 'Анна', role: 'Админ', status: 'Активен' },
            { key: '2', name: 'Борис', role: 'Редактор', status: 'Активен' },
            { key: '3', name: 'Виктор', role: 'Гость', status: 'Ожидание' },
          ]}
          columns={[
            { title: 'Имя', dataIndex: 'name', key: 'name' },
            { title: 'Роль', dataIndex: 'role', key: 'role' },
            { title: 'Статус', dataIndex: 'status', key: 'status' },
          ]}
          pagination={false}
          size="small"
          style={{ maxWidth: 500 }}
        />

        <h2 className="section-title">Tabs</h2>
        <Tabs defaultActiveKey="1" items={tabItems} />

        <h2 className="section-title">Tag</h2>
        <Space wrap>
          <Tag>Tag</Tag>
          <Tag color="blue">Синий</Tag>
          <Tag color="green">Зелёный</Tag>
          <Tag color="red">Красный</Tag>
        </Space>

        <h2 className="section-title">TimePicker</h2>
        <TimePicker style={{ width: 120 }} />

        <h2 className="section-title">Timeline</h2>
        <Timeline
          items={[
            { children: 'Событие 1' },
            { children: 'Событие 2' },
            { children: 'Событие 3' },
          ]}
        />

        <h2 className="section-title">Tooltip</h2>
        <Tooltip title="Подсказка Ant Design">
          <Button>Наведи курсор</Button>
        </Tooltip>

        <h2 className="section-title">Transfer</h2>
        <Transfer
          dataSource={[
            { key: '1', title: 'Элемент 1' },
            { key: '2', title: 'Элемент 2' },
          ]}
          titles={['Источник', 'Назначение']}
          showSearch
          render={(item) => item.title}
        />

        <h2 className="section-title">Tree</h2>
        <Tree defaultExpandAll treeData={treeData} style={{ maxWidth: 280 }} />

        <h2 className="section-title">TreeSelect</h2>
        <TreeSelect
          style={{ width: 280 }}
          treeData={treeSelectData}
          placeholder="Выберите"
          treeDefaultExpandAll
        />

        <h2 className="section-title">Typography</h2>
        <Typography>
          <Typography.Title level={5}>Заголовок</Typography.Title>
          <Typography.Paragraph>Обычный абзац текста.</Typography.Paragraph>
          <Typography.Text code>код</Typography.Text>
          <Typography.Link href="#">Ссылка</Typography.Link>
        </Typography>

        <h2 className="section-title">Upload</h2>
        <Upload.Dragger name="file" multiple={false}>
          <p className="ant-upload-drag-icon"><InboxOutlined style={{ fontSize: 48, color: primaryColor }} /></p>
          <p className="ant-upload-text">Перетащите файл или нажмите для выбора</p>
        </Upload.Dragger>

        <h2 className="section-title">Watermark</h2>
        <Watermark content="Ant Design">
          <div style={{ height: 120, background: '#fafafa' }}>Контент с водяным знаком</div>
        </Watermark>
      </div>
    </ConfigProvider>
  )
}
