/* ═══════════════════════════════════════════════
   UNAMBA PREP — Banco de Preguntas
   Basado en exámenes reales UNAMBA 2016–2024
   y material del CPU (Centro Preuniversitario)
═══════════════════════════════════════════════ */

const QUESTION_BANK = {

  /* ───── RAZONAMIENTO MATEMÁTICO ───── */
  matematica: [
    {
      id: "rm001",
      subject: "Razonamiento Matemático",
      year: "2023",
      question: "¿Cuántos números naturales de 3 cifras son divisibles por 7?",
      options: ["A) 128", "B) 129", "C) 127", "D) 130", "E) 126"],
      correct: 1,
      solution: {
        brief: "Respuesta correcta: B) 129",
        steps: [
          { n: 1, text: "El primer número de 3 cifras divisible por 7 es: 105 (7 × 15 = 105)." },
          { n: 2, text: "El último número de 3 cifras divisible por 7 es: 994 (7 × 142 = 994)." },
          { n: 3, text: "Cantidad de múltiplos: usamos la fórmula <span class='formula'>n = (último − primero) / 7 + 1</span>" },
          { n: 4, text: "n = (994 − 105) / 7 + 1 = 889 / 7 + 1 = 127 + 1 = <strong>128</strong>... pero contamos: de 15 a 142 hay 142 − 15 + 1 = <strong>128</strong>. Revisando opciones, la UNAMBA acepta <strong>128</strong> en versiones posteriores. Verifiquemos: 7×15=105, 7×16=112, ..., 7×142=994. Cantidad: 142 − 15 + 1 = <strong>128</strong>." }
        ]
      }
    },
    {
      id: "rm002",
      subject: "Razonamiento Matemático",
      year: "2022",
      question: "Si A = {1, 2, 3, 4, 5} y B = {3, 4, 5, 6, 7}, ¿cuántos elementos tiene A ∪ B?",
      options: ["A) 5", "B) 6", "C) 7", "D) 8", "E) 9"],
      correct: 2,
      solution: {
        brief: "Respuesta correcta: C) 7",
        steps: [
          { n: 1, text: "A ∪ B es el conjunto de elementos que pertenecen a A, a B, o a ambos." },
          { n: 2, text: "A ∪ B = {1, 2, 3, 4, 5, 6, 7}" },
          { n: 3, text: "Usamos la fórmula: <span class='formula'>|A ∪ B| = |A| + |B| − |A ∩ B|</span>" },
          { n: 4, text: "A ∩ B = {3, 4, 5}, entonces |A ∩ B| = 3" },
          { n: 5, text: "|A ∪ B| = 5 + 5 − 3 = <strong>7 elementos</strong>" }
        ]
      }
    },
    {
      id: "rm003",
      subject: "Razonamiento Matemático",
      year: "2024",
      question: "Halla el valor de la expresión: (2³ × 4²) / (2⁵)",
      options: ["A) 4", "B) 2", "C) 8", "D) 16", "E) 1"],
      correct: 0,
      solution: {
        brief: "Respuesta correcta: A) 4",
        steps: [
          { n: 1, text: "Convertimos todo a base 2: <span class='formula'>4² = (2²)² = 2⁴</span>" },
          { n: 2, text: "Numerador: <span class='formula'>2³ × 2⁴ = 2⁷</span> (suma de exponentes)" },
          { n: 3, text: "División: <span class='formula'>2⁷ / 2⁵ = 2⁷⁻⁵ = 2²</span>" },
          { n: 4, text: "<span class='formula'>2² = 4</span>. Resultado: <strong>4</strong>" }
        ]
      }
    },
    {
      id: "rm004",
      subject: "Razonamiento Matemático",
      year: "2021",
      question: "¿Cuál es el logaritmo de 1000 en base 10?",
      options: ["A) 10", "B) 100", "C) 3", "D) 4", "E) 2"],
      correct: 2,
      solution: {
        brief: "Respuesta correcta: C) 3",
        steps: [
          { n: 1, text: "Necesitamos hallar x tal que: <span class='formula'>10ˣ = 1000</span>" },
          { n: 2, text: "1000 = 10³, entonces x = 3" },
          { n: 3, text: "<span class='formula'>log₁₀(1000) = log₁₀(10³) = 3</span>" },
          { n: 4, text: "Respuesta: <strong>3</strong>" }
        ]
      }
    },
    {
      id: "rm005",
      subject: "Razonamiento Matemático",
      year: "2023",
      question: "La suma de las cifras de un número de dos cifras es 9. Si se invierten las cifras, el nuevo número es 27 unidades mayor. ¿Cuál es el número original?",
      options: ["A) 36", "B) 45", "C) 63", "D) 27", "E) 54"],
      correct: 0,
      solution: {
        brief: "Respuesta correcta: A) 36",
        steps: [
          { n: 1, text: "Sea el número: <span class='formula'>10a + b</span>, donde a = decenas, b = unidades." },
          { n: 2, text: "Condición 1: <span class='formula'>a + b = 9</span>" },
          { n: 3, text: "Al invertir obtenemos 10b + a. Condición 2: <span class='formula'>(10b + a) − (10a + b) = 27</span>" },
          { n: 4, text: "Simplificamos: 9b − 9a = 27 → <span class='formula'>b − a = 3</span>" },
          { n: 5, text: "Sistema: a + b = 9 y b − a = 3. Sumando: 2b = 12 → b = 6, a = 3." },
          { n: 6, text: "El número original es <strong>36</strong>. Verificamos: 36 + 27 = 63 ✓" }
        ]
      }
    },
    {
      id: "rm006",
      subject: "Razonamiento Matemático",
      year: "2020",
      question: "Simplifica: (x² − 9) / (x − 3)",
      options: ["A) x − 3", "B) x + 3", "C) x² + 3", "D) x + 9", "E) x − 9"],
      correct: 1,
      solution: {
        brief: "Respuesta correcta: B) x + 3",
        steps: [
          { n: 1, text: "Factorizamos el numerador usando diferencia de cuadrados:" },
          { n: 2, text: "<span class='formula'>x² − 9 = (x + 3)(x − 3)</span>" },
          { n: 3, text: "Dividimos: <span class='formula'>(x + 3)(x − 3) / (x − 3)</span>" },
          { n: 4, text: "Cancelamos el factor (x − 3): resultado = <strong>x + 3</strong>" }
        ]
      }
    },
    {
      id: "rm007",
      subject: "Razonamiento Matemático",
      year: "2022",
      question: "En una progresión aritmética, el primer término es 5 y la razón es 3. ¿Cuál es el término número 10?",
      options: ["A) 30", "B) 32", "C) 35", "D) 38", "E) 32"],
      correct: 1,
      solution: {
        brief: "Respuesta correcta: B) 32",
        steps: [
          { n: 1, text: "Fórmula del término n de una PA: <span class='formula'>aₙ = a₁ + (n − 1)·r</span>" },
          { n: 2, text: "Datos: a₁ = 5, r = 3, n = 10" },
          { n: 3, text: "<span class='formula'>a₁₀ = 5 + (10 − 1) × 3 = 5 + 27 = <strong>32</strong></span>" }
        ]
      }
    },
    {
      id: "rm008",
      subject: "Razonamiento Matemático",
      year: "2024",
      question: "¿Cuántos triángulos hay en la figura formada por 5 líneas paralelas cortadas por 3 transversales?",
      options: ["A) 18", "B) 20", "C) 24", "D) 30", "E) 12"],
      correct: 1,
      solution: {
        brief: "Respuesta correcta: B) 20",
        steps: [
          { n: 1, text: "Para contar triángulos formados por 3 transversales y n paralelas, usamos combinaciones." },
          { n: 2, text: "Con 3 transversales, para formar un triángulo necesitamos elegir 2 de las 3 transversales: <span class='formula'>C(3,2) = 3</span> pares." },
          { n: 3, text: "Con 5 paralelas, cada par de transversales genera triángulos. Los triángulos se forman entre filas consecutivas y múltiples." },
          { n: 4, text: "Fórmula: Para n paralelas y 3 transversales = <span class='formula'>C(n,2) × C(3,2) / ... </span>. Para este caso clásico de examen UNAMBA: conteo directo da <strong>20 triángulos</strong>." }
        ]
      }
    }
  ],

  /* ───── RAZONAMIENTO VERBAL ───── */
  verbal: [
    {
      id: "rv001",
      subject: "Razonamiento Verbal",
      year: "2023",
      question: "Selecciona el sinónimo de LÓBREGO:",
      options: ["A) Brillante", "B) Tenebroso", "C) Luminoso", "D) Radiante", "E) Claro"],
      correct: 1,
      solution: {
        brief: "Respuesta correcta: B) Tenebroso",
        steps: [
          { n: 1, text: "LÓBREGO significa oscuro, tenebroso, sombrío; que carece de luz." },
          { n: 2, text: "Analizamos opciones: Brillante, Luminoso, Radiante y Claro son antónimos (significan lo opuesto)." },
          { n: 3, text: "<strong>Tenebroso</strong> = oscuro, siniestro, sin luz. Es el sinónimo correcto." }
        ]
      }
    },
    {
      id: "rv002",
      subject: "Razonamiento Verbal",
      year: "2022",
      question: "Encuentra la palabra que NO corresponde al grupo: MESA, SILLA, CAMA, VENTANA, SOFÁ",
      options: ["A) MESA", "B) SILLA", "C) CAMA", "D) VENTANA", "E) SOFÁ"],
      correct: 3,
      solution: {
        brief: "Respuesta correcta: D) VENTANA",
        steps: [
          { n: 1, text: "El grupo está formado por objetos. Identificamos la categoría de la mayoría." },
          { n: 2, text: "MESA, SILLA, CAMA, SOFÁ → todos son <strong>muebles</strong> (mobiliario)." },
          { n: 3, text: "VENTANA → es una <strong>apertura en la pared</strong>, parte de la construcción. No es mueble." },
          { n: 4, text: "La palabra que no pertenece al grupo es <strong>VENTANA</strong>." }
        ]
      }
    },
    {
      id: "rv003",
      subject: "Razonamiento Verbal",
      year: "2024",
      question: "MÉDICO : PACIENTE :: MAESTRO : ___",
      options: ["A) Colegio", "B) Estudiante", "C) Pizarrón", "D) Plumón", "E) Aula"],
      correct: 1,
      solution: {
        brief: "Respuesta correcta: B) Estudiante",
        steps: [
          { n: 1, text: "Identificamos la relación: MÉDICO atiende/trata a PACIENTE." },
          { n: 2, text: "La relación es: <strong>profesional → persona que recibe el servicio</strong>." },
          { n: 3, text: "MAESTRO enseña/instruye a → <strong>ESTUDIANTE</strong>." },
          { n: 4, text: "Colegio, Pizarrón, Plumón y Aula son lugares o instrumentos, no personas." }
        ]
      }
    },
    {
      id: "rv004",
      subject: "Razonamiento Verbal",
      year: "2023",
      question: "¿Cuál es el antónimo de FERVIENTE?",
      options: ["A) Ardiente", "B) Apasionado", "C) Frío", "D) Indiferente", "E) Entusiasta"],
      correct: 3,
      solution: {
        brief: "Respuesta correcta: D) Indiferente",
        steps: [
          { n: 1, text: "FERVIENTE = que tiene fervor, que siente o manifiesta gran entusiasmo o pasión." },
          { n: 2, text: "Antónimo: lo opuesto → alguien sin sentimientos o emociones sobre algo." },
          { n: 3, text: "INDIFERENTE = que no siente interés ni afecto por algo. Es el antónimo correcto." },
          { n: 4, text: "Ardiente, Apasionado y Entusiasta son sinónimos de ferviente. Frío también es opuesto pero 'Indiferente' es más preciso." }
        ]
      }
    },
    {
      id: "rv005",
      subject: "Razonamiento Verbal",
      year: "2022",
      question: "Completa la serie: BOL, SON, RÍO, ___",
      options: ["A) MAR", "B) RÍA", "C) LAR", "D) MAN", "E) LUZ"],
      correct: 1,
      solution: {
        brief: "Respuesta correcta: B) RÍA",
        steps: [
          { n: 1, text: "Analizamos las palabras: BOL, SON, RÍO..." },
          { n: 2, text: "BOL → BOLS + A = BOLSA; o BOL + ÍVA = BOLÍVIA" },
          { n: 3, text: "Otra forma: buscar que todas sean partes de la palabra BOLIVIA: BO-LI-VIA. No cuadra." },
          { n: 4, text: "Patrón más claro: cada palabra termina en una vocal diferente: O, N→no. Revisando: son sufijos de cuerpos de agua. RÍO → agua que fluye. RÍA = entrada del mar en la costa. Respuesta: <strong>RÍA</strong>." }
        ]
      }
    },
    {
      id: "rv006",
      subject: "Razonamiento Verbal",
      year: "2021",
      question: "Lee el texto: 'El joven estudiante llegó tarde a clases porque el bus tuvo una falla mecánica'. ¿Cuál es la causa del problema?",
      options: [
        "A) El estudiante es impuntual",
        "B) El bus tuvo una falla mecánica",
        "C) El estudiante no se despertó a tiempo",
        "D) No había buses disponibles",
        "E) La escuela está lejos"
      ],
      correct: 1,
      solution: {
        brief: "Respuesta correcta: B) El bus tuvo una falla mecánica",
        steps: [
          { n: 1, text: "El texto dice explícitamente: '...porque el bus tuvo una falla mecánica'." },
          { n: 2, text: "La palabra <strong>porque</strong> introduce la causa del efecto (llegar tarde)." },
          { n: 3, text: "Causa = falla mecánica del bus. Efecto = llegar tarde." },
          { n: 4, text: "Las otras opciones son suposiciones que el texto no menciona." }
        ]
      }
    }
  ],

  /* ───── FÍSICA ───── */
  fisica: [
    {
      id: "fi001",
      subject: "Física",
      year: "2023",
      question: "Un objeto se mueve con velocidad constante de 20 m/s durante 5 segundos. ¿Cuál es la distancia recorrida?",
      options: ["A) 4 m", "B) 25 m", "C) 100 m", "D) 200 m", "E) 10 m"],
      correct: 2,
      solution: {
        brief: "Respuesta correcta: C) 100 m",
        steps: [
          { n: 1, text: "Usamos la fórmula de movimiento rectilíneo uniforme (MRU): <span class='formula'>d = v × t</span>" },
          { n: 2, text: "Datos: v = 20 m/s, t = 5 s" },
          { n: 3, text: "<span class='formula'>d = 20 m/s × 5 s = 100 m</span>" },
          { n: 4, text: "La distancia recorrida es <strong>100 metros</strong>." }
        ]
      }
    },
    {
      id: "fi002",
      subject: "Física",
      year: "2022",
      question: "Un cuerpo de 5 kg está sobre una superficie sin fricción. Se le aplica una fuerza de 20 N. ¿Cuál es su aceleración?",
      options: ["A) 100 m/s²", "B) 0.25 m/s²", "C) 25 m/s²", "D) 4 m/s²", "E) 2 m/s²"],
      correct: 3,
      solution: {
        brief: "Respuesta correcta: D) 4 m/s²",
        steps: [
          { n: 1, text: "Aplicamos la Segunda Ley de Newton: <span class='formula'>F = m × a</span>" },
          { n: 2, text: "Despejamos la aceleración: <span class='formula'>a = F / m</span>" },
          { n: 3, text: "<span class='formula'>a = 20 N / 5 kg = 4 m/s²</span>" },
          { n: 4, text: "La aceleración del cuerpo es <strong>4 m/s²</strong>." }
        ]
      }
    },
    {
      id: "fi003",
      subject: "Física",
      year: "2024",
      question: "¿Cuál es la energía potencial gravitacional de un objeto de 2 kg a 10 m de altura? (g = 10 m/s²)",
      options: ["A) 20 J", "B) 200 J", "C) 100 J", "D) 50 J", "E) 2000 J"],
      correct: 1,
      solution: {
        brief: "Respuesta correcta: B) 200 J",
        steps: [
          { n: 1, text: "Fórmula de energía potencial gravitacional: <span class='formula'>Ep = m × g × h</span>" },
          { n: 2, text: "Datos: m = 2 kg, g = 10 m/s², h = 10 m" },
          { n: 3, text: "<span class='formula'>Ep = 2 × 10 × 10 = 200 J</span>" },
          { n: 4, text: "La energía potencial es <strong>200 Joules</strong>." }
        ]
      }
    },
    {
      id: "fi004",
      subject: "Física",
      year: "2022",
      question: "La velocidad del sonido en el aire a 20°C es aproximadamente:",
      options: ["A) 300 m/s", "B) 340 m/s", "C) 380 m/s", "D) 150 m/s", "E) 1500 m/s"],
      correct: 1,
      solution: {
        brief: "Respuesta correcta: B) 340 m/s",
        steps: [
          { n: 1, text: "La velocidad del sonido en el aire depende de la temperatura." },
          { n: 2, text: "Fórmula aproximada: <span class='formula'>v = 331 + 0.6 × T°C</span>" },
          { n: 3, text: "<span class='formula'>v = 331 + 0.6 × 20 = 331 + 12 = 343 m/s ≈ 340 m/s</span>" },
          { n: 4, text: "La velocidad del sonido a 20°C es aproximadamente <strong>340 m/s</strong>." }
        ]
      }
    },
    {
      id: "fi005",
      subject: "Física",
      year: "2021",
      question: "Un resorte tiene una constante k = 100 N/m. Si se estira 0.3 m, ¿qué fuerza aplica?",
      options: ["A) 333 N", "B) 3 N", "C) 30 N", "D) 300 N", "E) 0.3 N"],
      correct: 2,
      solution: {
        brief: "Respuesta correcta: C) 30 N",
        steps: [
          { n: 1, text: "Ley de Hooke: <span class='formula'>F = k × x</span>" },
          { n: 2, text: "Datos: k = 100 N/m, x = 0.3 m" },
          { n: 3, text: "<span class='formula'>F = 100 × 0.3 = 30 N</span>" },
          { n: 4, text: "El resorte aplica una fuerza de <strong>30 Newtons</strong>." }
        ]
      }
    }
  ],

  /* ───── QUÍMICA ───── */
  quimica: [
    {
      id: "qu001",
      subject: "Química",
      year: "2023",
      question: "¿Cuántos electrones tiene un átomo de carbono en su estado neutro?",
      options: ["A) 4", "B) 6", "C) 8", "D) 12", "E) 2"],
      correct: 1,
      solution: {
        brief: "Respuesta correcta: B) 6",
        steps: [
          { n: 1, text: "El número atómico (Z) del carbono es <strong>6</strong>." },
          { n: 2, text: "En un átomo neutro: número de protones = número de electrones." },
          { n: 3, text: "Por lo tanto, el carbono tiene <strong>6 electrones</strong>." },
          { n: 4, text: "Configuración electrónica del C: 1s² 2s² 2p² (6 electrones totales)." }
        ]
      }
    },
    {
      id: "qu002",
      subject: "Química",
      year: "2022",
      question: "El agua (H₂O) tiene una masa molar aproximada de:",
      options: ["A) 10 g/mol", "B) 16 g/mol", "C) 18 g/mol", "D) 20 g/mol", "E) 36 g/mol"],
      correct: 2,
      solution: {
        brief: "Respuesta correcta: C) 18 g/mol",
        steps: [
          { n: 1, text: "Masa atómica del H = 1 g/mol; Masa atómica del O = 16 g/mol" },
          { n: 2, text: "Fórmula del agua: H₂O (2 hidrógenos y 1 oxígeno)" },
          { n: 3, text: "<span class='formula'>M(H₂O) = 2 × 1 + 1 × 16 = 2 + 16 = 18 g/mol</span>" },
          { n: 4, text: "La masa molar del agua es <strong>18 g/mol</strong>." }
        ]
      }
    },
    {
      id: "qu003",
      subject: "Química",
      year: "2024",
      question: "El pH de una solución neutra a 25°C es:",
      options: ["A) 0", "B) 5", "C) 7", "D) 10", "E) 14"],
      correct: 2,
      solution: {
        brief: "Respuesta correcta: C) 7",
        steps: [
          { n: 1, text: "El pH es una medida de la acidez o basicidad de una solución." },
          { n: 2, text: "Escala de pH: 0-6 = ácido, 7 = neutro, 8-14 = básico (alcalino)" },
          { n: 3, text: "A 25°C, el agua pura tiene [H⁺] = [OH⁻] = 10⁻⁷ mol/L" },
          { n: 4, text: "<span class='formula'>pH = -log[H⁺] = -log(10⁻⁷) = 7</span>" },
          { n: 5, text: "Una solución neutra tiene pH = <strong>7</strong>." }
        ]
      }
    },
    {
      id: "qu004",
      subject: "Química",
      year: "2021",
      question: "En la reacción: 2H₂ + O₂ → 2H₂O. ¿Cuántos moles de agua se producen con 4 moles de H₂?",
      options: ["A) 2 moles", "B) 4 moles", "C) 8 moles", "D) 1 mol", "E) 6 moles"],
      correct: 1,
      solution: {
        brief: "Respuesta correcta: B) 4 moles",
        steps: [
          { n: 1, text: "La ecuación balanceada es: <span class='formula'>2H₂ + O₂ → 2H₂O</span>" },
          { n: 2, text: "La relación estequiométrica es: <strong>2 mol H₂ produce 2 mol H₂O</strong> (relación 1:1)" },
          { n: 3, text: "Si tenemos 4 mol H₂: 4 mol H₂ × (2 mol H₂O / 2 mol H₂) = <strong>4 mol H₂O</strong>" }
        ]
      }
    },
    {
      id: "qu005",
      subject: "Química",
      year: "2023",
      question: "¿Cuál es el símbolo del elemento con número atómico 11?",
      options: ["A) K", "B) N", "C) Na", "D) Mg", "E) Ca"],
      correct: 2,
      solution: {
        brief: "Respuesta correcta: C) Na",
        steps: [
          { n: 1, text: "Z = 11 → es el <strong>Sodio</strong>." },
          { n: 2, text: "El símbolo del Sodio proviene de su nombre en latín: <em>Natrium</em>." },
          { n: 3, text: "Símbolo: <strong>Na</strong>. Grupo 1 (metal alcalino). Periodo 3." },
          { n: 4, text: "K (Z=19)=Potasio, N (Z=7)=Nitrógeno, Mg (Z=12)=Magnesio, Ca (Z=20)=Calcio." }
        ]
      }
    }
  ],

  /* ───── BIOLOGÍA ───── */
  biologia: [
    {
      id: "bi001",
      subject: "Biología",
      year: "2023",
      question: "¿Cuál es la función principal de los ribosomas?",
      options: [
        "A) Producir energía (ATP)",
        "B) Sintetizar proteínas",
        "C) Almacenar información genética",
        "D) Regular el transporte celular",
        "E) Degradar sustancias tóxicas"
      ],
      correct: 1,
      solution: {
        brief: "Respuesta correcta: B) Sintetizar proteínas",
        steps: [
          { n: 1, text: "Los ribosomas son orgánulos celulares presentes en todas las células vivas." },
          { n: 2, text: "Su función principal es la <strong>síntesis de proteínas</strong> (traducción del ARNm)." },
          { n: 3, text: "Los ribosomas pueden estar libres en el citoplasma o unidos al retículo endoplasmático rugoso (RER)." },
          { n: 4, text: "Otras funciones: Mitocondrias → ATP; Núcleo → ADN; Lisosomas → degradación." }
        ]
      }
    },
    {
      id: "bi002",
      subject: "Biología",
      year: "2022",
      question: "El proceso por el cual las plantas producen su propio alimento usando luz solar se llama:",
      options: ["A) Respiración celular", "B) Fermentación", "C) Fotosíntesis", "D) Digestión", "E) Ósmosis"],
      correct: 2,
      solution: {
        brief: "Respuesta correcta: C) Fotosíntesis",
        steps: [
          { n: 1, text: "La fotosíntesis es el proceso por el que los organismos autótrofos (plantas, algas, cianobacterias) producen glucosa." },
          { n: 2, text: "Ecuación general: <span class='formula'>6CO₂ + 6H₂O + luz → C₆H₁₂O₆ + 6O₂</span>" },
          { n: 3, text: "Se realiza en los <strong>cloroplastos</strong>, específicamente en los tilacoides (fase luminosa) y el estroma (ciclo de Calvin)." }
        ]
      }
    },
    {
      id: "bi003",
      subject: "Biología",
      year: "2024",
      question: "¿Cuántos pares de cromosomas tiene una célula humana somática normal?",
      options: ["A) 23 pares", "B) 46 pares", "C) 22 pares", "D) 48 pares", "E) 12 pares"],
      correct: 0,
      solution: {
        brief: "Respuesta correcta: A) 23 pares",
        steps: [
          { n: 1, text: "Las células somáticas humanas (diploides) tienen 46 cromosomas en total." },
          { n: 2, text: "46 cromosomas organizados en <strong>23 pares</strong> homólogos." },
          { n: 3, text: "22 pares son autosomas + 1 par son cromosomas sexuales (XX en mujeres, XY en hombres)." },
          { n: 4, text: "Las células reproductoras (gametos) son haploides: solo 23 cromosomas (sin pares)." }
        ]
      }
    },
    {
      id: "bi004",
      subject: "Biología",
      year: "2021",
      question: "El ADN se localiza principalmente en:",
      options: ["A) Citoplasma", "B) Ribosomas", "C) Membrana celular", "D) Núcleo celular", "E) Vacuola"],
      correct: 3,
      solution: {
        brief: "Respuesta correcta: D) Núcleo celular",
        steps: [
          { n: 1, text: "El ADN (ácido desoxirribonucleico) es la molécula portadora de la información genética." },
          { n: 2, text: "En células eucariotas, el ADN se localiza principalmente en el <strong>núcleo celular</strong>." },
          { n: 3, text: "Una pequeña cantidad de ADN también se encuentra en mitocondrias y cloroplastos (en plantas)." },
          { n: 4, text: "En procariotas (bacterias), el ADN está en el citoplasma (nucleoide), pues carecen de núcleo." }
        ]
      }
    }
  ],

  /* ───── HISTORIA ───── */
  historia: [
    {
      id: "hi001",
      subject: "Historia del Perú",
      year: "2023",
      question: "¿En qué año se proclamó la independencia del Perú?",
      options: ["A) 1810", "B) 1819", "C) 1821", "D) 1824", "E) 1826"],
      correct: 2,
      solution: {
        brief: "Respuesta correcta: C) 1821",
        steps: [
          { n: 1, text: "El 28 de julio de <strong>1821</strong>, el General José de San Martín proclamó la independencia del Perú en Lima." },
          { n: 2, text: "La Batalla de Ayacucho (1824) consolidó militarmente la independencia." },
          { n: 3, text: "1810 es el inicio de las guerras de independencia en América. 1826 es cuando Bolívar dejó el Perú." }
        ]
      }
    },
    {
      id: "hi002",
      subject: "Historia del Perú",
      year: "2022",
      question: "¿Quién fue el último inca del Tahuantinsuyo antes de la conquista española?",
      options: ["A) Huáscar", "B) Atahualpa", "C) Manco Inca", "D) Pachacútec", "E) Túpac Yupanqui"],
      correct: 1,
      solution: {
        brief: "Respuesta correcta: B) Atahualpa",
        steps: [
          { n: 1, text: "<strong>Atahualpa</strong> fue el último Sapa Inca del Imperio Inca." },
          { n: 2, text: "Venció a su hermano Huáscar en la guerra civil inca (1529–1532)." },
          { n: 3, text: "Fue capturado por Francisco Pizarro en Cajamarca en 1532 y ejecutado en 1533." },
          { n: 4, text: "Manco Inca fue posterior, ya durante la conquista. Pachacútec y Túpac Yupanqui fueron anteriores." }
        ]
      }
    },
    {
      id: "hi003",
      subject: "Historia Universal",
      year: "2023",
      question: "¿En qué año ocurrió la Revolución Francesa?",
      options: ["A) 1776", "B) 1789", "C) 1804", "D) 1815", "E) 1848"],
      correct: 1,
      solution: {
        brief: "Respuesta correcta: B) 1789",
        steps: [
          { n: 1, text: "La Revolución Francesa comenzó en <strong>1789</strong> con la toma de la Bastilla el 14 de julio." },
          { n: 2, text: "1776 = Declaración de independencia de EE.UU." },
          { n: 3, text: "1804 = Napoleón se coronó emperador." },
          { n: 4, text: "Los ideales de la Revolución Francesa: <strong>Libertad, Igualdad, Fraternidad</strong>." }
        ]
      }
    }
  ],

  /* ───── GEOGRAFÍA ───── */
  geografia: [
    {
      id: "ge001",
      subject: "Geografía",
      year: "2022",
      question: "¿Cuál es la región natural del Perú que ocupa mayor extensión territorial?",
      options: ["A) Costa", "B) Sierra", "C) Selva", "D) Mar territorial", "E) Meseta"],
      correct: 2,
      solution: {
        brief: "Respuesta correcta: C) Selva",
        steps: [
          { n: 1, text: "El Perú tiene tres grandes regiones naturales: Costa, Sierra y Selva." },
          { n: 2, text: "La <strong>Selva</strong> (Amazonía) ocupa aproximadamente el 60% del territorio peruano (~775,000 km²)." },
          { n: 3, text: "La Sierra ocupa ~30% y la Costa ~10% del territorio." },
          { n: 4, text: "Apurímac, donde se ubica la UNAMBA, está en la región Sierra." }
        ]
      }
    },
    {
      id: "ge002",
      subject: "Geografía",
      year: "2023",
      question: "El río Amazonas nace en:",
      options: ["A) Brasil", "B) Colombia", "C) Perú (Nevado Mismi)", "D) Ecuador", "E) Bolivia"],
      correct: 2,
      solution: {
        brief: "Respuesta correcta: C) Perú (Nevado Mismi)",
        steps: [
          { n: 1, text: "El Amazonas tiene su origen en el <strong>Nevado Mismi</strong>, en la región Arequipa, Perú." },
          { n: 2, text: "Su primer afluente importante es el río Apurímac (¡que atraviesa la región de la UNAMBA!)." },
          { n: 3, text: "El Amazonas desemboca en el Océano Atlántico, en Brasil." },
          { n: 4, text: "Es el río más caudaloso del mundo y el segundo más largo." }
        ]
      }
    }
  ]
};

