import { Close } from '@mui/icons-material'
import {
    Box,
    Button,
    Divider,
    Drawer,
    MenuItem,
    TextField,
    Typography,
} from '@mui/material'
import { ReactElement } from 'react'

interface FilterDrawerProps {
    open: boolean
    setFilterDrawerOpen: (state: boolean) => void
    setTypeFilter: (type: string) => void
    type: string
}

const Types = ['High Speed Craft', 'Cargo', 'Tug', 'Barge']

export function FilterDrawer(props: FilterDrawerProps): ReactElement {
    const handleDrawerClose = () => {
        props.setFilterDrawerOpen(false)
    }

    const resetFilters = () => {
        props.setTypeFilter('')
        props.setFilterDrawerOpen(false)
    }

    const handleAcceptFilterChanges = () => {
        props.setFilterDrawerOpen(false)
    }

    return (
        <Drawer variant="temporary" anchor="right" open={props.open}>
            <Box
                display="flex"
                flexDirection="column"
                p={3}
                width="320px"
                height="100%"
            >
                <Box display="flex" alignItems="center">
                    <Typography variant="h6">Filters</Typography>

                    <Button
                        id="filter-drawer-close-button"
                        sx={{ ml: 'auto' }}
                        color="primary"
                        onClick={() => handleDrawerClose()}
                    >
                        <Close />
                    </Button>
                </Box>
                <Divider sx={{ mb: 4 }} />
                <Box gap={2} display="flex" flexDirection="column">
                    <TextField
                        label="Type"
                        select
                        value={props.type}
                        onChange={(e) => props.setTypeFilter(e.target.value)}
                    >
                        {Types.map((type) => (
                            <MenuItem key={type} value={type}>
                                {type}
                            </MenuItem>
                        ))}
                    </TextField>
                </Box>

                <Box
                    display="flex"
                    alignItems="end"
                    flexGrow={1}
                    flexDirection="column"
                >
                    <Box display="flex" alignItems="end" flexGrow={1}>
                        <Button onClick={resetFilters} variant="outlined">
                            Reset
                        </Button>
                        <Button
                            sx={{ ml: 2 }}
                            onClick={handleAcceptFilterChanges}
                            color="primary"
                            variant="contained"
                        >
                            Save
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Drawer>
    )
}
