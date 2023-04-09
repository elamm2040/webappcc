const ListarDbModel = (data = []) => {
    let shifts = [];

    data.forEach(element => {
        shifts.push({
            id: element.sbti_id,
            approved: element.approved,
            break: element.break,
            candidate: element.candidate,
            client: element.client,
            confirmed: element.confirmed,
            contract: element.contract,
            day: element.day,
            edited: element.edited,
            finishTime: element.finish_time,
            location: element.location,
            sbtiId: element.sbti_id,
            startTime: element.start_time,
            sublocation: element.sublocation
        });
    });

    return shifts;
}

export default ListarDbModel;