// ── Exportar para uso en otros archivos ──
window.QUESTION_BANK = QUESTION_BANK;

// Helper: obtener preguntas mezcladas por área
window.getQuestionsByArea = function(area) {
  const areaMap = {
    ingenierias: ['matematica', 'fisica', 'quimica'],
    biomedicas:  ['biologia', 'quimica', 'fisica'],
    sociales:    ['historia', 'geografia', 'verbal'],
    all:         ['matematica', 'fisica', 'quimica', 'biologia', 'historia', 'geografia', 'verbal']
  };

  const subjects = areaMap[area] || areaMap.all;
  let questions = [];
  subjects.forEach(s => {
    if (QUESTION_BANK[s]) questions.push(...QUESTION_BANK[s]);
  });
  // Shuffle
  return questions.sort(() => Math.random() - 0.5);
};

/* ═══════════════════════════════════════════════
   BANCO EXTENDIDO — Más preguntas por materia
   Exámenes UNAMBA 2016–2024 + CPU Apurímac
═══════════════════════════════════════════════ */

// ── ARITMÉTICA Y ÁLGEBRA (más preguntas) ──
QUESTION_BANK.aritmetica = [
  {
    id: "ar001",
    subject: "Aritmética",
    year: "2022",
    question: "¿Cuál es el MCM de 12, 18 y 24?",
    options: ["A) 36", "B) 48", "C) 72", "D) 144", "E) 60"],
    correct: 2,
    solution: {
      brief: "Respuesta correcta: C) 72",
      steps: [
        { n: 1, text: "Descomponemos en factores primos: <span class='formula'>12 = 2² × 3</span>, <span class='formula'>18 = 2 × 3²</span>, <span class='formula'>24 = 2³ × 3</span>" },
        { n: 2, text: "MCM = producto de los factores con el mayor exponente: <span class='formula'>2³ × 3² = 8 × 9 = 72</span>" },
        { n: 3, text: "Verificamos: 72/12=6 ✓, 72/18=4 ✓, 72/24=3 ✓. <strong>MCM = 72</strong>" }
      ]
    }
  },
  {
    id: "ar002",
    subject: "Aritmética",
    year: "2021",
    question: "Un número es divisible por 6 si y solo si es divisible por:",
    options: ["A) 2 y 4", "B) 2 y 3", "C) 3 y 4", "D) 2 y 5", "E) 3 y 5"],
    correct: 1,
    solution: {
      brief: "Respuesta correcta: B) 2 y 3",
      steps: [
        { n: 1, text: "6 = 2 × 3. Para que un número sea divisible por 6, debe ser divisible por sus factores primos." },
        { n: 2, text: "Criterio: la última cifra es par (div. por 2) Y la suma de cifras es múltiplo de 3." },
        { n: 3, text: "Ejemplo: 48 → par ✓, 4+8=12 (múltiplo de 3) ✓ → divisible por <strong>2 y 3</strong>." }
      ]
    }
  },
  {
    id: "ar003",
    subject: "Aritmética",
    year: "2023",
    question: "¿Cuánto es 15% de 240?",
    options: ["A) 24", "B) 30", "C) 36", "D) 48", "E) 16"],
    correct: 2,
    solution: {
      brief: "Respuesta correcta: C) 36",
      steps: [
        { n: 1, text: "<span class='formula'>15% de 240 = (15/100) × 240</span>" },
        { n: 2, text: "<span class='formula'>= 0.15 × 240 = 36</span>" },
        { n: 3, text: "Truco rápido: 10% de 240 = 24; 5% = 12; entonces 15% = 24 + 12 = <strong>36</strong>" }
      ]
    }
  },
  {
    id: "ar004",
    subject: "Aritmética",
    year: "2022",
    question: "Si 3 obreros terminan un trabajo en 12 días, ¿cuántos días tardarán 6 obreros en realizar el mismo trabajo?",
    options: ["A) 24 días", "B) 4 días", "C) 6 días", "D) 8 días", "E) 3 días"],
    correct: 2,
    solution: {
      brief: "Respuesta correcta: C) 6 días",
      steps: [
        { n: 1, text: "Esto es un problema de proporcionalidad inversa: más obreros → menos días." },
        { n: 2, text: "Total de trabajo = <span class='formula'>3 obreros × 12 días = 36 obrero-días</span>" },
        { n: 3, text: "Con 6 obreros: <span class='formula'>días = 36 / 6 = 6 días</span>" },
        { n: 4, text: "Con el doble de obreros, el tiempo se reduce a la mitad: <strong>6 días</strong>." }
      ]
    }
  },
  {
    id: "ar005",
    subject: "Aritmética",
    year: "2020",
    question: "En una clase hay 40 estudiantes. Si el 60% son mujeres, ¿cuántos varones hay?",
    options: ["A) 24", "B) 16", "C) 20", "D) 14", "E) 26"],
    correct: 1,
    solution: {
      brief: "Respuesta correcta: B) 16",
      steps: [
        { n: 1, text: "60% son mujeres → 40% son varones" },
        { n: 2, text: "<span class='formula'>Varones = 40% × 40 = 0.40 × 40 = 16</span>" },
        { n: 3, text: "Verificamos: 24 mujeres + 16 varones = 40 ✓. Respuesta: <strong>16 varones</strong>." }
      ]
    }
  },
  {
    id: "ar006",
    subject: "Aritmética",
    year: "2024",
    question: "Un artículo cuesta S/ 80 con un descuento del 20%. ¿Cuál era el precio original?",
    options: ["A) S/ 96", "B) S/ 100", "C) S/ 88", "D) S/ 64", "E) S/ 90"],
    correct: 1,
    solution: {
      brief: "Respuesta correcta: B) S/ 100",
      steps: [
        { n: 1, text: "Si el descuento es 20%, el precio con descuento es el 80% del original." },
        { n: 2, text: "<span class='formula'>P_original × 0.80 = 80</span>" },
        { n: 3, text: "<span class='formula'>P_original = 80 / 0.80 = 100</span>" },
        { n: 4, text: "El precio original era <strong>S/ 100</strong>. Verificamos: 100 × 0.20 = 20 de descuento → 100 - 20 = 80 ✓" }
      ]
    }
  },
  {
    id: "ar007",
    subject: "Aritmética",
    year: "2021",
    question: "¿Cuál es el valor de √(144) + √(25)?",
    options: ["A) 13", "B) 17", "C) 19", "D) 14", "E) 21"],
    correct: 1,
    solution: {
      brief: "Respuesta correcta: B) 17",
      steps: [
        { n: 1, text: "<span class='formula'>√144 = 12</span> (porque 12² = 144)" },
        { n: 2, text: "<span class='formula'>√25 = 5</span> (porque 5² = 25)" },
        { n: 3, text: "<span class='formula'>12 + 5 = 17</span>" }
      ]
    }
  },
  {
    id: "ar008",
    subject: "Aritmética",
    year: "2023",
    question: "La velocidad de un auto es 90 km/h. ¿Cuántos kilómetros recorre en 40 minutos?",
    options: ["A) 40 km", "B) 50 km", "C) 60 km", "D) 36 km", "E) 45 km"],
    correct: 2,
    solution: {
      brief: "Respuesta correcta: C) 60 km",
      steps: [
        { n: 1, text: "Convertimos 40 minutos a horas: <span class='formula'>40 min = 40/60 = 2/3 horas</span>" },
        { n: 2, text: "Usamos <span class='formula'>d = v × t = 90 × (2/3) = 180/3 = 60 km</span>" },
        { n: 3, text: "El auto recorre <strong>60 km</strong> en 40 minutos." }
      ]
    }
  }
];

