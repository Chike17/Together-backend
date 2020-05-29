    Endpoints

    BASE URL
    http://localhost:3000

    *** HOSTS ***

    POST a new host
    /host/signup
    firstName: string
    lastName: string
    email: string,
    password: string

    GET a new host for sign in
    /host/signin
    email: string
    password: string

    GET all hosts
    /host

    GET one host
    /host/:id

    POST one host

    firstName: string
    lastName: string
    email: string
    password: string


    DELETE one host
    /host/:id

    PUT one host
    /host/:id
    firstName: string
    lastName: string
    email: string,
    password: string



    *** EVENTS ***

    GET all events
    /event

    GET one event
    /event/:id

    POST one event
    /event:id <hostId>
     startTime: string
     endTime: string
     title: string
     description: string
     location: string
     guests: [{firstName: string,
             lastName: string,
             email: string,
             dishes: [string]}]

    DELETE event
    /event/:id

    PUT event
    /event/:id <host id>
    startTime: string
    endTime: string
    title: string
    description: string
    guestData: firstName: string
               lastName: string
               email: string
               dishes: [string]
    location: string



    *** GUESTS ***

    GET all guests
    /guest

    GET one guest
    /guest/:id

    POST one guest
    /guest
    firstName: string
    lastName: string
    email: string
    dish1: string
    dish2: string
    dish3: string


    DELETE one guest
    /guest/:id

    PUT one guest
    /guest/:id <guest id>
    dish1: string
    dish2: string
    dish3: string
