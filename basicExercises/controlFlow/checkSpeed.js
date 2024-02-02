//Max Speed Limit is 70km/h
//For every 5km/h violation, the user gets 1 demerit point
//When a user recieves 12 demerit points, his/her license is suspended

function checkSpeed(speed) {
    const speedLimit = 70;
    const kmPerPoint = 5;
    
    if (speed <= speedLimit + kmPerPoint) {
        console.log('Ok');
        return;
    }
    
    const demeritPoints = Math.floor((speed - speedLimit) / kmPerPoint);

    if (demeritPoints >= 12) 
        console.log('License Suspended');
    else 
        console.log(`User has recieved ${demeritPoints} demerit points`);
}

checkSpeed(100);