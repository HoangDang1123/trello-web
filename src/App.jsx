import { useState } from 'react'
import Button from '@mui/material/Button'
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm'
import ThreeDRotation from '@mui/icons-material/ThreeDRotation'
import HomeIcon from '@mui/icons-material/Home'
import { pink } from '@mui/material/colors'
import Typography from '@mui/material/Typography'
import { useColorScheme } from '@mui/material'

function App() {
  const { mode, setMode } = useColorScheme() // Instead of saving to localStorage

  return (
    <>
      <Button onClick={() => {
        setMode(mode === 'light' ? 'dark' : 'light')
      }}
      >
        {mode === 'light' ? 'Turn dark' : 'Turn light'}
      </Button>
      <div>daohoangdang1123@gmail.com</div>

      <Typography variant="body2" color="error">Test Typography</Typography>

      <Button variant='text'>Text</Button>
      <Button variant='contained'>Contained</Button>
      <Button variant='outlined'>Outlined</Button>

      <br/>
      <AccessAlarmIcon/>
      <ThreeDRotation/>

      <HomeIcon />
      <HomeIcon color="primary" />
      <HomeIcon color="secondary" />
      <HomeIcon color="success" />
      <HomeIcon color="action" />
      <HomeIcon color="disabled" />
      <HomeIcon sx={{ color: pink[500] }} />
    </>
  )
}

export default App
