
function compensation() {
    totalCompensation = 0;
    grossincome = document.getElementById("grossincome").value;
    sickleave = document.getElementById("sickleave").value;
    document.getElementById('results').style.display = "block";
    totalDays = document.getElementById("sickleave").value;
    
    // alustab maksmist neljandast päevast
    if ( sickleave >= 4 && sickleave < 9) {
        employerCompensationSum = grossincome / 30 * (sickleave - 3) * 0.7;        
        employerCompensationDays = sickleave - 3;
    }

    //enne neljandat päeva on toetus 0
    if ( sickleave <= 3) {
        employerCompensationSum = 0;
        employerCompensationDays = 0;
    }
    
    // üheksandast päevast hakkab toetust maksma tervisekindlustus
    if ( sickleave >= 9) {
        employerCompensationSum = grossincome / 30 * 5 * 0.7;
        employerCompensationDays = 5
    }

    //kui haiguspäevade arv on 9 kuni 182, ei olene tuberkuloosist
    if ( sickleave > 8 && sickleave <= 182) {
        insuranceCompensationSum = grossincome / 30 * (sickleave - 8) * 0.7;
        insuranceCompensationDays = sickleave -8;
    }

    // kui haiguspäevi on 182 kuni 240 ja on tuberkuloos
    if ( sickleave > 182 && sickleave <= 240 && document.getElementById('tuberculosis').checked === true) {
        insuranceCompensationSum = grossincome / 30 * (sickleave - 8) * 0.7;
        insuranceCompensationDays = sickleave -8;
    }

    // kui haiguspäevi on üle 182 ja pole tuberkuloosi
    if ( sickleave > 182 && sickleave <= 240 && document.getElementById('tuberculosis').checked === false) {
        insuranceCompensationSum = grossincome / 30 * (182 - 8) * 0.7;
        insuranceCompensationDays = 182 - 8;
    }

    // kui haiguspäevi on alla 9, tervisekindlustus ei maksa
    if (sickleave < 9) {
        insuranceCompensationSum = 0;
        insuranceCompensationDays = 0;
    }

    // kui haiguspäevi on üle 240, edasi ei maksta
    if (sickleave > 240 && document.getElementById('tuberculosis').checked === true) {
        insuranceCompensationSum = grossincome / 30 * 232 * 0.7;
        insuranceCompensationDays = 232;
    }

    // kogu toetus
    totalCompensation = insuranceCompensationSum + employerCompensationSum;

    dailyAllowanceEmployer = employerCompensationSum / employerCompensationDays; 
    dailyAllowanceInsurance = insuranceCompensationSum / insuranceCompensationDays;

    if (isNaN(dailyAllowanceEmployer)) dailyAllowanceEmployer = 0;
    if (isNaN(dailyAllowanceInsurance)) dailyAllowanceInsurance = 0;
    
    document.getElementById("employerCompensationSum").innerHTML = employerCompensationSum.toFixed(2) +'€';
    document.getElementById("employerCompensationDays").innerHTML = employerCompensationDays + ' days';
    document.getElementById("insuranceCompensationSum").innerHTML = insuranceCompensationSum.toFixed(2) +'€';
    document.getElementById("insuranceCompensationDays").innerHTML = insuranceCompensationDays + ' days';
    document.getElementById("totalCompensation").innerHTML = totalCompensation.toFixed(2)  +'€';
    document.getElementById("dailyAllowanceEmployer").innerHTML = dailyAllowanceEmployer.toFixed(2) + '€';
    document.getElementById("dailyAllowanceInsurance").innerHTML = dailyAllowanceInsurance.toFixed(2) + '€';
    document.getElementById("totalDays").innerHTML = totalDays;
}
