import { gql } from '@apollo/client'

export const getShips = gql`
    query getShips($offset: Int, $limit: Int) {
        ships(offset: $offset, limit: $limit) {
            id
            image
            mmsi
            model
            name
            roles
            speed_kn
            status
            successful_landings
            type
            url
            weight_kg
            weight_lbs
            year_built
            imo
            home_port
            course_deg
            class
            attempted_landings
            active
            abs
            position {
                latitude
                longitude
            }
            missions {
                flight
                name
            }
        }
    }
`
