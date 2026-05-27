let active = 'metric';

let metric = document.getElementById('btn-metric');
let imperial = document.getElementById('btn-imperial');

let metricarea = document.getElementById('metric');
let imperialarea = document.getElementById('imperial');

let dowork = document.getElementById('run-calc');

let result = document.getElementById('final-output');
let numdisplay = document.getElementById('show-number');
let textdisplay = document.getElementById('show-text');

metric.addEventListener('click', function () {

    active = 'metric';

    metric.classList.add('active');
    imperial.classList.remove('active');

    metricarea.classList.remove('hide-this');
    imperialarea.classList.add('hide-this');

    result.style.display = 'none';
});

imperial.addEventListener('click', function () {

    active = 'imperial';

    imperial.classList.add('active');
    metric.classList.remove('active');

    metricarea.classList.add('hide-this');
    imperialarea.classList.remove('hide-this');

    result.style.display = 'none';
});

dowork.addEventListener('click', function () {

    let finalvalue = 0;

    if (active === 'metric') {

        let weightkg = parseFloat(document.getElementById('val-kg').value);
        let heightcm = parseFloat(document.getElementById('val-cm').value);

        if (isNaN(weightkg) || isNaN(heightcm) || weightkg <= 0 || heightcm <= 0) {

            alert('Enter valid details!');
            return;
        }

        let heightmtrs = heightcm / 100;

        finalvalue = weightkg / (heightmtrs * heightmtrs);

    } else {

        let weightlbs = parseFloat(document.getElementById('val-lbs').value);
        let heightinches = parseFloat(document.getElementById('val-inches').value);

        if (isNaN(weightlbs) || isNaN(heightinches) || weightlbs <= 0 || heightinches <= 0) {

            alert('Enter valid details!');
            return;
        }

        finalvalue = (weightlbs / (heightinches * heightinches)) * 703;
    }

    let cutvalue = finalvalue.toFixed(1);

    numdisplay.textContent = cutvalue;

    result.style.display = 'block';

    if (cutvalue < 18.5) {

        textdisplay.textContent = 'Underweight';

        result.style.backgroundColor = '#f1c40f';
        result.style.color = '#000';

    } else if (cutvalue >= 18.5 && cutvalue < 25) {

        textdisplay.textContent = 'Normal weight';

        result.style.backgroundColor = '#d4edda';
        result.style.color = '#155724';

    } else if (cutvalue >= 25 && cutvalue < 30) {

        textdisplay.textContent = 'Overweight';

        result.style.backgroundColor = '#ffeaa7';
        result.style.color = '#d35400';

    } else {

        textdisplay.textContent = 'Obese';

        result.style.backgroundColor = '#ff7675';
        result.style.color = '#2d3436';
    }
});
