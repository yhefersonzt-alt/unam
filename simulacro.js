/* ═══════════════════════════════════════════════
   UNAMBA PREP — Motor del Simulacro
═══════════════════════════════════════════════ */

// ── STATE ──
let state = {
  questions: [],
  current: 0,
  answers: [],   // null = sin responder, number = respuesta elegida, 'skip' = saltada
  timeLeft: 4800,
  timerInterval: null,
  started: false,
  finished: false,
  selectedArea: null,
  timeLimit: 4800,
};

// ── DOM REFS ──
const selectorScreen = document.getElementById('selectorScreen');
const quizScreen     = document.getElementById('quizScreen');
const resultsScreen  = document.getElementById('resultsScreen');
const startQuizBtn   = document.getElementById('startQuizBtn');
const areaBtns       = document.querySelectorAll('.area-btn');
const timeLimitSelect= document.getElementById('timeLimitSelect');

// ── AREA SELECTION ──
areaBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    areaBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    state.selectedArea = btn.dataset.area;
    state.subjectFilter = btn.dataset.subjectFilter || null;
    startQuizBtn.disabled = false;
  });
});

if (timeLimitSelect) {
  timeLimitSelect.addEventListener('change', () => {
    state.timeLimit = parseInt(timeLimitSelect.value);
  });
}

// Check URL param for area
const urlParams = new URLSearchParams(window.location.search);
const areaParam = urlParams.get('area');
if (areaParam) {
  const matchBtn = document.querySelector(`[data-area="${areaParam}"]`);
  if (matchBtn) {
    matchBtn.click();
  }
}

// ── START QUIZ ──
startQuizBtn?.addEventListener('click', () => {
  let qs = window.getQuestionsByArea(state.selectedArea);

  // Filter by subject if set
  if (state.subjectFilter) {
    const bank = window.QUESTION_BANK[state.subjectFilter];
    if (bank) qs = [...bank].sort(() => Math.random() - 0.5);
  }

  // Take max 20 questions per session
  state.questions = qs.slice(0, 20);
  state.answers = new Array(state.questions.length).fill(null);
  state.current = 0;
  state.timeLeft = state.timeLimit || 4800;
  state.finished = false;

  selectorScreen.classList.add('hidden');
  quizScreen.classList.remove('hidden');

  renderQuestion();
  buildNavGrid();
  if (state.timeLeft > 0) startTimer();
  else document.getElementById('timerDisplay').textContent = '∞';
});

// ── TIMER ──
function startTimer() {
  updateTimerDisplay();
  state.timerInterval = setInterval(() => {
    state.timeLeft--;
    updateTimerDisplay();
    if (state.timeLeft <= 0) {
      clearInterval(state.timerInterval);
      finishQuiz();
    }
  }, 1000);
}

function updateTimerDisplay() {
  const el = document.getElementById('timerDisplay');
  if (!el) return;
  const m = Math.floor(state.timeLeft / 60).toString().padStart(2, '0');
  const s = (state.timeLeft % 60).toString().padStart(2, '0');
  el.textContent = `${m}:${s}`;

  // Visual warnings
  el.className = 'timer-display';
  if (state.timeLeft < 300) el.classList.add('danger');
  else if (state.timeLeft < 600) el.classList.add('warning');
}

// ── RENDER QUESTION ──
function renderQuestion() {
  const q = state.questions[state.current];
  if (!q) return;

  // Update meta
  document.getElementById('questionSubject').textContent = q.subject;
  document.getElementById('questionCounter').textContent =
    `Pregunta ${state.current + 1} / ${state.questions.length}`;
  document.getElementById('questionText').textContent = q.question;

  // Options
  const list = document.getElementById('optionsList');
  list.innerHTML = '';
  const letters = ['A', 'B', 'C', 'D', 'E'];
  const chosen = state.answers[state.current];
  const answered = chosen !== null;

  q.options.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.innerHTML = `<span class="option-letter">${letters[i]}</span><span>${opt.replace(/^[A-E]\)\s*/, '')}</span>`;

    if (answered) {
      btn.disabled = true;
      if (i === q.correct) btn.classList.add('correct');
      else if (i === chosen && chosen !== q.correct) btn.classList.add('wrong');
    } else {
      btn.addEventListener('click', () => selectAnswer(i));
    }
    list.appendChild(btn);
  });

  // Solution panel
  const panel = document.getElementById('solutionPanel');
  const content = document.getElementById('solutionContent');
  if (answered && chosen !== 'skip') {
    panel.classList.add('visible');
    content.innerHTML = buildSolutionHTML(q.solution);
  } else {
    panel.classList.remove('visible');
    content.innerHTML = '';
  }

  // Nav buttons
  document.getElementById('prevBtn').disabled = state.current === 0;
  document.getElementById('nextBtn').textContent =
    state.current === state.questions.length - 1 ? '✅ Ver resultados' : 'Siguiente →';

  updateProgress();
  updateNavGrid();
}

function buildSolutionHTML(sol) {
  let html = `<p style="font-size:0.875rem; font-weight:600; color: var(--text-primary); margin-bottom: 0.75rem;">${sol.brief}</p>`;
  sol.steps.forEach(step => {
    html += `
      <div class="step-item">
        <div class="step-num">${step.n}</div>
        <div class="step-content">${step.text}</div>
      </div>`;
  });
  return html;
}

// ── SELECT ANSWER ──
function selectAnswer(index) {
  if (state.answers[state.current] !== null) return;
  state.answers[state.current] = index;
  renderQuestion();
}

