function demo(a, b) {
    const total = 10;

    console.log("Parameter a:", a);
    console.log("Parameter b:", b);
    console.log("Total:", total);

    const record = { total };
    console.log(
        "Property deleted:",
        delete record.total
    );
}

demo(5, 10);