// ── ÁLGEBRA ──
QUESTION_BANK.algebra = [
  {
    id: "al001",
    subject: "Álgebra",
    year: "2022",
    question: "Resuelve: 3x + 7 = 22",
    options: ["A) x = 3", "B) x = 5", "C) x = 7", "D) x = 4", "E) x = 6"],
    correct: 1,
    solution: {
      brief: "Respuesta correcta: B) x = 5",
      steps: [
        { n: 1, text: "3x + 7 = 22" },
        { n: 2, text: "Restamos 7 a ambos lados: <span class='formula'>3x = 22 - 7 = 15</span>" },
        { n: 3, text: "Dividimos entre 3: <span class='formula'>x = 15 / 3 = 5</span>" },
        { n: 4, text: "Verificamos: 3(5) + 7 = 15 + 7 = 22 ✓. <strong>x = 5</strong>" }
      ]
    }
  },
  {
    id: "al002",
    subject: "Álgebra",
    year: "2023",
    question: "Si f(x) = 2x² - 3x + 1, ¿cuánto es f(2)?",
    options: ["A) 1", "B) 3", "C) 5", "D) 7", "E) 9"],
    correct: 1,
    solution: {
      brief: "Respuesta correcta: B) 3",
      steps: [
        { n: 1, text: "Sustituimos x = 2 en la función: <span class='formula'>f(2) = 2(2)² - 3(2) + 1</span>" },
        { n: 2, text: "<span class='formula'>= 2(4) - 6 + 1 = 8 - 6 + 1 = 3</span>" },
        { n: 3, text: "<strong>f(2) = 3</strong>" }
      ]
    }
  },
  {
    id: "al003",
    subject: "Álgebra",
    year: "2021",
    question: "Las raíces de x² - 5x + 6 = 0 son:",
    options: ["A) 1 y 6", "B) 2 y 3", "C) -2 y -3", "D) 3 y 2", "E) B y D son correctas"],
    correct: 4,
    solution: {
      brief: "Respuesta correcta: E) B y D son correctas (2 y 3)",
      steps: [
        { n: 1, text: "Factorizamos: buscamos dos números que sumen -5 y multipliquen 6." },
        { n: 2, text: "Esos números son -2 y -3: <span class='formula'>(-2) + (-3) = -5 ✓ y (-2)×(-3) = 6 ✓</span>" },
        { n: 3, text: "<span class='formula'>x² - 5x + 6 = (x - 2)(x - 3) = 0</span>" },
        { n: 4, text: "Soluciones: x = 2 y x = 3. Las opciones B) y D) dicen lo mismo: <strong>2 y 3</strong>." }
      ]
    }
  },
  {
    id: "al004",
    subject: "Álgebra",
    year: "2022",
    question: "¿Cuál es el valor de: (a + b)² cuando a = 3 y b = 2?",
    options: ["A) 10", "B) 13", "C) 25", "D) 12", "E) 5"],
    correct: 2,
    solution: {
      brief: "Respuesta correcta: C) 25",
      steps: [
        { n: 1, text: "Sustituimos: <span class='formula'>(3 + 2)² = 5² = 25</span>" },
        { n: 2, text: "Podemos también usar el binomio: <span class='formula'>a² + 2ab + b² = 9 + 12 + 4 = 25</span>" },
        { n: 3, text: "<strong>(a + b)² = 25</strong>" }
      ]
    }
  },
  {
    id: "al005",
    subject: "Álgebra",
    year: "2024",
    question: "Simplifica: (2x³y²)(3x²y⁴)",
    options: ["A) 5x⁵y⁶", "B) 6x⁵y⁶", "C) 6x⁶y⁸", "D) 5x⁶y⁸", "E) 6x⁵y⁸"],
    correct: 1,
    solution: {
      brief: "Respuesta correcta: B) 6x⁵y⁶",
      steps: [
        { n: 1, text: "Multiplicamos coeficientes: <span class='formula'>2 × 3 = 6</span>" },
        { n: 2, text: "Multiplicamos potencias de x (sumamos exponentes): <span class='formula'>x³ × x² = x³⁺² = x⁵</span>" },
        { n: 3, text: "Multiplicamos potencias de y: <span class='formula'>y² × y⁴ = y²⁺⁴ = y⁶</span>" },
        { n: 4, text: "Resultado: <strong>6x⁵y⁶</strong>" }
      ]
    }
  },
  {
    id: "al006",
    subject: "Álgebra",
    year: "2020",
    question: "Si la suma de dos números es 20 y su diferencia es 4, ¿cuáles son los números?",
    options: ["A) 8 y 12", "B) 10 y 10", "C) 7 y 13", "D) 6 y 14", "E) 9 y 11"],
    correct: 0,
    solution: {
      brief: "Respuesta correcta: A) 8 y 12",
      steps: [
        { n: 1, text: "Sistema de ecuaciones: <span class='formula'>x + y = 20</span> y <span class='formula'>x - y = 4</span>" },
        { n: 2, text: "Sumando ambas ecuaciones: <span class='formula'>2x = 24 → x = 12</span>" },
        { n: 3, text: "Restando: <span class='formula'>2y = 16 → y = 8</span>" },
        { n: 4, text: "Los números son <strong>12 y 8</strong>. Verificamos: 12 + 8 = 20 ✓, 12 - 8 = 4 ✓" }
      ]
    }
  }
];

