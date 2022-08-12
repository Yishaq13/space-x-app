import { ReactElement, useState } from 'react'
import {
    Box,
    ToggleButtonGroup,
    ToggleButton,
    Typography,
    Button,
} from '@mui/material'
import ViewListIcon from '@mui/icons-material/ViewList'
import CollectionsIcon from '@mui/icons-material/Collections'
import { useQuery } from '@apollo/client'
import { getShips } from '../graphql/queries'
import ListView from './Views/list'
import GalleryView from './Views/gallery'
import ApplicationBar from './Navigation/ApplicationBar'
import { FilterList } from '@mui/icons-material'
import { FilterDrawer } from './FilterDrawer'
import theme from '../theme'

export default function Dashboard(): ReactElement {
    const [listView, setListView] = useState<boolean>(true)
    const [typeFilter, setTypeFilter] = useState<string>('')
    const [filterDrawerOpen, setFilterDrawerOpen] = useState(false)
    const { loading, data, fetchMore } = useQuery<Ships>(getShips, {
        variables: { offset: 0, limit: 4, type: typeFilter },
        fetchPolicy: 'cache-and-network',
    })

    const fetchMoreData = async () => {
        await fetchMore({
            variables: {
                offset: data?.ships.length || 0,
                limit: 2,
            },
            updateQuery: (previousResult, { fetchMoreResult }) => {
                if (!fetchMoreResult) return previousResult
                return {
                    ships: [...previousResult.ships, ...fetchMoreResult.ships],
                }
            },
        })
    }

    return (
        <Box>
            <ApplicationBar />
            <main>
                <Box
                    mt={5}
                    p={5}
                    display="flex"
                    flexDirection="row"
                    justifyContent="space-between"
                    sx={{
                        [theme.breakpoints.down('md')]: {
                            flexDirection: 'column',
                        },
                    }}
                >
                    <ToggleButtonGroup
                        value={listView ? 1 : 2}
                        exclusive
                        onChange={() => setListView(!listView)}
                        sx={{
                            [theme.breakpoints.down('md')]: {
                                justifyContent: 'center',
                                marginBottom: 2,
                            },
                        }}
                    >
                        <ToggleButton value={1}>
                            <ViewListIcon />
                            <Typography ml={2}>List</Typography>
                        </ToggleButton>
                        <ToggleButton value={2}>
                            <CollectionsIcon color="inherit" />
                            <Typography ml={2}>Gallery</Typography>
                        </ToggleButton>
                    </ToggleButtonGroup>
                    <Button
                        color="primary"
                        variant="outlined"
                        onClick={() => setFilterDrawerOpen(true)}
                    >
                        <FilterList sx={{ mr: 1 }} /> Filter
                    </Button>
                </Box>
                {data && (
                    <Box>
                        {listView ? (
                            <ListView
                                ships={data.ships}
                                fetchMoreData={fetchMoreData}
                            />
                        ) : (
                            <GalleryView
                                ships={data.ships}
                                fetchMoreData={fetchMoreData}
                            />
                        )}
                    </Box>
                )}
                {loading && (
                    <Typography m="auto" textAlign="center">
                        loading...
                    </Typography>
                )}
            </main>

            {filterDrawerOpen && (
                <FilterDrawer
                    open={filterDrawerOpen}
                    setTypeFilter={setTypeFilter}
                    setFilterDrawerOpen={(state: boolean) =>
                        setFilterDrawerOpen(state)
                    }
                    type={typeFilter}
                />
            )}
        </Box>
    )
}
