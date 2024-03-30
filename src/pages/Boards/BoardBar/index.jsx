import React from 'react'
import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import DashboardIcon from '@mui/icons-material/Dashboard'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import BoltIcon from '@mui/icons-material/Bolt'
import FilterListIcon from '@mui/icons-material/FilterList'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import Tooltip from '@mui/material/Tooltip'
import { Button } from '@mui/material'
import PersonAddIcon from '@mui/icons-material/PersonAdd'

const MENU_STYLES = {
  color: 'primary.main', backgroundColor: 'white',
  border: 'none',
  padding: '5px',
  borderRadius: '4px',
  '& .MuiSvgIcon-root': {
    color: 'primary.main'
  },
  '&:hover': {
    bgcolor: 'primary.50'
  }
}

function BoardBar() {
  return (
    <Box sx={{
        backgroundColor: 'white',
        width: '100%',
        height: (theme) => theme.trello.boardBarHeight,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 2,
        paddingX: 2,
        overflowX: 'auto',
        borderTop: '1px solid #FFA500'
    }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Chip
            sx={MENU_STYLES}
            icon={<DashboardIcon />}
            label="HoangDang MERN Stack Board"
            clickable
          />
          <Chip
            sx={MENU_STYLES}
            icon={<VpnLockIcon />}
            label="Public/Private Workspace"
            clickable
          />
          <Chip
            sx={MENU_STYLES}
            icon={<AddToDriveIcon />}
            label="Add To Google Drive"
            clickable
          />
          <Chip
            sx={MENU_STYLES}
            icon={<BoltIcon />}
            label="Automation"
            clickable
          />
          <Chip
            sx={MENU_STYLES}
            icon={<FilterListIcon />}
            label="Filters"
            clickable
          />
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Button variant='outlined' startIcon={<PersonAddIcon/>}>Invite</Button>
          <AvatarGroup
            max={6}
            sx={{
              '& .MuiAvatar-root': {
                width: 34,
                height: 34,
                fontSize: 16
              }
            }}>
            <Tooltip title="Rimuru">
              <Avatar
                alt="Hoàng Đăng"
                src="https://demoda.vn/wp-content/uploads/2022/03/rimuru-tempest-avatar-ngau-599x600.jpg" />
            </Tooltip>
            <Tooltip title="Diablo">
              <Avatar
                alt="Hoàng Đăng"
                src="https://i.pinimg.com/originals/1a/5b/3e/1a5b3e761a2ad1079df22e1b39ca972a.jpg" />
            </Tooltip>
            <Tooltip title="Tesstarosa">
              <Avatar
                alt="Hoàng Đăng"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcxrvrQZj_YZUA9fEKrbbKf2bgmbeUcsJya6dn9NrdFNPD-BqAOGQ4Yw2n3b6iEz3c5wc&usqp=CAU" />
            </Tooltip>
            <Tooltip title="Carrera">
              <Avatar
                alt="Hoàng Đăng"
                src="https://s1.zerochan.net/Carrera.%28Tensei.Shitara.Slime.Datta.Ken%29.600.2733304.jpg" />
            </Tooltip>
            <Tooltip title="Ultima">
              <Avatar
                alt="Hoàng Đăng"
                src="https://go_service.aieasypic.com/?url=https%3A%2F%2Fimage.civitai.com%2FxG1nkqKTMzGDvpLrqFT7WA%2F71bcb087-1877-404d-5ef8-40ce993c9800%2Fwidth%3D600%2F372045.jpeg&type=jpeg&width=512&quality=80" />
            </Tooltip>
          </AvatarGroup>
        </Box>
    </Box>
  )
}

export default BoardBar
