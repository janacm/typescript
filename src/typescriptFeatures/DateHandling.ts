
class DateHandling {
    testingDates() {
        console.log("\n");
        console.log("Date handling start");
        let date: Date = new Date();
        console.log("date: " + date);
        console.log("date.getDate(): " + date.getDate());
        console.log("date.getDay(): " + date.getDay());
        console.log("date.getHours(): " + date.getHours());
        console.log("date.getMinutes(): " + date.getMinutes());
        console.log("date.getSeconds(): " + date.getSeconds());
        console.log("date.getUTCHours(): " + date.getUTCHours());
        console.log("date.getUTCMinutes(): " + date.getUTCMinutes());
        console.log("date.getUTCSeconds(): " + date.getUTCSeconds());
        console.log("date.getUTCMilliseconds(): " + date.getUTCMilliseconds());
        console.log("date.toDateString(): " + date.toDateString());
        console.log("date.toTimeString(): " + date.toTimeString());
        console.log("date.toUTCString(): " + date.toUTCString());
        console.log("date.toLocaleString(): " + date.toLocaleString());
        console.log("\n");

        console.log("Setters: ");
        console.log("date.setSeconds(50)): " + date.setSeconds(50));
        console.log("date: " + date);
        console.log("\n");

        console.log("Date 1 millisecond after time zero: ");
        console.log(new Date(1));
        console.log("\n");

        console.log("Date 1 000 000 000 milliseconds after time zero: ");
        console.log(new Date(1000000000));
        console.log("\n");

        console.log("My burrday");
        console.log(new Date("1993-05-07"));
        console.log("\n");

        console.log("My burrday + 1 year");
        const burday = new Date("1993-05-07");
        const burday1YearLater: Date = new Date(burday.setFullYear(1994));
        console.log(burday1YearLater);
        console.log("\n");

        console.log("Today + 1 year");
        const today = new Date();
        const oneYearLater: Date = new Date(today.setFullYear(today.getFullYear() + 1));
        console.log(oneYearLater);
        console.log("\n");

        console.log("Fifteen mins from now:");
        const fifteenMinsLater: Date = new Date(today.setMinutes(today.getMinutes() + 15));
        console.log(fifteenMinsLater);
        console.log("\n");

        console.log("Hours between two dates: ");
        // const diff = fifteenMinsLater.getHours() - today.getHours(); // Incorrect, this just subtracts the HH 
        console.log(fifteenMinsLater);
        console.log("\n");

        console.log("90 days from date");
        const d1 = new Date("2021-02-19");
        const returnBy: Date = new Date(d1.setDate(d1.getDate() + 90));
        console.log(returnBy.toDateString());
        console.log("\n");


    }
}

export default DateHandling;