import { ReactElement } from 'react'
import { Box, Typography, AppBar } from '@mui/material'

export default function ApplicationBar(): ReactElement {
    return (
        <AppBar position="fixed">
            <Box
                display="flex"
                flexDirection="row"
                justifyContent="space-between"
            >
                <Typography variant="h6" mt="auto" mb="auto" ml={2}>
                    Dashboard
                </Typography>
                <Box
                    component="img"
                    sx={{
                        height: 40,
                    }}
                    alt="SpaceX"
                    src={'spacex-logo.png'}
                />
            </Box>
        </AppBar>
    )
}