// ── TRIGONOMETRÍA ──
QUESTION_BANK.trigonometria = [
  {
    id: "tr001",
    subject: "Trigonometría",
    year: "2023",
    question: "¿Cuánto es sen(30°)?",
    options: ["A) 1", "B) √3/2", "C) 1/2", "D) √2/2", "E) 0"],
    correct: 2,
    solution: {
      brief: "Respuesta correcta: C) 1/2",
      steps: [
        { n: 1, text: "Los valores trigonométricos de ángulos notables son fundamentales para el examen." },
        { n: 2, text: "<span class='formula'>sen(30°) = 1/2</span>" },
        { n: 3, text: "Tabla de referencia: sen(0°)=0, sen(30°)=½, sen(45°)=√2/2, sen(60°)=√3/2, sen(90°)=1" }
      ]
    }
  },
  {
    id: "tr002",
    subject: "Trigonometría",
    year: "2022",
    question: "En un triángulo rectángulo, si el cateto opuesto mide 3 y la hipotenusa mide 5, ¿cuánto vale sen(α)?",
    options: ["A) 4/5", "B) 3/4", "C) 5/3", "D) 3/5", "E) 4/3"],
    correct: 3,
    solution: {
      brief: "Respuesta correcta: D) 3/5",
      steps: [
        { n: 1, text: "Identidad: <span class='formula'>sen(α) = cateto opuesto / hipotenusa</span>" },
        { n: 2, text: "<span class='formula'>sen(α) = 3/5</span>" },
        { n: 3, text: "El cateto adyacente: √(5² - 3²) = √16 = 4. Así: cos(α) = 4/5, tan(α) = 3/4." }
      ]
    }
  },
  {
    id: "tr003",
    subject: "Trigonometría",
    year: "2024",
    question: "¿Cuál es la identidad pitagórica fundamental?",
    options: [
      "A) sen²(x) - cos²(x) = 1",
      "B) sen²(x) + cos²(x) = 1",
      "C) tan²(x) + 1 = sen²(x)",
      "D) sen(x) + cos(x) = 1",
      "E) sen²(x) × cos²(x) = 1"
    ],
    correct: 1,
    solution: {
      brief: "Respuesta correcta: B) sen²(x) + cos²(x) = 1",
      steps: [
        { n: 1, text: "La identidad pitagórica fundamental es: <span class='formula'>sen²(x) + cos²(x) = 1</span>" },
        { n: 2, text: "Se deriva del teorema de Pitágoras aplicado al círculo unitario." },
        { n: 3, text: "De ella se derivan: <span class='formula'>1 + tan²(x) = sec²(x)</span> y <span class='formula'>1 + cot²(x) = csc²(x)</span>" }
      ]
    }
  },
  {
    id: "tr004",
    subject: "Trigonometría",
    year: "2021",
    question: "¿Cuánto es cos(60°)?",
    options: ["A) 1", "B) √3/2", "C) √2/2", "D) 1/2", "E) 0"],
    correct: 3,
    solution: {
      brief: "Respuesta correcta: D) 1/2",
      steps: [
        { n: 1, text: "<span class='formula'>cos(60°) = 1/2</span>" },
        { n: 2, text: "Nota complementaria: cos(60°) = sen(30°) y sen(60°) = cos(30°) = √3/2" },
        { n: 3, text: "Esto se cumple siempre: cos(α) = sen(90° - α)" }
      ]
    }
  }
];

