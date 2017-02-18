export function getAllVehicles() {
    return [
        {
            id: 1,
            name: "Ford Fiesta",
            refills: [
                { id: 1, date: "2017/01/05", isFullTank: true, value: 35, odometer: 20000 },
                { id: 2, date: "2017/01/12", isFullTank: true, value: 38, odometer: 20560 },
                { id: 3, date: "2017/01/18", isFullTank: true, value: 34, odometer: 20980 }
            ]
        },
        { id: 2, name: "Toyota Corolla", refills: [] },
        { id: 3, name: "Honda Civic", refills: [] },
        { id: 4, name: "Audi R8", refills: [] },
        { id: 5, name: "Mitsubhishi Challenger", refills: [] }
    ];
}
