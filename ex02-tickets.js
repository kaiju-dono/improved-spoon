

function main(tickets, sortCriteria) {
    let schedule = [];
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }


    tickets.forEach(city => {
        let [destination, price, status] = city.split("|");
        schedule.push(new Ticket(destination, price, status));        
    });

    if (sortCriteria === 'price') {
        schedule.sort((a,b) => a-b);
    } else if (sortCriteria === 'destination'){
        schedule.sort((a,b) => a.destination.localeCompare(b.destination));
    } else if (sortCriteria === 'status') {
        schedule.sort((a,b) => a.status.localeCompare(b.status));
    } else {
        return 'error';
    }
    console.log(schedule);
}


main(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'status');


//sort alphabetical        
    // schedule.sort(function(a,b) {
    //     if (a.destination < b.destination) {
    //         return -1;
    //     }
    //     if (a.destination > b.destination) {
    //         return 1;
    //     }
    //     return 0;
    // });