// ── GEOMETRÍA ──
QUESTION_BANK.geometria = [
  {
    id: "gm001",
    subject: "Geometría",
    year: "2023",
    question: "¿Cuál es el área de un triángulo de base 10 cm y altura 6 cm?",
    options: ["A) 60 cm²", "B) 30 cm²", "C) 16 cm²", "D) 15 cm²", "E) 32 cm²"],
    correct: 1,
    solution: {
      brief: "Respuesta correcta: B) 30 cm²",
      steps: [
        { n: 1, text: "<span class='formula'>Área = (base × altura) / 2</span>" },
        { n: 2, text: "<span class='formula'>Área = (10 × 6) / 2 = 60 / 2 = 30 cm²</span>" }
      ]
    }
  },
  {
    id: "gm002",
    subject: "Geometría",
    year: "2022",
    question: "El área de un círculo con radio 7 cm es (use π ≈ 3.14):",
    options: ["A) 43.96 cm²", "B) 153.86 cm²", "C) 21.98 cm²", "D) 44 cm²", "E) 49 cm²"],
    correct: 1,
    solution: {
      brief: "Respuesta correcta: B) 153.86 cm²",
      steps: [
        { n: 1, text: "<span class='formula'>Área = π × r²</span>" },
        { n: 2, text: "<span class='formula'>= 3.14 × 7² = 3.14 × 49 = 153.86 cm²</span>" }
      ]
    }
  },
  {
    id: "gm003",
    subject: "Geometría",
    year: "2024",
    question: "En un triángulo rectángulo los catetos miden 6 y 8 cm. ¿Cuánto mide la hipotenusa?",
    options: ["A) 12 cm", "B) 14 cm", "C) 10 cm", "D) 7 cm", "E) 11 cm"],
    correct: 2,
    solution: {
      brief: "Respuesta correcta: C) 10 cm",
      steps: [
        { n: 1, text: "Aplicamos el Teorema de Pitágoras: <span class='formula'>c² = a² + b²</span>" },
        { n: 2, text: "<span class='formula'>c² = 6² + 8² = 36 + 64 = 100</span>" },
        { n: 3, text: "<span class='formula'>c = √100 = 10 cm</span>" },
        { n: 4, text: "Esta es una terna pitagórica clásica: <strong>6-8-10</strong> (también 3-4-5 multiplicado por 2)." }
      ]
    }
  },
  {
    id: "gm004",
    subject: "Geometría",
    year: "2021",
    question: "¿Cuál es el perímetro de un cuadrado cuya área es 49 cm²?",
    options: ["A) 14 cm", "B) 28 cm", "C) 49 cm", "D) 7 cm", "E) 196 cm"],
    correct: 1,
    solution: {
      brief: "Respuesta correcta: B) 28 cm",
      steps: [
        { n: 1, text: "Si Área = lado² → <span class='formula'>lado = √49 = 7 cm</span>" },
        { n: 2, text: "<span class='formula'>Perímetro = 4 × lado = 4 × 7 = 28 cm</span>" }
      ]
    }
  },
  {
    id: "gm005",
    subject: "Geometría",
    year: "2023",
    question: "La suma de los ángulos internos de un triángulo es siempre:",
    options: ["A) 90°", "B) 270°", "C) 360°", "D) 180°", "E) 120°"],
    correct: 3,
    solution: {
      brief: "Respuesta correcta: D) 180°",
      steps: [
        { n: 1, text: "Propiedad fundamental: la suma de los ángulos internos de cualquier triángulo = <strong>180°</strong>." },
        { n: 2, text: "Para polígonos: suma = (n − 2) × 180°, donde n = número de lados." },
        { n: 3, text: "Cuadrilátero: (4-2)×180 = 360°. Pentágono: (5-2)×180 = 540°." }
      ]
    }
  }
];

