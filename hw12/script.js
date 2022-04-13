const yearOfBirth = +prompt('Year')
let city;
let sport;

if (yearOfBirth === null || isNaN(yearOfBirth)) {
    console.log('Year not entered')
} else {
    city = prompt('City where you live')
    if (city === null || !isNaN(city)) {
        console.log('City not entered')
    } else {
        sport = prompt('Favorite kind of sport')
        switch (sport) {
            case 'football':
                console.log('Football player')
                break;
            case 'basketball':
                console.log('Basketball player')
                break;
            case 'baseball':
                console.log('Baseball player')
                break;
            default:
                console.log('Unknown kind of sport')
        }
    }
}