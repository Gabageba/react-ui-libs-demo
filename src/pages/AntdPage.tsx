import { useState, useMemo } from 'react'
import {
  ConfigProvider,
  Button,
  Input,
  Select,
  Checkbox,
  Switch,
  Modal,
  Tabs,
  Card,
  Alert,
  Tag,
  Space,
  message,
  Table,
  Breadcrumb,
  Steps,
  Avatar,
  Progress,
  Pagination,
  List,
  Divider,
  Collapse,
  Skeleton,
  Slider,
  Tooltip,
  Dropdown,
} from 'antd'
import { theme as antdTheme } from 'antd'
import type { TabsProps } from 'antd'
import { DeleteOutlined, SendOutlined, UserOutlined, HomeOutlined, DownOutlined } from '@ant-design/icons'
import { useTheme } from '../context/ThemeContext'
import { SECTION_ORDER } from '../lib/sectionOrder'

export default function AntdPage() {
  const { primaryColor, theme: appTheme } = useTheme()
  const [modalOpen, setModalOpen] = useState(false)
  const [messageApi, contextHolder] = message.useMessage()
  const [sliderVal, setSliderVal] = useState(50)

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
        <h1>Ant Design</h1>
        <p>Enterprise UI. Все компоненты в едином порядке.</p>

        <h2 className="section-title">{SECTION_ORDER[0]}</h2>
        <Space wrap>
          <Button type="primary">Primary</Button>
          <Button>Default</Button>
          <Button type="dashed">Dashed</Button>
          <Button type="link">Link</Button>
          <Button type="primary" danger>Danger</Button>
          <Button type="primary" icon={<DeleteOutlined />}>С иконкой</Button>
          <Button type="primary" icon={<SendOutlined />}>Отправить</Button>
        </Space>

        <h2 className="section-title">{SECTION_ORDER[1]}</h2>
        <Input placeholder="Текстовое поле" allowClear style={{ width: 280 }} />

        <h2 className="section-title">{SECTION_ORDER[2]}</h2>
        <Select
          placeholder="Выберите вариант"
          style={{ width: 280 }}
          options={[
            { value: '1', label: 'Вариант 1' },
            { value: '2', label: 'Вариант 2' },
          ]}
        />

        <h2 className="section-title">{SECTION_ORDER[3]}</h2>
        <Checkbox>Чекбокс</Checkbox>

        <h2 className="section-title">{SECTION_ORDER[4]}</h2>
        <Switch defaultChecked /> Switch

        <h2 className="section-title">{SECTION_ORDER[5]}</h2>
        <Button type="primary" onClick={() => setModalOpen(true)}>Открыть диалог</Button>
        <Modal
          title="Заголовок модалки"
          open={modalOpen}
          onCancel={() => setModalOpen(false)}
          onOk={() => setModalOpen(false)}
          okText="ОК"
          cancelText="Отмена"
        >
          <p>Содержимое модального окна.</p>
        </Modal>

        <h2 className="section-title">{SECTION_ORDER[6]}</h2>
        <Tabs defaultActiveKey="1" items={tabItems} />

        <h2 className="section-title">{SECTION_ORDER[7]}</h2>
        <Card title="Заголовок карточки" style={{ maxWidth: 360 }}>
          <p>Текст карточки с описанием или контентом.</p>
          <Space>
            <Button type="link" size="small">Действие 1</Button>
            <Button type="link" size="small">Действие 2</Button>
          </Space>
        </Card>

        <h2 className="section-title">{SECTION_ORDER[8]}</h2>
        <Space direction="vertical" style={{ width: '100%' }}>
          <Alert message="Успех" type="success" showIcon />
          <Alert message="Информация" type="info" showIcon />
          <Alert message="Предупреждение" type="warning" showIcon />
          <Alert message="Ошибка" type="error" showIcon />
        </Space>

        <h2 className="section-title">{SECTION_ORDER[9]}</h2>
        <Space wrap>
          <Tag>Tag</Tag>
          <Tag color="blue">Синий</Tag>
          <Tag color="green">Зелёный</Tag>
          <Tag color="red">Красный</Tag>
        </Space>

        <h2 className="section-title">{SECTION_ORDER[10]}</h2>
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

        <h2 className="section-title">{SECTION_ORDER[11]}</h2>
        <Space wrap>
          <Avatar icon={<UserOutlined />} />
          <Avatar style={{ backgroundColor: primaryColor }}>Б</Avatar>
          <Avatar style={{ backgroundColor: '#52c41a' }}>M</Avatar>
        </Space>

        <h2 className="section-title">{SECTION_ORDER[12]}</h2>
        <div style={{ maxWidth: 360 }}>
          <Progress percent={30} showInfo={false} style={{ marginBottom: 8 }} />
          <Progress percent={70} status="active" />
        </div>

        <h2 className="section-title">{SECTION_ORDER[13]}</h2>
        <Breadcrumb
          items={[
            { href: '#', title: <><HomeOutlined /> Главная</> },
            { href: '#', title: 'Библиотеки' },
            { title: 'Ant Design' },
          ]}
        />

        <h2 className="section-title">{SECTION_ORDER[14]}</h2>
        <Steps
          current={1}
          size="small"
          style={{ maxWidth: 400 }}
          items={[
            { title: 'Шаг 1' },
            { title: 'Шаг 2' },
            { title: 'Шаг 3' },
          ]}
        />

        <h2 className="section-title">{SECTION_ORDER[15]}</h2>
        <div style={{ maxWidth: 360 }}>
          <p>Текст выше</p>
          <Divider />
          <p>Текст ниже</p>
        </div>

        <h2 className="section-title">{SECTION_ORDER[16]}</h2>
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

        <h2 className="section-title">{SECTION_ORDER[17]}</h2>
        <Collapse
          items={[
            { key: '1', label: 'Заголовок 1', children: 'Содержимое первого блока.' },
            { key: '2', label: 'Заголовок 2', children: 'Содержимое второго блока.' },
          ]}
          style={{ maxWidth: 400 }}
        />

        <h2 className="section-title">{SECTION_ORDER[18]}</h2>
        <Skeleton active style={{ maxWidth: 280 }} />

        <h2 className="section-title">{SECTION_ORDER[19]}</h2>
        <Pagination simple defaultCurrent={1} total={50} pageSize={10} />

        <h2 className="section-title">{SECTION_ORDER[20]}</h2>
        <div style={{ maxWidth: 280 }}>
          <Slider value={sliderVal} onChange={setSliderVal} />
          <span>{sliderVal}</span>
        </div>

        <h2 className="section-title">{SECTION_ORDER[21]}</h2>
        <Tooltip title="Подсказка Ant Design">
          <Button>Наведи курсор</Button>
        </Tooltip>

        <h2 className="section-title">{SECTION_ORDER[22]}</h2>
        <Dropdown menu={{ items: menuItems }} trigger={['click']}>
          <Button>
            Открыть меню <DownOutlined />
          </Button>
        </Dropdown>

        <h2 className="section-title">{SECTION_ORDER[23]}</h2>
        <Button type="primary" onClick={() => messageApi.success('Сообщение показано!')}>Показать Toast</Button>
      </div>
    </ConfigProvider>
  )
}
