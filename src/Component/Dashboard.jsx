import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Grid from '@mui/material/Grid';
import AvTimerIcon from '@mui/icons-material/AvTimer';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent'
import cycle from '../image/cycle.png'
import graph from '../image/graph.png'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import MapsUgcIcon from '@mui/icons-material/MapsUgc';
import PersonIcon from '@mui/icons-material/Person';
import SellIcon from '@mui/icons-material/Sell';
import DoneIcon from '@mui/icons-material/Done';
import SportsGolfIcon from '@mui/icons-material/SportsGolf';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


export default function Dashboard() {
    return (
        <div className='dasboard-content dasboard-margin-top p-6 bg-aliceblue'>
            {/* dashboard Daily update section  */}
            <div className='p-4 bg-white c-border-radius-6'>
                <Box className='d-flex align-items-center justify-content-between c-boder-bottom pb-2'>
                    <Typography>Daily Update</Typography>
                    <Box><MoreHorizIcon /></Box>
                </Box>

                <Box className="mt-4">
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={4} >
                            <div className='d-flex align-items-center justify-content-between bg-aliceblue px-4 py-2 c-border-4 c-border-radius-6' >
                                <Box className=''>
                                    <Typography variant='h6' className='text-blue' fontWeight={'700'} lineHeight={1.2}>122</Typography>
                                    <Typography variant='body2' className='daily-update-caption font-size-12'>ETA'S Update</Typography>
                                </Box>
                                <Box className="status-icon">
                                    <AvTimerIcon className='text-white' />
                                </Box>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={4} >
                            <div className='d-flex align-items-center justify-content-between bg-aliceblue px-4 py-2 c-border-4 c-border-radius-6' >
                                <Box className=''>
                                    <Typography variant='h6' className='text-blue' fontWeight={'700'} lineHeight={1.2}>74</Typography>
                                    <Typography variant='body2' className='font-size-12'>ETD'S Update</Typography>
                                </Box>
                                <Box className="status-icon">
                                    <SportsGolfIcon className='text-white' />
                                </Box>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <div className='d-flex align-items-center justify-content-between bg-aliceblue px-4 py-2 c-border-4 c-border-radius-6' >
                                <Box className=''>
                                    <Typography variant='h6' className='text-blue' fontWeight={'700'} lineHeight={1.2}>234</Typography>
                                    <Typography variant='body2' className='font-size-12'>Awaiting Delivery</Typography>
                                </Box>
                                <Box className="status-icon">
                                    <LocalShippingIcon className='text-white' />
                                </Box>
                            </div>
                        </Grid>

                    </Grid>
                </Box>

            </div>
            <Grid container spacing={2} mt={1}>
                {/* Active Shipments section  */}
                <Grid item xs={12} md={6}>
                    <Card>
                        <CardContent>
                            <Typography variant='body1' pb={1} sx={{ borderBottom: '1px solid #f1f1f1' }}>
                                Active Shipments
                            </Typography>
                            <Grid container spacing={2} mt={1}>
                                <Grid item xs={12} md={5} className='text-center'>
                                    <img className='active-ship-image' src={cycle} alt="cycle image" />
                                </Grid>
                                <Grid item xs={12} md={7}>
                                    <div className='d-flex align-items-center justify-content-between c-boder-bottom p-2'>
                                        <Box className='d-flex align-items-center justify-content-start'>
                                            <Box className="color-box bg-blue"></Box>
                                            <Typography variant='body2'>All shipments: <span className='font-600'> 1276</span></Typography>

                                        </Box>
                                        <NavigateNextIcon color='primary' />
                                    </div>
                                    <div className='d-flex align-items-center justify-content-between c-boder-bottom p-2'>
                                        <Box className='d-flex align-items-center justify-content-start'>
                                            <Box className="color-box bg-green"></Box>
                                            <Typography variant='body2'>At Origin Port: <span className='font-600'> 475</span></Typography>

                                        </Box>
                                        <NavigateNextIcon color='primary' />
                                    </div>
                                    <div className='d-flex align-items-center justify-content-between c-boder-bottom p-2'>
                                        <Box className='d-flex align-items-center justify-content-start'>
                                            <Box className="color-box bg-skyblue"></Box>
                                            <Typography variant='body2'>In Transit: <span className='font-600'> 335</span></Typography>

                                        </Box>
                                        <NavigateNextIcon color='primary' />
                                    </div>
                                    <div className='d-flex align-items-center justify-content-between c-boder-bottom p-2'>
                                        <Box className='d-flex align-items-center justify-content-start'>
                                            <Box className="color-box bg-yellow"></Box>
                                            <Typography variant='body2'>At Destination Port: <span className='font-600'> 275</span></Typography>

                                        </Box>
                                        <NavigateNextIcon color='primary' />
                                    </div>
                                    <div className='d-flex align-items-center justify-content-between c-boder-bottom p-2'>
                                        <Box className='d-flex align-items-center justify-content-start'>
                                            <Box className="color-box bg-darkblue"></Box>
                                            <Typography variant='body2'>Gate Out: <span className='font-600'> 275</span></Typography>

                                        </Box>
                                        <NavigateNextIcon color='primary' />
                                    </div>
                                </Grid>
                            </Grid>
                        </CardContent>

                    </Card>
                    <Card className='mt-4'>
                        <CardContent>
                            <Box sx={{ borderBottom: '1px solid #f1f1f1',pb:1 }} className='d-flex align-items-center justify-content-between volumes-heading'>
                                <Typography variant='body1' >
                                    Volumes
                                </Typography>
                                <Box>
                                    <Button className='dropdown-btn' endIcon={<KeyboardArrowDownIcon/>}>Volume : SEA</Button>
                                    <Button className='dropdown-btn' endIcon={<KeyboardArrowDownIcon/>}>Origin</Button>
                                    <Button className='btn bg-blue active'><ArrowBackIosNewIcon className='btn-icon '/></Button>
                                    <Button className='btn'><ArrowForwardIosIcon className='btn-icon'/></Button>
                                </Box>
                            </Box>

                            <Grid container spacing={2} mt={1}>
                                <Grid item xs={12} className='text-center'>
                                    <img src={graph} alt="cycle image" />
                                </Grid>

                            </Grid>
                        </CardContent>

                    </Card>
                </Grid>
                {/* Notification section  */}
                <Grid item xs={12} md={6}>
                    <Card>
                        <CardContent >
                            <Typography variant='body1' pb={1} sx={{ borderBottom: '1px solid #f1f1f1' }}>
                                Notification
                            </Typography>
                            <div className='notification-cardcontent'>
                                <div className='d-flex align-items-center justify-content-between c-boder-bottom p-2'>
                                    <Box className='d-flex align-items-center justify-content-start'>
                                        <Box className="notification-box bg-primary text-white"><KeyboardIcon className='font-size-18' /></Box>
                                        <Typography variant='body2'>ETA for shipments <span className='font-600 notification-span'>DCU2039</span>has been update</Typography>

                                    </Box>
                                    <NavigateNextIcon color='primary' />
                                </div>
                                <div className='d-flex align-items-center justify-content-between c-boder-bottom p-2'>
                                    <Box className='d-flex align-items-center justify-content-start'>
                                        <Box className="notification-box bg-primary text-white"><MapsUgcIcon className='font-size-18' /></Box>
                                        <Typography variant='body2'>You have a message from ICL regarding shipment <span className='font-600 notification-span'>ICL20394</span>has been update</Typography>

                                    </Box>
                                    <NavigateNextIcon color='primary' />
                                </div>
                                <div className='d-flex align-items-center justify-content-between c-boder-bottom p-2'>
                                    <Box className='d-flex align-items-center justify-content-start'>
                                        <Box className="notification-box bg-primary text-white"><KeyboardIcon className='font-size-18' /></Box>
                                        <Typography variant='body2'>ETD for shipment <span className='font-600 notification-span'>DCU2374</span>has been update</Typography>

                                    </Box>
                                    <NavigateNextIcon color='primary' />
                                </div>
                                <div className='d-flex align-items-center justify-content-between c-boder-bottom p-2'>
                                    <Box className='d-flex align-items-center justify-content-start'>
                                        <Box className="notification-box bg-primary text-white"><PersonIcon className='font-size-18' /></Box>
                                        <Typography variant='body2'>james Carter has joined the Phunk Creative team.</Typography>

                                    </Box>
                                    <NavigateNextIcon color='primary' />
                                </div>
                                <div className='d-flex align-items-center justify-content-between c-boder-bottom p-2'>
                                    <Box className='d-flex align-items-center justify-content-start'>
                                        <Box className="notification-box bg-primary text-white"><SellIcon className='font-size-18 sell-icon-rotate' /></Box>
                                        <Typography variant='body2'>ICL have responed to your quote request </Typography>

                                    </Box>
                                    <NavigateNextIcon color='primary' />
                                </div>
                                <div className='d-flex align-items-center justify-content-between c-boder-bottom p-2'>
                                    <Box className='d-flex align-items-center justify-content-start'>
                                        <Box className="notification-box bg-primary text-white"><KeyboardIcon className='font-size-18' /></Box>
                                        <Typography variant='body2'>A file has been upload to shipment<span className='font-600 notification-span'>RND38495</span></Typography>

                                    </Box>
                                    <NavigateNextIcon color='primary' />
                                </div>
                                <div className='d-flex align-items-center justify-content-between c-boder-bottom p-2'>
                                    <Box className='d-flex align-items-center justify-content-start'>
                                        <Box className="notification-box bg-primary text-white"><KeyboardIcon className='font-size-18' /></Box>
                                        <Typography variant='body2'>You have a message from ICL regarding shipment<span className='font-600 notification-span'>ICL20294</span></Typography>

                                    </Box>
                                    <NavigateNextIcon color='primary' />
                                </div>
                                <div className='d-flex align-items-center justify-content-between c-boder-bottom p-2'>
                                    <Box className='d-flex align-items-center justify-content-start'>
                                        <Box className="notification-box bg-primary text-white"><SellIcon className='font-size-18' /></Box>
                                        <Typography variant='body2'>ETD for shipment <span className='font-600 notification-span'>DCU2374</span>has been update</Typography>

                                    </Box>
                                    <NavigateNextIcon color='primary' />
                                </div>
                                <div className='d-flex align-items-center justify-content-between c-boder-bottom p-2'>
                                    <Box className='d-flex align-items-center justify-content-start'>
                                        <Box className="notification-box bg-primary text-white"><KeyboardIcon className='font-size-18' /></Box>
                                        <Typography variant='body2'>james Carter has joined the Phunk Creative team.</Typography>

                                    </Box>
                                    <NavigateNextIcon color='primary' />
                                </div>
                                <div className='d-flex align-items-center justify-content-between c-boder-bottom p-2'>
                                    <Box className='d-flex align-items-center justify-content-start'>
                                        <Box className="notification-box bg-primary text-white"><KeyboardIcon className='font-size-18' /></Box>
                                        <Typography variant='body2'>ICL have responed to your quote request </Typography>
                                    </Box>
                                    <NavigateNextIcon color='primary' />
                                </div>
                            </div>

                        </CardContent>

                    </Card>
                    <Grid container spacing={2} mt={1}>
                        <Grid item xs={12} md={6}>
                            <div className='d-flex align-items-center justify-content-between bg-white p-2 px-4 c-border-4' >
                                <Box className=''>
                                    <Typography variant='h6' color={'primary'} fontWeight={'700'} lineHeight={1.2}>26</Typography>
                                    <Typography variant='caption'>Confirm Booking</Typography>
                                </Box>
                                <Box className="notification-status-icon bg-green">
                                    <DoneIcon className='text-white' />
                                </Box>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <div className='d-flex align-items-center justify-content-between bg-white p-2 px-4 c-border-4' >
                                <Box className=''>
                                    <Typography variant='h6' color={'primary'} fontWeight={'700'} lineHeight={1.2}>32</Typography>
                                    <Typography variant='caption'>Pending Quotes</Typography>
                                </Box>
                                <Box className="notification-status-icon bg-yellow">
                                    <SellIcon className='text-white sell-icon-rotate' />
                                </Box>
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}
