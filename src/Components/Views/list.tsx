import { ReactElement } from 'react'
import {
    Box,
    CardHeader,
    Table,
    TableBody,
    TableCell,
    TableRow,
    Typography,
} from '@mui/material'
import { InView } from 'react-intersection-observer'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import theme from '../../theme'

interface Props {
    ships: Ship[]
    fetchMoreData: () => void
}

export default function ListView(props: Props): ReactElement {
    return (
        <Box display="flex" flexDirection="column">
            {props.ships &&
                props.ships.map((ship: Ship, index: number) => (
                    <Card
                        key={index}
                        sx={{
                            [theme.breakpoints.down('md')]: {
                                display: 'flex',
                                flexDirection: 'column',
                            },
                            display: 'flex',
                            alignItems: 'center',
                            margin: '2rem',
                            gap: theme.spacing(1),
                        }}
                    >
                        <CardMedia
                            component="img"
                            sx={{ maxWidth: 250, height: 250 }}
                            image={ship.image}
                            alt="Live from space album cover"
                        />
                        <Box
                            component={Box}
                            display="flex"
                            flexDirection="column"
                            width="100%"
                        >
                            <CardHeader
                                title={ship.name}
                                subheader={`${ship.home_port} | ${ship.type} | ${ship.year_built} | ${ship.type} | ${ship.missions.length} Missions`}
                            />
                            <CardContent>
                                <Box
                                    display="flex"
                                    flexDirection="row"
                                    gap={4}
                                    sx={{
                                        [theme.breakpoints.down('md')]: {
                                            flexDirection: 'column',
                                        },
                                    }}
                                >
                                    <Table>
                                        <TableBody>
                                            <TableRow>
                                                <TableCell
                                                    component="th"
                                                    scope="row"
                                                >
                                                    <Typography>
                                                        Weight:
                                                    </Typography>
                                                </TableCell>
                                                <TableCell align="right">
                                                    <Typography>
                                                        {ship.weight_kg} kg
                                                    </Typography>
                                                </TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell
                                                    component="th"
                                                    scope="row"
                                                >
                                                    <Typography>
                                                        Speed:
                                                    </Typography>
                                                </TableCell>
                                                <TableCell align="right">
                                                    <Typography>
                                                        {ship.speed_kn
                                                            ? ship.speed_kn +
                                                              'kn'
                                                            : 'Unavailable'}
                                                    </Typography>
                                                </TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                    <Table>
                                        <TableBody>
                                            <TableRow>
                                                <TableCell
                                                    component="th"
                                                    scope="row"
                                                >
                                                    <Typography>
                                                        Status:
                                                    </Typography>
                                                </TableCell>
                                                <TableCell align="right">
                                                    <Typography>
                                                        {ship.active
                                                            ? 'Active'
                                                            : 'Inactive'}
                                                    </Typography>
                                                </TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell
                                                    component="th"
                                                    scope="row"
                                                >
                                                    <Typography>
                                                        Build:
                                                    </Typography>
                                                </TableCell>
                                                <TableCell align="right">
                                                    <Typography>
                                                        {ship.year_built} kn
                                                    </Typography>
                                                </TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </Box>
                            </CardContent>
                        </Box>
                    </Card>
                ))}
            <InView onChange={props.fetchMoreData} />
        </Box>
    )
}