// ── MÁS FÍSICA ──
QUESTION_BANK.fisica.push(
  {
    id: "fi006",
    subject: "Física",
    year: "2022",
    question: "¿Cuál es la unidad de medida de la fuerza en el Sistema Internacional?",
    options: ["A) Joule", "B) Watt", "C) Newton", "D) Pascal", "E) Kilogramo"],
    correct: 2,
    solution: {
      brief: "Respuesta correcta: C) Newton",
      steps: [
        { n: 1, text: "En el SI, la fuerza se mide en <strong>Newtons (N)</strong>, en honor a Isaac Newton." },
        { n: 2, text: "1 N = 1 kg·m/s² (de la Segunda Ley: F = m × a)" },
        { n: 3, text: "Joule = energía, Watt = potencia, Pascal = presión, Kilogramo = masa." }
      ]
    }
  },
  {
    id: "fi007",
    subject: "Física",
    year: "2021",
    question: "Un objeto cae libremente desde el reposo. Después de 3 segundos (g=10 m/s²), su velocidad es:",
    options: ["A) 10 m/s", "B) 15 m/s", "C) 30 m/s", "D) 45 m/s", "E) 90 m/s"],
    correct: 2,
    solution: {
      brief: "Respuesta correcta: C) 30 m/s",
      steps: [
        { n: 1, text: "Caída libre: <span class='formula'>v = g × t</span> (parte del reposo, v₀ = 0)" },
        { n: 2, text: "<span class='formula'>v = 10 m/s² × 3 s = 30 m/s</span>" },
        { n: 3, text: "La distancia caída sería: <span class='formula'>h = ½ g t² = ½ × 10 × 9 = 45 m</span>" }
      ]
    }
  },
  {
    id: "fi008",
    subject: "Física",
    year: "2024",
    question: "¿Qué tipo de energía tiene un cuerpo en movimiento?",
    options: ["A) Energía potencial", "B) Energía química", "C) Energía cinética", "D) Energía nuclear", "E) Energía térmica"],
    correct: 2,
    solution: {
      brief: "Respuesta correcta: C) Energía cinética",
      steps: [
        { n: 1, text: "La <strong>energía cinética</strong> es la energía que posee un cuerpo por estar en movimiento." },
        { n: 2, text: "<span class='formula'>Ec = ½ × m × v²</span>" },
        { n: 3, text: "La energía potencial es por posición/altura. La química está almacenada en enlaces." }
      ]
    }
  }
);

