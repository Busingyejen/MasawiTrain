function covid_check(Your_Temp) {

    let message;
    if (Your_Temp == 33) {
        message = "Normal Temp";
    } else if (Your_Temp == 35) {
        message = "Temp watchout";
    } else if (Your_Temp > 37) {
        message = "Please test for Covid";

    }

    return message;


}