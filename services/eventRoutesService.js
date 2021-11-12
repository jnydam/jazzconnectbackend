function processBodyToDoubleArray(array, venueIdParam) {

    let doubleArrayResult = [];

    console.log("Hopefully this function can be exported");

    console.log("These are the demoEvents");

    console.log(array);

    for (let i = 0; i < array.length; i++) {

        let object = array[i];

        let name = object.title;
        let image = object.image;
        let date = object.date;
        let venueId = venueIdParam;

        let entryArray = [0, name, image, date, venueId];

        doubleArrayResult.push(entryArray);
    }

    return doubleArrayResult;
}

module.exports = processBodyToDoubleArray;