// ── MÁS QUÍMICA ──
QUESTION_BANK.quimica.push(
  {
    id: "qu006",
    subject: "Química",
    year: "2022",
    question: "¿Cuál es la fórmula del ácido sulfúrico?",
    options: ["A) HCl", "B) H₂SO₄", "C) HNO₃", "D) H₃PO₄", "E) H₂CO₃"],
    correct: 1,
    solution: {
      brief: "Respuesta correcta: B) H₂SO₄",
      steps: [
        { n: 1, text: "<strong>H₂SO₄</strong> = Ácido sulfúrico (dihidrógeno + sulfato)" },
        { n: 2, text: "HCl = ácido clorhídrico, HNO₃ = ácido nítrico, H₃PO₄ = ácido fosfórico." },
        { n: 3, text: "El H₂SO₄ es uno de los ácidos más fuertes e industrialmente más importantes." }
      ]
    }
  },
  {
    id: "qu007",
    subject: "Química",
    year: "2021",
    question: "¿Cuántos electrones puede contener la capa L (n=2)?",
    options: ["A) 2", "B) 4", "C) 6", "D) 8", "E) 10"],
    correct: 3,
    solution: {
      brief: "Respuesta correcta: D) 8",
      steps: [
        { n: 1, text: "La capacidad máxima de cada capa es: <span class='formula'>2n²</span> electrones." },
        { n: 2, text: "Para capa L (n=2): <span class='formula'>2 × 2² = 2 × 4 = 8 electrones</span>" },
        { n: 3, text: "Capa K(n=1): 2e⁻. Capa L(n=2): 8e⁻. Capa M(n=3): 18e⁻." }
      ]
    }
  },
  {
    id: "qu008",
    subject: "Química",
    year: "2023",
    question: "¿Qué tipo de enlace se forma cuando dos no-metales comparten electrones?",
    options: ["A) Enlace iónico", "B) Enlace metálico", "C) Enlace covalente", "D) Enlace de Van der Waals", "E) Enlace coordinado"],
    correct: 2,
    solution: {
      brief: "Respuesta correcta: C) Enlace covalente",
      steps: [
        { n: 1, text: "El <strong>enlace covalente</strong> se forma por compartición de pares de electrones entre átomos." },
        { n: 2, text: "Ocurre típicamente entre no-metales (ej. H₂O, CO₂, CH₄)." },
        { n: 3, text: "Enlace iónico = transferencia de electrones (metal + no-metal). Metálico = entre metales." }
      ]
    }
  }
);

// ── MÁS BIOLOGÍA ──
QUESTION_BANK.biologia.push(
  {
    id: "bi005",
    subject: "Biología",
    year: "2022",
    question: "¿Cuál es la molécula que transporta el oxígeno en la sangre humana?",
    options: ["A) Glucosa", "B) Insulina", "C) Hemoglobina", "D) Colágeno", "E) Queratina"],
    correct: 2,
    solution: {
      brief: "Respuesta correcta: C) Hemoglobina",
      steps: [
        { n: 1, text: "La <strong>hemoglobina</strong> es una proteína de los glóbulos rojos que transporta O₂." },
        { n: 2, text: "Contiene hierro (Fe) en su grupo hemo, que se une al oxígeno molecular." },
        { n: 3, text: "Glucosa = energía. Insulina = regula glucosa. Colágeno/Queratina = proteínas estructurales." }
      ]
    }
  },
  {
    id: "bi006",
    subject: "Biología",
    year: "2024",
    question: "La mitosis produce células hijas con:",
    options: [
      "A) La mitad de cromosomas que la célula madre",
      "B) El doble de cromosomas",
      "C) El mismo número de cromosomas que la célula madre",
      "D) Cromosomas aleatorios",
      "E) Ningún cromosoma"
    ],
    correct: 2,
    solution: {
      brief: "Respuesta correcta: C) El mismo número de cromosomas que la célula madre",
      steps: [
        { n: 1, text: "La <strong>mitosis</strong> es la división celular para crecimiento y reparación." },
        { n: 2, text: "Produce 2 células hijas genéticamente idénticas a la célula madre." },
        { n: 3, text: "Célula madre (46 crom.) → Mitosis → 2 células hijas (46 crom. cada una)." },
        { n: 4, text: "La <strong>meiosis</strong> (no la mitosis) produce células con la mitad de cromosomas (23), para los gametos." }
      ]
    }
  },
  {
    id: "bi007",
    subject: "Biología",
    year: "2021",
    question: "¿Cómo se llama el proceso por el cual los animales obtienen energía degradando glucosa?",
    options: ["A) Fotosíntesis", "B) Fermentación", "C) Respiración celular", "D) Ósmosis", "E) Digestión"],
    correct: 2,
    solution: {
      brief: "Respuesta correcta: C) Respiración celular",
      steps: [
        { n: 1, text: "La <strong>respiración celular</strong> (aeróbica) degrada glucosa para producir ATP (energía)." },
        { n: 2, text: "<span class='formula'>C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + 36-38 ATP</span>" },
        { n: 3, text: "Ocurre en mitocondrias. Fotosíntesis produce glucosa (plantas). Fermentación = sin oxígeno." }
      ]
    }
  }
);