// ── NAVIGATION ──
document.getElementById('prevBtn')?.addEventListener('click', () => {
  if (state.current > 0) {
    state.current--;
    renderQuestion();
  }
});

document.getElementById('nextBtn')?.addEventListener('click', () => {
  if (state.current < state.questions.length - 1) {
    state.current++;
    renderQuestion();
  } else {
    finishQuiz();
  }
});

document.getElementById('skipBtn')?.addEventListener('click', () => {
  if (state.answers[state.current] === null) {
    state.answers[state.current] = 'skip';
  }
  if (state.current < state.questions.length - 1) {
    state.current++;
    renderQuestion();
  } else {
    finishQuiz();
  }
});

document.getElementById('finishEarlyBtn')?.addEventListener('click', () => {
  if (confirm('¿Terminar el simulacro ahora? Podrás ver tus resultados.')) {
    finishQuiz();
  }
});

// ── NAV GRID ──
function buildNavGrid() {
  const nav = document.getElementById('questionNav');
  nav.innerHTML = '';
  state.questions.forEach((_, i) => {
    const btn = document.createElement('button');
    btn.className = 'qnav-btn';
    btn.textContent = i + 1;
    btn.addEventListener('click', () => {
      state.current = i;
      renderQuestion();
    });
    nav.appendChild(btn);
  });
}

function updateNavGrid() {
  const btns = document.querySelectorAll('.qnav-btn');
  state.questions.forEach((q, i) => {
    const btn = btns[i];
    if (!btn) return;
    btn.className = 'qnav-btn';
    if (i === state.current) {
      btn.classList.add('current');
    } else if (state.answers[i] !== null && state.answers[i] !== 'skip') {
      const isCorrect = state.answers[i] === q.correct;
      btn.classList.add(isCorrect ? 'answered' : 'wrong');
    }
  });
}

// ── PROGRESS ──
function updateProgress() {
  const answered = state.answers.filter(a => a !== null).length;
  const total = state.questions.length;
  const pct = total > 0 ? (answered / total * 100) : 0;
  document.getElementById('progressFill').style.width = pct + '%';
  document.getElementById('progressText').textContent = `${answered} de ${total} respondidas`;
}

// ── FINISH QUIZ ──
function finishQuiz() {
  clearInterval(state.timerInterval);
  state.finished = true;

  quizScreen.classList.add('hidden');
  resultsScreen.classList.remove('hidden');

  // Calculate score
  let correct = 0, wrong = 0, skipped = 0;
  const subjectMap = {};
  // (score calc continues below, progress saved after)

  state.questions.forEach((q, i) => {
    const ans = state.answers[i];
    const subj = q.subject;
    if (!subjectMap[subj]) subjectMap[subj] = { correct: 0, total: 0 };
    subjectMap[subj].total++;

    if (ans === null || ans === 'skip') {
      skipped++;
    } else if (ans === q.correct) {
      correct++;
      subjectMap[subj].correct++;
    } else {
      wrong++;
    }
  });

  const total = state.questions.length;
  const pct = total > 0 ? Math.round((correct / total) * 100) : 0;

  // Emoji feedback
  let emoji = '😔'; let msg = 'Sigue practicando. ¡Cada intento te hace mejor!';
  if (pct >= 80) { emoji = '🏆'; msg = '¡Excelente! Estás muy bien preparado.'; }
  else if (pct >= 60) { emoji = '🎯'; msg = '¡Buen puntaje! Refuerza tus puntos débiles.'; }
  else if (pct >= 40) { emoji = '📖'; msg = 'Vas bien. Revisa el solucionario para mejorar.'; }

  // Save progress
  if (window.Progress) {
    window.Progress.recordSession({ correct, total, wrong, skipped, subjectMap, area: state.selectedArea });
  }

  document.getElementById('resultsEmoji').textContent = emoji;
  document.getElementById('resultsScore').textContent = `${correct}/${total}`;
  document.getElementById('resultsMessage').textContent = msg;
  document.getElementById('correctCount').textContent = correct;
  document.getElementById('wrongCount').textContent = wrong;
  document.getElementById('skipCount').textContent = skipped;

  // Subject breakdown
  const breakdown = document.getElementById('subjectBreakdown');
  breakdown.innerHTML = '<h4 style="font-size:0.8125rem; font-weight:700; color:var(--text-muted); text-transform:uppercase; letter-spacing:0.05em; margin-bottom:0.75rem;">Resultado por materia</h4>';
  Object.entries(subjectMap).forEach(([subj, data]) => {
    const subjPct = data.total > 0 ? Math.round(data.correct / data.total * 100) : 0;
    const color = subjPct >= 70 ? 'var(--green-500)' : subjPct >= 40 ? 'var(--gold-500)' : 'var(--red-500)';
    breakdown.innerHTML += `
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.5rem; font-size:0.875rem;">
        <span style="color:var(--text-secondary)">${subj}</span>
        <span style="font-weight:700; color:${color}">${data.correct}/${data.total} (${subjPct}%)</span>
      </div>
      <div style="height:5px; background:var(--border); border-radius:99px; margin-bottom:0.75rem; overflow:hidden;">
        <div style="height:100%; width:${subjPct}%; background:${color}; border-radius:99px; transition: width 1s ease;"></div>
      </div>`;
  });
}

// Animate bars after render
setTimeout(() => {
  document.querySelectorAll('#subjectBreakdown div > div:last-child').forEach(bar => {
    const w = bar.style.width;
    bar.style.width = '0';
    setTimeout(() => { bar.style.width = w; }, 100);
  });
}, 500);
