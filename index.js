
document.getElementById('marksForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let name = document.getElementById('name').value.trim();
    let totalMarks = parseFloat(document.getElementById('totalMarks').value);
    let obtainedMarks = parseFloat(document.getElementById('obtainedMarks').value);

    // Validate input
    if (!validateInput(totalMarks, obtainedMarks)) {
        alert('Please enter valid marks. Ensure total marks are positive and obtained marks are within range.');
        return;
    }

    // Calculate percentage and grade
    let percentage = calculatePercentage(obtainedMarks, totalMarks);
    let grade = determineGrade(percentage);

    // Prepare and display result
    displayResult(name, percentage, grade);
});

// Function to validate input
function validateInput(totalMarks, obtainedMarks) {
    return totalMarks > 0 && obtainedMarks >= 0 && obtainedMarks <= totalMarks;
}

// Function to calculate percentage
function calculatePercentage(obtainedMarks, totalMarks) {
    return (obtainedMarks / totalMarks) * 100;
}

// Function to determine grade
function determineGrade(percentage) {
    if (percentage >= 90) {
        return 'A+';
    } else if (percentage >= 80) {
        return 'A';
    } else if (percentage >= 70) {
        return 'B';
    } else if (percentage >= 60) {
        return 'C';
    } else if (percentage >= 50) {
        return 'D';
    } else {
        return 'F';
    }
}

// Function to display result
function displayResult(name, percentage, grade) {
    let resultText = `Percentage: ${percentage.toFixed(2)}%<br>Grade: ${grade}`;
    if (name) {
        resultText = `Name: ${name}<br>` + resultText;
    }
    document.getElementById('result').innerHTML = resultText;
}