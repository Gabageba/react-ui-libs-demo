import { useState, useMemo } from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Alert,
  AppBar,
  Autocomplete,
  Avatar,
  Backdrop,
  Badge,
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Breadcrumbs,
  Button,
  ButtonGroup,
  Card,
  CardActions,
  CardContent,
  Checkbox,
  Chip,
  CircularProgress,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Drawer,
  Fab,
  FormControl,
  FormControlLabel,
  IconButton,
  ImageList,
  ImageListItem,
  InputLabel,
  LinearProgress,
  Link,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Menu,
  MenuItem,
  Pagination,
  Paper,
  Select,
  Skeleton,
  Slider,
  Snackbar,
  SpeedDial,
  SpeedDialAction,
  SpeedDialIcon,
  Stack,
  Step,
  StepLabel,
  Stepper,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tabs,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Tooltip,
  Typography,
  Switch,
  Grid,
} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import SendIcon from '@mui/icons-material/Send'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import HomeIcon from '@mui/icons-material/Home'
import SaveIcon from '@mui/icons-material/Save'
import { useTheme } from '../context/ThemeContext'
import Rating from '@mui/material/Rating'
import Popover from '@mui/material/Popover'

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
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [popoverAnchor, setPopoverAnchor] = useState<null | HTMLElement>(null)
  const [ratingVal, setRatingVal] = useState<number | null>(2)
  const [backdropOpen, setBackdropOpen] = useState(false)
  const [bottomNavVal, setBottomNavVal] = useState(0)
  const [toggleFormat, setToggleFormat] = useState<string | null>(null)
  const [speedDialOpen, setSpeedDialOpen] = useState(false)
  const [autocompleteVal, setAutocompleteVal] = useState<string | null>(null)
  const autocompleteOptions = ['Вариант 1', 'Вариант 2', 'Вариант 3']

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
        <p>Все доступные компоненты библиотеки.</p>

        <h2 className="section-title">Кнопки</h2>
        <div className="component-row">
          <Button variant="contained">Contained</Button>
          <Button variant="outlined">Outlined</Button>
          <Button variant="text">Text</Button>
          <Button variant="contained" color="secondary">Secondary</Button>
          <Button variant="outlined" startIcon={<DeleteIcon />}>С иконкой</Button>
          <Button variant="contained" endIcon={<SendIcon />}>Отправить</Button>
        </div>

        <h2 className="section-title">Поле ввода</h2>
        <TextField label="Текстовое поле" placeholder="Введите текст" variant="outlined" sx={{ minWidth: 280 }} />

        <h2 className="section-title">Select</h2>
        <FormControl sx={{ minWidth: 280 }}>
          <InputLabel>Выбор</InputLabel>
          <Select label="Выбор" value="" displayEmpty>
            <MenuItem value="">Пусто</MenuItem>
            <MenuItem value={1}>Вариант 1</MenuItem>
            <MenuItem value={2}>Вариант 2</MenuItem>
          </Select>
        </FormControl>

        <h2 className="section-title">Checkbox</h2>
        <FormControlLabel control={<Checkbox defaultChecked />} label="Чекбокс" />

        <h2 className="section-title">Switch</h2>
        <FormControlLabel
          control={<Switch checked={switchChecked} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSwitchChecked(e.target.checked)} />}
          label={`Switch ${switchChecked ? 'вкл' : 'выкл'}`}
        />

        <h2 className="section-title">Диалог</h2>
        <Button variant="contained" onClick={() => setDialogOpen(true)}>Открыть диалог</Button>
        <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
          <DialogTitle>Заголовок диалога</DialogTitle>
          <DialogContent>Содержимое модального окна.</DialogContent>
          <DialogActions>
            <Button onClick={() => setDialogOpen(false)}>Отмена</Button>
            <Button variant="contained" onClick={() => setDialogOpen(false)}>ОК</Button>
          </DialogActions>
        </Dialog>

        <h2 className="section-title">Табы</h2>
        <Tabs value={tabValue} onChange={(_, v) => setTabValue(v)}>
          <Tab label="Вкладка 1" />
          <Tab label="Вкладка 2" />
          <Tab label="Вкладка 3" />
        </Tabs>
        <TabPanel value={tabValue} index={0}>Контент первой вкладки.</TabPanel>
        <TabPanel value={tabValue} index={1}>Контент второй вкладки.</TabPanel>
        <TabPanel value={tabValue} index={2}>Контент третьей вкладки.</TabPanel>

        <h2 className="section-title">Карточка</h2>
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

        <h2 className="section-title">Alert</h2>
        <div className="component-row" style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
          <Alert severity="success">Успешное сообщение</Alert>
          <Alert severity="info">Информация</Alert>
          <Alert severity="warning">Предупреждение</Alert>
          <Alert severity="error">Ошибка</Alert>
        </div>

        <h2 className="section-title">Chip</h2>
        <div className="component-row">
          <Chip label="Chip" />
          <Chip label="Удаляемый" onDelete={() => {}} />
          <Chip label="Цветной" color="primary" />
        </div>

        <h2 className="section-title">Таблица</h2>
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

        <h2 className="section-title">Avatar</h2>
        <div className="component-row">
          <Avatar>A</Avatar>
          <Avatar sx={{ bgcolor: 'primary.main' }}>Б</Avatar>
          <Avatar src="/vite.svg" alt="Vite" />
          <Avatar sx={{ bgcolor: 'secondary.main' }}>M</Avatar>
        </div>

        <h2 className="section-title">Progress</h2>
        <Box sx={{ width: '100%', maxWidth: 360 }}>
          <LinearProgress sx={{ mb: 1 }} />
          <LinearProgress variant="determinate" value={60} />
        </Box>

        <h2 className="section-title">Breadcrumbs</h2>
        <Breadcrumbs aria-label="навигация">
          <Link underline="hover" color="inherit" href="#">Главная</Link>
          <Link underline="hover" color="inherit" href="#">Библиотеки</Link>
          <Box component="span" sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <HomeIcon fontSize="small" /> Material UI
          </Box>
        </Breadcrumbs>

        <h2 className="section-title">Stepper (Steps)</h2>
        <Stepper activeStep={1} sx={{ maxWidth: 400 }}>
          <Step><StepLabel>Шаг 1</StepLabel></Step>
          <Step><StepLabel>Шаг 2</StepLabel></Step>
          <Step><StepLabel>Шаг 3</StepLabel></Step>
        </Stepper>

        <h2 className="section-title">Divider</h2>
        <Box sx={{ maxWidth: 360 }}>
          <p>Текст выше</p>
          <Divider />
          <p>Текст ниже</p>
        </Box>

        <h2 className="section-title">List</h2>
        <List dense sx={{ maxWidth: 360 }}>
          <ListItem><ListItemText primary="Пункт списка 1" /></ListItem>
          <ListItem><ListItemText primary="Пункт списка 2" /></ListItem>
          <ListItem>
            <ListItemAvatar><Avatar sx={{ width: 24, height: 24 }}>U</Avatar></ListItemAvatar>
            <ListItemText primary="С аватаром" secondary="второстепенный текст" />
          </ListItem>
        </List>

        <h2 className="section-title">Accordion</h2>
        <Accordion><AccordionSummary expandIcon={<ExpandMoreIcon />}>Заголовок 1</AccordionSummary><AccordionDetails>Содержимое первого блока.</AccordionDetails></Accordion>
        <Accordion><AccordionSummary expandIcon={<ExpandMoreIcon />}>Заголовок 2</AccordionSummary><AccordionDetails>Содержимое второго блока.</AccordionDetails></Accordion>

        <h2 className="section-title">Skeleton</h2>
        <Box sx={{ maxWidth: 280 }}>
          <Skeleton variant="text" />
          <Skeleton variant="circular" width={40} height={40} sx={{ my: 1 }} />
          <Skeleton variant="rectangular" height={60} />
        </Box>

        <h2 className="section-title">Pagination</h2>
        <Pagination count={10} defaultPage={1} color="primary" showFirstButton showLastButton />

        <h2 className="section-title">Slider</h2>
        <Box sx={{ width: '100%', maxWidth: 280 }}>
          <Slider value={sliderVal} onChange={(_, v) => setSliderVal(v as number)} valueLabelDisplay="auto" />
          <span>{sliderVal}</span>
        </Box>

        <h2 className="section-title">Tooltip</h2>
        <Tooltip title="Подсказка Material UI">
          <Button variant="outlined">Наведи курсор</Button>
        </Tooltip>

        <h2 className="section-title">Menu (Dropdown)</h2>
        <Button variant="contained" onClick={(e) => setAnchorEl(e.currentTarget)}>Открыть меню</Button>
        <Menu anchorEl={anchorEl} open={!!anchorEl} onClose={() => setAnchorEl(null)}>
          <MenuItem onClick={() => setAnchorEl(null)}>Пункт 1</MenuItem>
          <MenuItem onClick={() => setAnchorEl(null)}>Пункт 2</MenuItem>
          <MenuItem onClick={() => setAnchorEl(null)} disabled>Отключено</MenuItem>
        </Menu>

        <h2 className="section-title">Snackbar (Message / Toast)</h2>
        <Button variant="outlined" onClick={() => setSnackOpen(true)}>Показать Toast</Button>
        <Snackbar open={snackOpen} autoHideDuration={3000} onClose={() => setSnackOpen(false)} message="Сообщение показано!" />

        <h2 className="section-title">Rating</h2>
        <Rating value={ratingVal} onChange={(_, v) => setRatingVal(v)} />

        <h2 className="section-title">Drawer</h2>
        <Button variant="outlined" onClick={() => setDrawerOpen(true)}>Открыть Drawer</Button>
        <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
          <Box sx={{ p: 2, width: 280 }}>
            <p>Содержимое боковой панели.</p>
            <Button variant="contained" onClick={() => setDrawerOpen(false)}>Закрыть</Button>
          </Box>
        </Drawer>

        <h2 className="section-title">Popover</h2>
        <Button variant="outlined" onClick={(e) => setPopoverAnchor(e.currentTarget)}>Открыть Popover</Button>
        <Popover open={!!popoverAnchor} anchorEl={popoverAnchor} onClose={() => setPopoverAnchor(null)} anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}>
          <Box sx={{ p: 2, maxWidth: 280 }}>Контент всплывающей подсказки.</Box>
        </Popover>

        <h2 className="section-title">Fab (Floating Action Button)</h2>
        <Fab color="primary" size="small" aria-label="add"><SendIcon /></Fab>
        <Fab color="secondary" sx={{ ml: 1 }}>+</Fab>

        <h2 className="section-title">IconButton</h2>
        <IconButton color="primary"><DeleteIcon /></IconButton>
        <IconButton color="secondary"><HomeIcon /></IconButton>
        <IconButton size="small"><ExpandMoreIcon /></IconButton>

        <h2 className="section-title">AppBar</h2>
        <AppBar position="static" sx={{ mb: 2 }}>
          <Container><Typography variant="h6">Заголовок приложения</Typography></Container>
        </AppBar>

        <h2 className="section-title">Autocomplete</h2>
        <Autocomplete
          value={autocompleteVal}
          onChange={(_, v) => setAutocompleteVal(v)}
          options={autocompleteOptions}
          sx={{ minWidth: 280 }}
          renderInput={(params) => <TextField {...params} label="Автодополнение" />}
        />

        <h2 className="section-title">Backdrop</h2>
        <Button variant="outlined" onClick={() => setBackdropOpen(true)}>Показать Backdrop</Button>
        <Backdrop open={backdropOpen} onClick={() => setBackdropOpen(false)} sx={{ color: '#fff', zIndex: (t) => t.zIndex.drawer + 1 }}>
          <CircularProgress color="inherit" />
        </Backdrop>

        <h2 className="section-title">Badge</h2>
        <div className="component-row">
          <Badge badgeContent={4} color="primary"><Chip label="Уведомления" /></Badge>
          <Badge badgeContent={0} showZero color="secondary"><Chip label="Ноль" /></Badge>
          <Badge variant="dot" color="success"><Avatar /></Badge>
        </div>

        <h2 className="section-title">BottomNavigation</h2>
        <BottomNavigation value={bottomNavVal} onChange={(_, v) => setBottomNavVal(v)} showLabels sx={{ maxWidth: 360 }}>
          <BottomNavigationAction label="Главная" icon={<HomeIcon />} />
          <BottomNavigationAction label="Отправить" icon={<SendIcon />} />
          <BottomNavigationAction label="Удалить" icon={<DeleteIcon />} />
        </BottomNavigation>

        <h2 className="section-title">ButtonGroup</h2>
        <ButtonGroup variant="contained">
          <Button>Один</Button>
          <Button>Два</Button>
          <Button>Три</Button>
        </ButtonGroup>

        <h2 className="section-title">CircularProgress</h2>
        <div className="component-row">
          <CircularProgress />
          <CircularProgress variant="determinate" value={60} />
        </div>

        <h2 className="section-title">Container</h2>
        <Container maxWidth="sm" sx={{ border: 1, borderColor: 'divider', borderRadius: 1, py: 2 }}>
          <Typography>Контент внутри Container (maxWidth=sm).</Typography>
        </Container>

        <h2 className="section-title">Grid (Grid2)</h2>
        <Grid container spacing={2} sx={{ maxWidth: 400 }}>
          <Grid size={{ xs: 12, md: 6 }}><Paper sx={{ p: 2 }}>Ячейка 1</Paper></Grid>
          <Grid size={{ xs: 12, md: 6 }}><Paper sx={{ p: 2 }}>Ячейка 2</Paper></Grid>
        </Grid>

        <h2 className="section-title">ImageList</h2>
        <ImageList sx={{ width: 280, height: 120 }} cols={3} rowHeight={40}>
          <ImageListItem><Box sx={{ height: 40, bgcolor: 'primary.main', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>1</Box></ImageListItem>
          <ImageListItem><Box sx={{ height: 40, bgcolor: 'secondary.main', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>2</Box></ImageListItem>
          <ImageListItem><Box sx={{ height: 40, bgcolor: 'success.main', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>3</Box></ImageListItem>
        </ImageList>

        <h2 className="section-title">Paper</h2>
        <Paper elevation={3} sx={{ p: 2, maxWidth: 360 }}>
          <Typography>Блок Paper с тенью (elevation=3).</Typography>
        </Paper>

        <h2 className="section-title">SpeedDial</h2>
        <SpeedDial ariaLabel="Действия" icon={<SpeedDialIcon />} onClose={() => setSpeedDialOpen(false)} onOpen={() => setSpeedDialOpen(true)} open={speedDialOpen}>
          <SpeedDialAction icon={<SaveIcon />} tooltipTitle="Сохранить" />
          <SpeedDialAction icon={<DeleteIcon />} tooltipTitle="Удалить" />
        </SpeedDial>

        <h2 className="section-title">Stack</h2>
        <Stack direction="row" spacing={2}>
          <Button variant="contained">Кнопка 1</Button>
          <Button variant="outlined">Кнопка 2</Button>
          <Button variant="text">Кнопка 3</Button>
        </Stack>

        <h2 className="section-title">ToggleButton</h2>
        <ToggleButtonGroup value={toggleFormat} exclusive onChange={(_, v) => setToggleFormat(v)}>
          <ToggleButton value="left" aria-label="влево">Влево</ToggleButton>
          <ToggleButton value="center" aria-label="центр">Центр</ToggleButton>
          <ToggleButton value="right" aria-label="вправо">Вправо</ToggleButton>
        </ToggleButtonGroup>

        <h2 className="section-title">Typography</h2>
        <Box>
          <Typography variant="h1" sx={{ fontSize: '1.5rem' }}>Заголовок h1</Typography>
          <Typography variant="h2" sx={{ fontSize: '1.25rem' }}>Заголовок h2</Typography>
          <Typography variant="body1">Обычный текст (body1).</Typography>
          <Typography variant="body2" color="text.secondary">Второстепенный текст (body2).</Typography>
          <Typography variant="caption">Подпись (caption).</Typography>
          <Typography component="a" href="#" color="primary">Ссылка</Typography>
        </Box>

        <h2 className="section-title">Link</h2>
        <Link href="#" color="primary" underline="hover">Ссылка Material UI</Link>
      </div>
    </ThemeProvider>
  )
}
