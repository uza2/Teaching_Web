function checkAnswers() {
    let score = 0;
    const totalQuestions = 5;
    const form = document.getElementById('quizForm');
    const q1 = form.querySelector('input[name="q1"]:checked');
    const q2 = form.querySelector('input[name="q2"]:checked');
    const q3 = form.querySelector('input[name="q3"]:checked');
    const q4 = form.querySelector('input[name="q4"]:checked');
    const q5 = form.querySelector('input[name="q5"]:checked');
    
    if (q1 && q1.value === "a") score++;
    if (q2 && q2.value === "a") score++;
    if (q3 && q3.value === "d") score++;
    if (q4 && q4.value === "a") score++;
    if (q5 && q5.value === "a") score++;

    alert('نتيجتك: ' + score + ' من ' + totalQuestions);
}