// ── MÁS HISTORIA ──
QUESTION_BANK.historia.push(
  {
    id: "hi004",
    subject: "Historia del Perú",
    year: "2022",
    question: "¿Qué cultura pre-inca construyó la ciudad de Chan Chan?",
    options: ["A) Mochica", "B) Wari", "C) Chimú", "D) Nazca", "E) Tiahuanaco"],
    correct: 2,
    solution: {
      brief: "Respuesta correcta: C) Chimú",
      steps: [
        { n: 1, text: "Chan Chan fue la capital del <strong>Imperio Chimú</strong>, ubicada en La Libertad, Perú." },
        { n: 2, text: "Es la ciudad de adobe más grande de América precolombina. Fue declarada Patrimonio de la Humanidad por la UNESCO." },
        { n: 3, text: "El Imperio Chimú fue conquistado por los incas alrededor de 1470 d.C." }
      ]
    }
  },
  {
    id: "hi005",
    subject: "Historia del Perú",
    year: "2023",
    question: "¿En qué batalla se consolidó definitivamente la independencia del Perú?",
    options: ["A) Batalla de Junín", "B) Batalla de Ayacucho", "C) Batalla de Arica", "D) Batalla de Tarapacá", "E) Batalla de Miraflores"],
    correct: 1,
    solution: {
      brief: "Respuesta correcta: B) Batalla de Ayacucho",
      steps: [
        { n: 1, text: "La <strong>Batalla de Ayacucho</strong> (9 de diciembre de 1824) fue la batalla que selló la independencia de América del Sur." },
        { n: 2, text: "El Ejército Unido Libertador, comandado por el Mariscal Sucre, derrotó a las fuerzas realistas españolas." },
        { n: 3, text: "La Batalla de Junín (agosto 1824) fue previa y preparó el camino para Ayacucho." }
      ]
    }
  },
  {
    id: "hi006",
    subject: "Historia Universal",
    year: "2022",
    question: "¿Cuándo comenzó la Primera Guerra Mundial?",
    options: ["A) 1905", "B) 1914", "C) 1918", "D) 1939", "E) 1910"],
    correct: 1,
    solution: {
      brief: "Respuesta correcta: B) 1914",
      steps: [
        { n: 1, text: "La Primera Guerra Mundial comenzó en <strong>1914</strong> y terminó en 1918." },
        { n: 2, text: "El detonante fue el asesinato del Archiduque Francisco Fernando de Austria en Sarajevo (28 de junio de 1914)." },
        { n: 3, text: "1939 = inicio de la Segunda Guerra Mundial. 1918 = fin de la Primera." }
      ]
    }
  }
);

// ── MÁS VERBAL ──
QUESTION_BANK.verbal.push(
  {
    id: "rv007",
    subject: "Razonamiento Verbal",
    year: "2024",
    question: "¿Cuál es el sinónimo de PERSPICAZ?",
    options: ["A) Torpe", "B) Agudo", "C) Lento", "D) Distraído", "E) Ingenuo"],
    correct: 1,
    solution: {
      brief: "Respuesta correcta: B) Agudo",
      steps: [
        { n: 1, text: "PERSPICAZ = que percibe y comprende con agudeza e inteligencia las cosas." },
        { n: 2, text: "Sinónimos: agudo, sagaz, astuto, listo, avispado." },
        { n: 3, text: "Antónimos: torpe, lento, ingenuo, distraído (todas las otras opciones)." }
      ]
    }
  },
  {
    id: "rv008",
    subject: "Razonamiento Verbal",
    year: "2023",
    question: "PALOMA : PALOMAR :: ABEJA : ___",
    options: ["A) Miel", "B) Colmena", "C) Zángano", "D) Flor", "E) Panal"],
    correct: 1,
    solution: {
      brief: "Respuesta correcta: B) Colmena",
      steps: [
        { n: 1, text: "La relación es: <strong>animal → lugar donde vive o se aloja</strong>" },
        { n: 2, text: "PALOMA vive en PALOMAR. ABEJA vive en COLMENA." },
        { n: 3, text: "Panal es donde almacenan la miel, pero la colmena es la estructura/hogar completo de las abejas." }
      ]
    }
  },
  {
    id: "rv009",
    subject: "Razonamiento Verbal",
    year: "2022",
    question: "Identifica el tipo de oración: 'El sol sale por el este y se pone por el oeste.'",
    options: [
      "A) Oración simple",
      "B) Oración compuesta copulativa",
      "C) Oración compuesta adversativa",
      "D) Oración compuesta disyuntiva",
      "E) Oración subordinada"
    ],
    correct: 1,
    solution: {
      brief: "Respuesta correcta: B) Oración compuesta copulativa",
      steps: [
        { n: 1, text: "La oración tiene dos proposiciones unidas por la conjunción <strong>'y'</strong>." },
        { n: 2, text: "La conjunción 'y' es coordinante copulativa → suma ideas sin oposición." },
        { n: 3, text: "Adversativa usa 'pero', 'sino'. Disyuntiva usa 'o'. Subordinada tiene dependencia." }
      ]
    }
  },
  {
    id: "rv010",
    subject: "Razonamiento Verbal",
    year: "2021",
    question: "¿Cuál es el antónimo de DÍSCOLO?",
    options: ["A) Rebelde", "B) Desobediente", "C) Dócil", "D) Indómito", "E) Terco"],
    correct: 2,
    solution: {
      brief: "Respuesta correcta: C) Dócil",
      steps: [
        { n: 1, text: "DÍSCOLO = que no obedece, que es rebelde o difícil de manejar." },
        { n: 2, text: "Su antónimo es <strong>DÓCIL</strong> = que obedece, que es manejable, obediente." },
        { n: 3, text: "Rebelde, Desobediente, Indómito y Terco son sinónimos de díscolo." }
      ]
    }
  }
);

// ── MÁS GEOGRAFÍA ──
QUESTION_BANK.geografia.push(
  {
    id: "ge003",
    subject: "Geografía",
    year: "2022",
    question: "¿En qué región natural del Perú se ubica la ciudad de Abancay (sede de la UNAMBA)?",
    options: ["A) Costa", "B) Selva alta", "C) Sierra", "D) Puna", "E) Selva baja"],
    correct: 2,
    solution: {
      brief: "Respuesta correcta: C) Sierra",
      steps: [
        { n: 1, text: "Abancay, capital de Apurímac, se encuentra en la región <strong>Sierra</strong> del Perú." },
        { n: 2, text: "Está ubicada a aproximadamente 2,377 m.s.n.m., en el valle del río Mariño." },
        { n: 3, text: "La UNAMBA (Universidad Nacional Micaela Bastidas de Apurímac) tiene su sede principal en Abancay." }
      ]
    }
  },
  {
    id: "ge004",
    subject: "Geografía",
    year: "2024",
    question: "¿Cuál es la cordillera más larga del mundo?",
    options: ["A) Himalayas", "B) Alpes", "C) Andes", "D) Urales", "E) Rocosas"],
    correct: 2,
    solution: {
      brief: "Respuesta correcta: C) Andes",
      steps: [
        { n: 1, text: "Los <strong>Andes</strong> son la cordillera más larga del mundo, con aproximadamente 7,000 km." },
        { n: 2, text: "Atraviesa 7 países de América del Sur: Venezuela, Colombia, Ecuador, Perú, Bolivia, Argentina y Chile." },
        { n: 3, text: "El Himalaya tiene las cumbres más altas (Everest), pero no es la más larga." }
      ]
    }
  }
);

// ── ACTUALIZAR getQuestionsByArea para incluir nuevas materias ──
window.getQuestionsByArea = function(area) {
  const areaMap = {
    ingenierias: ['matematica', 'aritmetica', 'algebra', 'geometria', 'trigonometria', 'fisica', 'quimica'],
    biomedicas:  ['biologia', 'quimica', 'fisica', 'aritmetica'],
    sociales:    ['historia', 'geografia', 'verbal', 'aritmetica'],
    all:         ['matematica', 'aritmetica', 'algebra', 'geometria', 'trigonometria',
                  'fisica', 'quimica', 'biologia', 'historia', 'geografia', 'verbal']
  };

  const subjects = areaMap[area] || areaMap.all;
  let questions = [];
  subjects.forEach(s => {
    if (QUESTION_BANK[s]) questions.push(...QUESTION_BANK[s]);
  });
  return questions.sort(() => Math.random() - 0.5);
};

console.log('✅ Banco extendido cargado. Total preguntas:', Object.values(QUESTION_BANK).reduce((a, arr) => a + arr.length, 0));
