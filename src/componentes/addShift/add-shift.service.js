const AddShiftService = (data = {}) => {
    const object = {
        id: 0,
        approved: 0,
        break: data.break,
        candidate: 'claudia cardenas',
        date: '2023-04-06',
        client: data.client,
        confirmed: 0,
        contract: data.contract,
        day: data.day,
        edited: 0,
        upcomingShift: 0,
        finishTime: data.finishTime,
        location: data.location,
        startTime: data.startTime,
        sublocation: data.sublocation,
        offline: 0
    };

    return object;
}

export default AddShiftService;