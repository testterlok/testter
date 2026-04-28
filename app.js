let selected = [];
let current = 0;
let wrong = [];
let score = 0;

function startRange(start,end){
    selected = questions.slice(start,end);
    start();
}

function randomTest(){
    selected = [...questions].sort(()=>Math.random()-0.5).slice(0,30);
    start();
}

function start(){
    document.getElementById("menu").style.display="none";
    current = 0;
    wrong = [];
    score = 0;
    show();
}

function show(){
    if(current >= selected.length){
        showResult();
        return;
    }

    let q = selected[current];

    let html = `
    <div class="question">
    <h3>${current+1}. ${q.q}</h3>
    <div class="answers">`;

    q.a.forEach((ans,i)=>{
        html += `<button onclick="answer(${i})">${ans}</button>`;
    });

    html += `</div></div>`;

    document.getElementById("quiz").innerHTML = html;
}

function answer(i){
    let q = selected[current];

    if(i === q.correct){
        score++;
    } else {
        wrong.push({
            q:q.q,
            your:q.a[i],
            correct:q.a[q.correct]
        });
    }

    current++;
    show();
}

function showResult(){
    let html = `<h2>Нәтиже</h2>`;
    html += `<p>Дұрыс: ${score}/${selected.length}</p>`;
    html += `<p>Қате: ${wrong.length}</p>`;

    if(wrong.length){
        html += `<h3>Қателер:</h3>`;
        wrong.forEach(w=>{
            html += `
            <div class="wrong">
            ${w.q}<br>
            Сен: ${w.your}<br>
            ✔ ${w.correct}
            </div><br>`;
        });
    } else {
        html += `<p class="correct">Барлығы дұрыс 🎉</p>`;
    }

    html += `<button onclick="location.reload()">Қайта бастау</button>`;

    document.getElementById("quiz").innerHTML = html;
}
