import { ReactElement, useState } from 'react'
import {
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Table,
    TableBody,
    TableCell,
    TableRow,
    Typography,
    useMediaQuery,
} from '@mui/material'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import ImageListItemBar from '@mui/material/ImageListItemBar'
import IconButton from '@mui/material/IconButton'
import InfoIcon from '@mui/icons-material/Info'
import { InView } from 'react-intersection-observer'
import theme from '../../theme'

interface Props {
    data: Ships
    fetchMoreData: () => void
}
export default function GalleryView(props: Props): ReactElement {
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'))

    return (
        <Box display="flex" flexDirection="column">
            <Box m={4} justifyContent="center" display="flex">
                <ImageList
                    variant="quilted"
                    cols={fullScreen ? 1 : 2}
                    rowHeight={fullScreen ? 300 : 400}
                >
                    {props.data.ships.map((item) => (
                        <GalleryItem ship={item} />
                    ))}
                </ImageList>
            </Box>
            <InView onChange={props.fetchMoreData} />
        </Box>
    )
}

interface itemProps {
    ship: Ship
}

function GalleryItem(props: itemProps): ReactElement {
    const [open, setOpen] = useState<boolean>(false)
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'))

    return (
        <>
            <ImageListItem>
                <img
                    src={props.ship.image}
                    alt={props.ship.id}
                    loading="lazy"
                    object-fit="cover"
                    max-height="400px"
                />
                <ImageListItemBar
                    title={props.ship.id}
                    actionIcon={
                        <IconButton
                            onClick={() => setOpen(true)}
                            sx={{
                                color: 'rgba(255, 255, 255, 0.54)',
                            }}
                            aria-label={`info about ${props.ship.id}`}
                        >
                            <InfoIcon />
                        </IconButton>
                    }
                />
            </ImageListItem>
            <Dialog
                fullScreen={fullScreen}
                maxWidth="md"
                open={open}
                onClose={() => setOpen(false)}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {props.ship.name}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        <Table sx={{ minWidth: 300 }}>
                            <TableBody>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        <Typography>Weight:</Typography>
                                    </TableCell>
                                    <TableCell align="right">
                                        <Typography>
                                            {props.ship.weight_kg} kg
                                        </Typography>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        <Typography>Speed:</Typography>
                                    </TableCell>
                                    <TableCell align="right">
                                        <Typography>
                                            {props.ship.speed_kn
                                                ? props.ship.speed_kn + 'kn'
                                                : 'Unavailable'}
                                        </Typography>
                                    </TableCell>
                                </TableRow>

                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        <Typography>Status:</Typography>
                                    </TableCell>
                                    <TableCell align="right">
                                        <Typography>
                                            {props.ship.active
                                                ? 'Active'
                                                : 'Inactive'}
                                        </Typography>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        <Typography>Build:</Typography>
                                    </TableCell>
                                    <TableCell align="right">
                                        <Typography>
                                            {props.ship.year_built} kn
                                        </Typography>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpen(false)} autoFocus>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}
