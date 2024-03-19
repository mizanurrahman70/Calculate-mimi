function submitHandle() {
    const date = document.getElementById('dd').value;
    const dateIn = parseInt(date);
    
    const mm = document.getElementById('mm').value;
    const mmV = parseInt(mm);
    
    const yy = document.getElementById('yy').value;
    const yyV = parseInt(yy);
    
    if (dateIn >= 1 && dateIn <= 31) { // Checking if the date is within valid range
        const sateDate = document.getElementById('date');
        const errorMessages = document.getElementsByClassName('errorMessage');
    
        for (let i = 0; i < errorMessages.length; i++) {
            errorMessages[i].classList.add('hidden');
        }
        sateDate.innerText = dateIn;
        document.getElementById('dd').value = '';
    
        if (mmV >= 1 && mmV <= 12) { // Checking if the month is within valid range
            const setMonth = document.getElementById('month');
            const errorMessage = document.getElementsByClassName('month');
    
            for (let i = 0; i < errorMessage.length; i++) {
                errorMessage[i].classList.add('hidden');
            }
            setMonth.innerText = mmV;
            document.getElementById('mm').value = '';
    
            if (!isNaN(yyV) && yyV.toString().length === 4) { // Checking if the year input is a valid 4-digit number
                const setYear = document.getElementById('year');
                setYear.innerText = yyV;
                document.getElementById('yy').value = '';
            } else {
                const errorMessages = document.getElementsByClassName('yy');
    
                for (let i = 0; i < errorMessages.length; i++) {
                    errorMessages[i].classList.remove('hidden');
                }
            }
        } else {
            const errorMessages = document.getElementsByClassName('month');
    
            for (let i = 0; i < errorMessages.length; i++) {
                errorMessages[i].classList.remove('hidden');
            }
        }
    } else {
        const errorMessages = document.getElementsByClassName('errorMessage');
    
        for (let i = 0; i < errorMessages.length; i++) {
            errorMessages[i].classList.remove('hidden');
        }
    }
}
