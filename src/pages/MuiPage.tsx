import { useState, useMemo } from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import {
  Button,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Checkbox,
  FormControlLabel,
  Switch,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Tabs,
  Tab,
  Card,
  CardContent,
  CardActions,
  Alert,
  Chip,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Avatar,
  LinearProgress,
  Breadcrumbs,
  Link,
  Divider,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Skeleton,
  Stepper,
  Step,
  StepLabel,
  Pagination,
  Slider,
  Tooltip,
  Menu,
  Snackbar,
} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import SendIcon from '@mui/icons-material/Send'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import HomeIcon from '@mui/icons-material/Home'
import { useTheme } from '../context/ThemeContext'
import { SECTION_ORDER } from '../lib/sectionOrder'

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

function TabPanel({ children, value, index }: TabPanelProps) {
  return (
    <div role="tabpanel" hidden={value !== index}>
      {value === index && <Box sx={{ py: 2 }}>{children}</Box>}
    </div>
  )
}

export default function MuiPage() {
  const { primaryColor, theme: appTheme } = useTheme()
  const [dialogOpen, setDialogOpen] = useState(false)
  const [tabValue, setTabValue] = useState(0)
  const [switchChecked, setSwitchChecked] = useState(false)
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const [snackOpen, setSnackOpen] = useState(false)
  const [sliderVal, setSliderVal] = useState(50)

  const muiTheme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: appTheme,
          primary: { main: primaryColor },
        },
      }),
    [primaryColor, appTheme]
  )

  return (
    <ThemeProvider theme={muiTheme}>
      <div className="page-container">
        <h1>Material UI (MUI)</h1>
        <p>Google Material Design. Все компоненты в едином порядке.</p>

        <h2 className="section-title">{SECTION_ORDER[0]}</h2>
        <div className="component-row">
          <Button variant="contained">Contained</Button>
          <Button variant="outlined">Outlined</Button>
          <Button variant="text">Text</Button>
          <Button variant="contained" color="secondary">Secondary</Button>
          <Button variant="outlined" startIcon={<DeleteIcon />}>С иконкой</Button>
          <Button variant="contained" endIcon={<SendIcon />}>Отправить</Button>
        </div>

        <h2 className="section-title">{SECTION_ORDER[1]}</h2>
        <TextField label="Текстовое поле" placeholder="Введите текст" variant="outlined" sx={{ minWidth: 280 }} />

        <h2 className="section-title">{SECTION_ORDER[2]}</h2>
        <FormControl sx={{ minWidth: 280 }}>
          <InputLabel>Выбор</InputLabel>
          <Select label="Выбор" value="" displayEmpty>
            <MenuItem value="">Пусто</MenuItem>
            <MenuItem value={1}>Вариант 1</MenuItem>
            <MenuItem value={2}>Вариант 2</MenuItem>
          </Select>
        </FormControl>

        <h2 className="section-title">{SECTION_ORDER[3]}</h2>
        <FormControlLabel control={<Checkbox defaultChecked />} label="Чекбокс" />

        <h2 className="section-title">{SECTION_ORDER[4]}</h2>
        <FormControlLabel
          control={<Switch checked={switchChecked} onChange={(e) => setSwitchChecked(e.target.checked)} />}
          label={`Switch ${switchChecked ? 'вкл' : 'выкл'}`}
        />

        <h2 className="section-title">{SECTION_ORDER[5]}</h2>
        <Button variant="contained" onClick={() => setDialogOpen(true)}>Открыть диалог</Button>
        <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
          <DialogTitle>Заголовок диалога</DialogTitle>
          <DialogContent>Содержимое модального окна.</DialogContent>
          <DialogActions>
            <Button onClick={() => setDialogOpen(false)}>Отмена</Button>
            <Button variant="contained" onClick={() => setDialogOpen(false)}>ОК</Button>
          </DialogActions>
        </Dialog>

        <h2 className="section-title">{SECTION_ORDER[6]}</h2>
        <Tabs value={tabValue} onChange={(_, v) => setTabValue(v)}>
          <Tab label="Вкладка 1" />
          <Tab label="Вкладка 2" />
          <Tab label="Вкладка 3" />
        </Tabs>
        <TabPanel value={tabValue} index={0}>Контент первой вкладки.</TabPanel>
        <TabPanel value={tabValue} index={1}>Контент второй вкладки.</TabPanel>
        <TabPanel value={tabValue} index={2}>Контент третьей вкладки.</TabPanel>

        <h2 className="section-title">{SECTION_ORDER[7]}</h2>
        <Card sx={{ maxWidth: 360 }}>
          <CardContent>
            <strong>Заголовок карточки</strong>
            <p style={{ margin: '0.5rem 0 0' }}>Текст карточки с описанием или контентом.</p>
          </CardContent>
          <CardActions>
            <Button size="small">Действие 1</Button>
            <Button size="small">Действие 2</Button>
          </CardActions>
        </Card>

        <h2 className="section-title">{SECTION_ORDER[8]}</h2>
        <div className="component-row" style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
          <Alert severity="success">Успешное сообщение</Alert>
          <Alert severity="info">Информация</Alert>
          <Alert severity="warning">Предупреждение</Alert>
          <Alert severity="error">Ошибка</Alert>
        </div>

        <h2 className="section-title">{SECTION_ORDER[9]}</h2>
        <div className="component-row">
          <Chip label="Chip" />
          <Chip label="Удаляемый" onDelete={() => {}} />
          <Chip label="Цветной" color="primary" />
        </div>

        <h2 className="section-title">{SECTION_ORDER[10]}</h2>
        <TableContainer component={Paper} sx={{ maxWidth: 500 }}>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>Имя</TableCell>
                <TableCell>Роль</TableCell>
                <TableCell align="right">Статус</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow><TableCell>Анна</TableCell><TableCell>Админ</TableCell><TableCell align="right"><Chip label="Активен" size="small" color="success" /></TableCell></TableRow>
              <TableRow><TableCell>Борис</TableCell><TableCell>Редактор</TableCell><TableCell align="right"><Chip label="Активен" size="small" color="success" /></TableCell></TableRow>
              <TableRow><TableCell>Виктор</TableCell><TableCell>Гость</TableCell><TableCell align="right"><Chip label="Ожидание" size="small" /></TableCell></TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <h2 className="section-title">{SECTION_ORDER[11]}</h2>
        <div className="component-row">
          <Avatar>A</Avatar>
          <Avatar sx={{ bgcolor: 'primary.main' }}>Б</Avatar>
          <Avatar src="/vite.svg" alt="Vite" />
          <Avatar sx={{ bgcolor: 'secondary.main' }}>M</Avatar>
        </div>

        <h2 className="section-title">{SECTION_ORDER[12]}</h2>
        <Box sx={{ width: '100%', maxWidth: 360 }}>
          <LinearProgress sx={{ mb: 1 }} />
          <LinearProgress variant="determinate" value={60} />
        </Box>

        <h2 className="section-title">{SECTION_ORDER[13]}</h2>
        <Breadcrumbs aria-label="навигация">
          <Link underline="hover" color="inherit" href="#">Главная</Link>
          <Link underline="hover" color="inherit" href="#">Библиотеки</Link>
          <Box component="span" sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <HomeIcon fontSize="small" /> Material UI
          </Box>
        </Breadcrumbs>

        <h2 className="section-title">{SECTION_ORDER[14]}</h2>
        <Stepper activeStep={1} sx={{ maxWidth: 400 }}>
          <Step><StepLabel>Шаг 1</StepLabel></Step>
          <Step><StepLabel>Шаг 2</StepLabel></Step>
          <Step><StepLabel>Шаг 3</StepLabel></Step>
        </Stepper>

        <h2 className="section-title">{SECTION_ORDER[15]}</h2>
        <Box sx={{ maxWidth: 360 }}>
          <p>Текст выше</p>
          <Divider />
          <p>Текст ниже</p>
        </Box>

        <h2 className="section-title">{SECTION_ORDER[16]}</h2>
        <List dense sx={{ maxWidth: 360 }}>
          <ListItem><ListItemText primary="Пункт списка 1" /></ListItem>
          <ListItem><ListItemText primary="Пункт списка 2" /></ListItem>
          <ListItem>
            <ListItemAvatar><Avatar sx={{ width: 24, height: 24 }}>U</Avatar></ListItemAvatar>
            <ListItemText primary="С аватаром" secondary="второстепенный текст" />
          </ListItem>
        </List>

        <h2 className="section-title">{SECTION_ORDER[17]}</h2>
        <Accordion><AccordionSummary expandIcon={<ExpandMoreIcon />}>Заголовок 1</AccordionSummary><AccordionDetails>Содержимое первого блока.</AccordionDetails></Accordion>
        <Accordion><AccordionSummary expandIcon={<ExpandMoreIcon />}>Заголовок 2</AccordionSummary><AccordionDetails>Содержимое второго блока.</AccordionDetails></Accordion>

        <h2 className="section-title">{SECTION_ORDER[18]}</h2>
        <Box sx={{ maxWidth: 280 }}>
          <Skeleton variant="text" />
          <Skeleton variant="circular" width={40} height={40} sx={{ my: 1 }} />
          <Skeleton variant="rectangular" height={60} />
        </Box>

        <h2 className="section-title">{SECTION_ORDER[19]}</h2>
        <Pagination count={10} defaultPage={1} color="primary" showFirstButton showLastButton />

        <h2 className="section-title">{SECTION_ORDER[20]}</h2>
        <Box sx={{ width: '100%', maxWidth: 280 }}>
          <Slider value={sliderVal} onChange={(_, v) => setSliderVal(v as number)} valueLabelDisplay="auto" />
          <span>{sliderVal}</span>
        </Box>

        <h2 className="section-title">{SECTION_ORDER[21]}</h2>
        <Tooltip title="Подсказка Material UI">
          <Button variant="outlined">Наведи курсор</Button>
        </Tooltip>

        <h2 className="section-title">{SECTION_ORDER[22]}</h2>
        <Button variant="contained" onClick={(e) => setAnchorEl(e.currentTarget)}>Открыть меню</Button>
        <Menu anchorEl={anchorEl} open={!!anchorEl} onClose={() => setAnchorEl(null)}>
          <MenuItem onClick={() => setAnchorEl(null)}>Пункт 1</MenuItem>
          <MenuItem onClick={() => setAnchorEl(null)}>Пункт 2</MenuItem>
          <MenuItem onClick={() => setAnchorEl(null)} disabled>Отключено</MenuItem>
        </Menu>

        <h2 className="section-title">{SECTION_ORDER[23]}</h2>
        <Button variant="outlined" onClick={() => setSnackOpen(true)}>Показать Toast</Button>
        <Snackbar open={snackOpen} autoHideDuration={3000} onClose={() => setSnackOpen(false)} message="Сообщение показано!" />
      </div>
    </ThemeProvider>
  )
}
