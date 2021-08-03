const findTheOldest = function(people) {
    let oldestPerson = {}
    let oldestAge = 0
    let yearToday = new Date().getFullYear()

    people.forEach((person) => {
        if ('yearOfDeath' in person) {
            let personAge = person.yearOfDeath - person.yearOfBirth
            if (personAge > oldestAge) {
                oldestPerson = person
                oldestAge = personAge
            }
        } else {
            let personAge = yearToday - person.yearOfBirth
            if (personAge > oldestAge) {
                oldestPerson = person
                oldestAge = personAge
            }
        }
    })

    return oldestPerson
};

module.exports = findTheOldest;
