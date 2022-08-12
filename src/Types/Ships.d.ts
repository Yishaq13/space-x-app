interface Ship {
    id: string
    image: string
    mmsi: string
    model: string
    name: string
    roles: string[]
    speed_kn: string
    status: string
    successful_landings: string
    type: string
    url: string
    weight_kg: number
    weight_lbs: number
    year_built: number
    imo: number
    home_port: string
    course_deg: number
    class: number
    attempted_landings: number
    active: boolean
    abs: number
    position: {
        latitude: string
        longitude: string
    }
    missions: missions[]
}

interface Missions {
    flight: string
    name: string
}

interface Ships {
    ships: ship[]
}
