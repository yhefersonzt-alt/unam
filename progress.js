/* ═══════════════════════════════════════════════
   UNAMBA PREP — Sistema de Progreso (localStorage)
═══════════════════════════════════════════════ */

const STORAGE_KEY = 'unamba_progress';

const Progress = {
  // Cargar datos guardados
  load() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : this.defaultState();
    } catch {
      return this.defaultState();
    }
  },

  defaultState() {
    return {
      totalSessions:    0,
      totalQuestions:   0,
      totalCorrect:     0,
      streak:           0,
      lastSession:      null,
      subjectStats:     {},   // { "Matemática": { correct, total } }
      sessions:         [],   // historial últimas 10 sesiones
      answeredIds:      [],   // IDs de preguntas ya respondidas
      badges:           []    // logros desbloqueados
    };
  },

  save(data) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (e) {
      console.warn('No se pudo guardar el progreso:', e);
    }
  },

  // Registrar una sesión terminada
  recordSession({ correct, total, wrong, skipped, subjectMap, area }) {
    const data = this.load();
    data.totalSessions++;
    data.totalQuestions += total;
    data.totalCorrect   += correct;

    // Racha
    const today = new Date().toDateString();
    if (data.lastSession === today) {
      // Ya jugó hoy, no cambia racha
    } else if (data.lastSession === new Date(Date.now() - 86400000).toDateString()) {
      data.streak++;
    } else {
      data.streak = 1;
    }
    data.lastSession = today;

    // Stats por materia
    Object.entries(subjectMap || {}).forEach(([subj, stats]) => {
      if (!data.subjectStats[subj]) data.subjectStats[subj] = { correct: 0, total: 0 };
      data.subjectStats[subj].correct += stats.correct;
      data.subjectStats[subj].total   += stats.total;
    });

    // Historial (máx 10)
    data.sessions.unshift({
      date:    new Date().toLocaleDateString('es-PE'),
      correct, total, wrong, skipped, area,
      pct: total > 0 ? Math.round(correct / total * 100) : 0
    });
    if (data.sessions.length > 10) data.sessions = data.sessions.slice(0, 10);

    // Logros
    this.checkBadges(data);

    this.save(data);
    return data;
  },

  checkBadges(data) {
    const badges = data.badges || [];
    const add = (id, label, emoji) => {
      if (!badges.find(b => b.id === id)) {
        badges.push({ id, label, emoji, date: new Date().toLocaleDateString('es-PE') });
      }
    };

    if (data.totalSessions >= 1)   add('first',      'Primer simulacro', '🎯');
    if (data.totalSessions >= 5)   add('5games',     '5 simulacros',     '⭐');
    if (data.totalSessions >= 10)  add('10games',    '10 simulacros',    '🔥');
    if (data.totalCorrect  >= 50)  add('50correct',  '50 respuestas correctas', '💪');
    if (data.totalCorrect  >= 100) add('100correct', '100 respuestas correctas', '🏆');
    if (data.streak        >= 3)   add('streak3',    'Racha de 3 días',  '📅');
    if (data.streak        >= 7)   add('streak7',    'Racha de 7 días',  '🌟');

    // 80% o más en una sesión
    const lastSess = data.sessions[0];
    if (lastSess && lastSess.pct >= 80) add('ace', '¡Excelente! +80%', '🥇');

    data.badges = badges;
  },

  getGlobalPct(data) {
    if (!data.totalQuestions) return 0;
    return Math.round(data.totalCorrect / data.totalQuestions * 100);
  },

  reset() {
    localStorage.removeItem(STORAGE_KEY);
  }
};

window.Progress = Progress;
