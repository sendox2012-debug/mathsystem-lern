export default function Theory() {
  return (
    <div className="theory-page animate-in">
      <div className="container">
        <div className="section-header">
          <h1>📚 Теория: Системы линейных уравнений</h1>
          <p>
            Полное руководство для 7–8 класса. 4 метода решения + проверка +
            лайфхаки
          </p>
        </div>

        {/* ===== ВВЕДЕНИЕ ===== */}
        <div className="method-card general-tip">
          <div className="method-header">
            <div
              className="method-icon"
              style={{ background: "var(--ios-blue)" }}
            >
              🎯
            </div>
            <div>
              <div className="method-title">Что такое система уравнений?</div>
              <div className="method-subtitle">Базовое понимание</div>
            </div>
          </div>
          <div className="method-content">
            <p>
              <strong>Система уравнений</strong> — это два или более уравнения,
              которые должны выполняться <em>одновременно</em>. Решить систему =
              найти такие значения переменных, которые удовлетворяют{" "}
              <strong>всем</strong> уравнениям сразу.
            </p>

            <div className="math-example">
              <span className="step">
                <span className="step-label">Пример:</span> {`{ 2x + y = 7`}
              </span>
              <span className="step">
                <span className="step-label"></span> {`  { x - y = 2`}
              </span>
              <span className="step">
                <span className="step-label">Решение:</span> x = 3, y = 1
              </span>
              <span className="step">
                <span className="step-label">Проверка:</span> 2·3 + 1 = 7 ✓ | 3
                - 1 = 2 ✓
              </span>
            </div>

            <p>
              <strong>Геометрический смысл:</strong> Каждое линейное уравнение с
              двумя переменными — это прямая на координатной плоскости. Решение
              системы — это точка пересечения этих прямых.
            </p>

            <div
              className="tips-box"
              style={{
                background: "rgba(10,132,255,0.08)",
                borderColor: "rgba(10,132,255,0.2)",
              }}
            >
              <strong>💡 Запомни:</strong> Система может иметь: <br />•{" "}
              <strong>Одно решение</strong> — прямые пересекаются в одной точке{" "}
              <br />• <strong>Нет решений</strong> — прямые параллельны и не
              совпадают <br />• <strong>Бесконечно много решений</strong> —
              прямые полностью совпадают
            </div>
          </div>
        </div>

        {/* ===== МЕТОД 1: ПОДСТАНОВКА ===== */}
        <div className="method-card method-1">
          <div className="method-header">
            <div
              className="method-icon"
              style={{ background: "var(--ios-blue)" }}
            >
              🔄
            </div>
            <div>
              <div className="method-title">Метод подстановки</div>
              <div className="method-subtitle">
                Вырази одну переменную и подставь в другое уравнение
              </div>
            </div>
          </div>
          <div className="method-content">
            <h3>📋 Когда использовать?</h3>
            <p>
              Идеален, когда в одном из уравнений переменная уже выражена
              (например, <code className="mono">y = 2x + 3</code>) или её легко
              выразить (коэффициент при переменной равен 1 или -1).
            </p>

            <h3>📝 Пошаговый алгоритм:</h3>
            <ol style={{ paddingLeft: 20, marginBottom: 16 }}>
              <li>
                <strong>Выбери уравнение,</strong> из которого проще выразить
                переменную.
              </li>
              <li>
                <strong>Вырази одну переменную</strong> через другую (например,{" "}
                <code className="mono">y = ...</code>).
              </li>
              <li>
                <strong>Подставь</strong> полученное выражение{" "}
                <strong>в другое уравнение</strong> вместо этой переменной.
              </li>
              <li>
                <strong>Реши полученное уравнение</strong> с одной переменной.
              </li>
              <li>
                <strong>Найди вторую переменную,</strong> подставив найденное
                значение в выражение из шага 2.
              </li>
              <li>
                <strong>Проверь ответ</strong> подстановкой в оба исходных
                уравнения.
              </li>
            </ol>

            <h3>🧮 Подробный пример:</h3>
            <div className="math-example">
              <span className="step">
                <span className="step-label">Дано:</span> {`{ y = x + 3  (1)`}
              </span>
              <span className="step">
                <span className="step-label"></span> {`  { 2x + y = 9  (2)`}
              </span>
              <br />
              <span className="step">
                <span className="step-label">Шаг 1:</span> В уравнении (1) y уже
                выражен: y = x + 3
              </span>
              <span className="step">
                <span className="step-label">Шаг 2:</span> Подставляем y = x + 3
                в уравнение (2):
              </span>
              <span className="step">
                <span className="step-label"></span> 2x + (x + 3) = 9
              </span>
              <span className="step">
                <span className="step-label">Шаг 3:</span> Раскрываем скобки и
                решаем:
              </span>
              <span className="step">
                <span className="step-label"></span> 2x + x + 3 = 9
              </span>
              <span className="step">
                <span className="step-label"></span> 3x = 6
              </span>
              <span className="step">
                <span className="step-label"></span>{" "}
                <span className="result">x = 2</span>
              </span>
              <span className="step">
                <span className="step-label">Шаг 4:</span> Находим y, подставляя
                x = 2 в y = x + 3:
              </span>
              <span className="step">
                <span className="step-label"></span> y = 2 + 3 ={" "}
                <span className="result">5</span>
              </span>
              <span className="step">
                <span className="step-label">Проверка:</span> (1) 5 = 2 + 3 ✓ |
                (2) 2·2 + 5 = 9 ✓
              </span>
              <span className="step">
                <span className="step-label">Ответ:</span>{" "}
                <span className="result">(2; 5)</span>
              </span>
            </div>

            <div className="tips-box">
              <strong>⚠️ Типичные ошибки:</strong>
              <br />• <strong>Знаки при раскрытии скобок:</strong> 2x - (x + 3)
              = 2x - x - 3, а не 2x - x + 3<br />•{" "}
              <strong>Подстановка не в то уравнение:</strong> Подставляй
              выражение именно в <em>другое</em> уравнение, не в то, из которого
              выражал!
              <br />• <strong>Забыл найти вторую переменную:</strong> После
              нахождения x обязательно найди y.
            </div>

            <div
              className="tips-box"
              style={{
                background: "rgba(48,209,88,0.08)",
                borderColor: "rgba(48,209,88,0.2)",
              }}
            >
              <strong>✅ Лайфхак:</strong> Если в системе есть уравнение вида{" "}
              <code className="mono">x = ...</code> или{" "}
              <code className="mono">y = ...</code> — начинай с него. Это
              сэкономит время и уменьшит риск ошибки.
            </div>
          </div>
        </div>

        {/* ===== МЕТОД 2: СЛОЖЕНИЕ ===== */}
        <div className="method-card method-2">
          <div className="method-header">
            <div
              className="method-icon"
              style={{ background: "var(--ios-green)" }}
            >
              ➕
            </div>
            <div>
              <div className="method-title">Метод сложения</div>
              <div className="method-subtitle">
                Сложи уравнения, чтобы одна переменная сократилась
              </div>
            </div>
          </div>
          <div className="method-content">
            <h3>📋 Когда использовать?</h3>
            <p>
              Идеален, когда коэффициенты при одной переменной в двух уравнениях{" "}
              <strong>противоположны</strong> (например, +3y и -3y) или легко
              делаются таковыми умножением на небольшое число.
            </p>

            <h3>📝 Пошаговый алгоритм:</h3>
            <ol style={{ paddingLeft: 20, marginBottom: 16 }}>
              <li>
                <strong>Выбери переменную,</strong> коэффициенты при которой
                удобно сделать противоположными.
              </li>
              <li>
                <strong>Умножь уравнения</strong> на подходящие числа, чтобы
                коэффициенты стали противоположными.
              </li>
              <li>
                <strong>Сложи уравнения почленно:</strong> левую часть с левой,
                правую с правой.
              </li>
              <li>
                <strong>Реши полученное уравнение</strong> с одной переменной.
              </li>
              <li>
                <strong>Найди вторую переменную,</strong> подставив найденное
                значение в любое исходное уравнение.
              </li>
              <li>
                <strong>Проверь ответ.</strong>
              </li>
            </ol>

            <h3>🧮 Подробный пример:</h3>
            <div className="math-example">
              <span className="step">
                <span className="step-label">Дано:</span>{" "}
                {`{ 3x + 2y = 13  (1)`}
              </span>
              <span className="step">
                <span className="step-label"></span> {`  { 3x - 2y = 5   (2)`}
              </span>
              <br />
              <span className="step">
                <span className="step-label">Шаг 1:</span> Коэффициенты при y:
                +2 и -2 — уже противоположны!
              </span>
              <span className="step">
                <span className="step-label">Шаг 2:</span> Складываем уравнения
                (1) + (2):
              </span>
              <span className="step">
                <span className="step-label"></span> (3x + 3x) + (2y - 2y) = 13
                + 5
              </span>
              <span className="step">
                <span className="step-label"></span> 6x + 0 = 18
              </span>
              <span className="step">
                <span className="step-label">Шаг 3:</span> Решаем: 6x = 18 →{" "}
                <span className="result">x = 3</span>
              </span>
              <span className="step">
                <span className="step-label">Шаг 4:</span> Подставляем x = 3 в
                уравнение (1):
              </span>
              <span className="step">
                <span className="step-label"></span> 3·3 + 2y = 13
              </span>
              <span className="step">
                <span className="step-label"></span> 9 + 2y = 13
              </span>
              <span className="step">
                <span className="step-label"></span> 2y = 4 →{" "}
                <span className="result">y = 2</span>
              </span>
              <span className="step">
                <span className="step-label">Проверка:</span> (1) 3·3 + 2·2 = 13
                ✓ | (2) 3·3 - 2·2 = 5 ✓
              </span>
              <span className="step">
                <span className="step-label">Ответ:</span>{" "}
                <span className="result">(3; 2)</span>
              </span>
            </div>

            <h3>🔁 Если коэффициенты не противоположны:</h3>
            <div className="math-example">
              <span className="step">
                <span className="step-label">Дано:</span>{" "}
                {`{ 2x + 3y = 12  (1)`}
              </span>
              <span className="step">
                <span className="step-label"></span> {`  { 4x - y = 10   (2)`}
              </span>
              <br />
              <span className="step">
                <span className="step-label">Шаг 1:</span> Хотим сократить y. В
                (1) коэффициент 3, в (2) -1.
              </span>
              <span className="step">
                <span className="step-label">Шаг 2:</span> Умножим (2) на 3,
                чтобы получить -3y:
              </span>
              <span className="step">
                <span className="step-label"></span> (2) × 3: 12x - 3y = 30
              </span>
              <span className="step">
                <span className="step-label">Шаг 3:</span> Складываем (1) и
                новую (2):
              </span>
              <span className="step">
                <span className="step-label"></span> (2x + 12x) + (3y - 3y) = 12
                + 30
              </span>
              <span className="step">
                <span className="step-label"></span> 14x = 42 →{" "}
                <span className="result">x = 3</span>
              </span>
              <span className="step">
                <span className="step-label">Шаг 4:</span> Подставляем x = 3 в
                (2): 4·3 - y = 10 → y = 2
              </span>
            </div>

            <div className="tips-box">
              <strong>⚠️ Типичные ошибки:</strong>
              <br />• <strong>Умножил только одну часть уравнения:</strong>{" "}
              Умножай <em>всё</em> уравнение целиком!
              <br />• <strong>Неправильные знаки при сложении:</strong> Помни:
              (+) + (-) = вычитание.
              <br />• <strong>Сложил не те коэффициенты:</strong> Складывай x с
              x, y с y, числа с числами.
            </div>

            <div
              className="tips-box"
              style={{
                background: "rgba(48,209,88,0.08)",
                borderColor: "rgba(48,209,88,0.2)",
              }}
            >
              <strong>✅ Лайфхак:</strong> Перед умножением найди НОК
              (наименьшее общее кратное) коэффициентов — это поможет подобрать
              минимальные множители.
            </div>
          </div>
        </div>

        {/* ===== МЕТОД 3: ВЫЧИТАНИЕ ===== */}
        <div className="method-card method-3">
          <div className="method-header">
            <div
              className="method-icon"
              style={{ background: "var(--ios-orange)" }}
            >
              ➖
            </div>
            <div>
              <div className="method-title">Метод вычитания</div>
              <div className="method-subtitle">
                Вычти одно уравнение из другого, если коэффициенты одинаковы
              </div>
            </div>
          </div>
          <div className="method-content">
            <h3>📋 Когда использовать?</h3>
            <p>
              Применяется, когда коэффициенты при одной переменной в обоих
              уравнениях <strong>одинаковы</strong> (например, +4y и +4y).
              Вместо сложения мы вычитаем одно уравнение из другого.
            </p>

            <h3>📝 Пошаговый алгоритм:</h3>
            <ol style={{ paddingLeft: 20, marginBottom: 16 }}>
              <li>
                <strong>Убедись,</strong> что коэффициенты при одной переменной
                одинаковы.
              </li>
              <li>
                <strong>Вычти одно уравнение из другого</strong> (обычно из
                большего коэффициента вычитают меньший).
              </li>
              <li>
                <strong>Раскрой скобки правильно:</strong>{" "}
                <code className="mono">(a + b) - (c + d) = a + b - c - d</code>
              </li>
              <li>
                <strong>Реши полученное уравнение</strong> с одной переменной.
              </li>
              <li>
                <strong>Найди вторую переменную</strong> подстановкой.
              </li>
              <li>
                <strong>Проверь ответ.</strong>
              </li>
            </ol>

            <h3>🧮 Подробный пример:</h3>
            <div className="math-example">
              <span className="step">
                <span className="step-label">Дано:</span>{" "}
                {`{ 5x + 3y = 18  (1)`}
              </span>
              <span className="step">
                <span className="step-label"></span> {`  { 2x + 3y = 9   (2)`}
              </span>
              <br />
              <span className="step">
                <span className="step-label">Шаг 1:</span> Коэффициенты при y
                одинаковы: +3 и +3
              </span>
              <span className="step">
                <span className="step-label">Шаг 2:</span> Вычитаем (2) из (1):
                (1) - (2)
              </span>
              <span className="step">
                <span className="step-label"></span> (5x + 3y) - (2x + 3y) = 18
                - 9
              </span>
              <span className="step">
                <span className="step-label">Шаг 3:</span> Раскрываем скобки{" "}
                <strong>с изменением знаков</strong>:
              </span>
              <span className="step">
                <span className="step-label"></span> 5x + 3y - 2x - 3y = 9
              </span>
              <span className="step">
                <span className="step-label"></span> 3x = 9 →{" "}
                <span className="result">x = 3</span>
              </span>
              <span className="step">
                <span className="step-label">Шаг 4:</span> Подставляем x = 3 в
                (2):
              </span>
              <span className="step">
                <span className="step-label"></span> 2·3 + 3y = 9
              </span>
              <span className="step">
                <span className="step-label"></span> 6 + 3y = 9 → 3y = 3 →{" "}
                <span className="result">y = 1</span>
              </span>
              <span className="step">
                <span className="step-label">Проверка:</span> (1) 5·3 + 3·1 = 18
                ✓ | (2) 2·3 + 3·1 = 9 ✓
              </span>
              <span className="step">
                <span className="step-label">Ответ:</span>{" "}
                <span className="result">(3; 1)</span>
              </span>
            </div>

            <div className="tips-box">
              <strong>⚠️ Критически важно:</strong>
              <br />
              При вычитании{" "}
              <strong>
                все знаки второго уравнения меняются на противоположные
              </strong>
              ! <br />
              Пример: <code className="mono">-(2x + 3y) = -2x - 3y</code>, а не{" "}
              <code className="mono">-2x + 3y</code>.
            </div>

            <div
              className="tips-box"
              style={{
                background: "rgba(48,209,88,0.08)",
                borderColor: "rgba(48,209,88,0.2)",
              }}
            >
              <strong>✅ Лайфхак:</strong> Если не уверен в знаках — сначала
              умножь второе уравнение на -1, а потом сложи. Это то же самое, но
              меньше шансов ошибиться.
            </div>
          </div>
        </div>

        {/* ===== МЕТОД 4: ГРАФИЧЕСКИЙ ===== */}
        <div className="method-card method-4">
          <div className="method-header">
            <div
              className="method-icon"
              style={{ background: "var(--ios-purple)" }}
            >
              📈
            </div>
            <div>
              <div className="method-title">Графический метод</div>
              <div className="method-subtitle">
                Построй графики и найди точку пересечения
              </div>
            </div>
          </div>
          <div className="method-content">
            <h3>📋 Когда использовать?</h3>
            <p>
              Удобен для <strong>понимания</strong> и <strong>проверки</strong>{" "}
              ответа. Также хорош, когда уравнения уже приведены к виду{" "}
              <code className="mono">y = kx + b</code>.
            </p>

            <h3>📝 Пошаговый алгоритм:</h3>
            <ol style={{ paddingLeft: 20, marginBottom: 16 }}>
              <li>
                <strong>Приведи оба уравнения</strong> к виду{" "}
                <code className="mono">y = kx + b</code> (если ещё не в таком
                виде).
              </li>
              <li>
                <strong>Построй первую прямую:</strong> найди две точки,
                подставив удобные значения x.
              </li>
              <li>
                <strong>Построй вторую прямую</strong> тем же способом на той же
                координатной плоскости.
              </li>
              <li>
                <strong>Найди точку пересечения</strong> — её координаты (x; y)
                и есть решение.
              </li>
              <li>
                <strong>Проверь ответ</strong> аналитически (подстановкой).
              </li>
            </ol>

            <h3>🧮 Подробный пример:</h3>
            <div className="math-example">
              <span className="step">
                <span className="step-label">Дано:</span> {`{ y = x + 1  (1)`}
              </span>
              <span className="step">
                <span className="step-label"></span> {`  { y = -x + 5  (2)`}
              </span>
              <br />
              <span className="step">
                <span className="step-label">Шаг 1:</span> Оба уравнения уже в
                виде y = kx + b ✓
              </span>
              <span className="step">
                <span className="step-label">Шаг 2:</span> Строим прямую (1) y =
                x + 1:
              </span>
              <span className="step">
                <span className="step-label"></span> x = 0 → y = 1 → точка (0;
                1)
              </span>
              <span className="step">
                <span className="step-label"></span> x = 2 → y = 3 → точка (2;
                3)
              </span>
              <span className="step">
                <span className="step-label">Шаг 3:</span> Строим прямую (2) y =
                -x + 5:
              </span>
              <span className="step">
                <span className="step-label"></span> x = 0 → y = 5 → точка (0;
                5)
              </span>
              <span className="step">
                <span className="step-label"></span> x = 2 → y = 3 → точка (2;
                3)
              </span>
              <span className="step">
                <span className="step-label">Шаг 4:</span> Обе прямые проходят
                через (2; 3) → это точка пересечения
              </span>
              <span className="step">
                <span className="step-label">Проверка:</span> (1) 3 = 2 + 1 ✓ |
                (2) 3 = -2 + 5 ✓
              </span>
              <span className="step">
                <span className="step-label">Ответ:</span>{" "}
                <span className="result">(2; 3)</span>
              </span>
            </div>

            <h3>🔍 Особые случаи на графике:</h3>
            <div className="tips-box">
              <strong>• Параллельные прямые</strong> (одинаковый k, разный b) →{" "}
              <strong>нет решений</strong>
              <br />
              <strong>• Совпадающие прямые</strong> (одинаковые k и b) →{" "}
              <strong>бесконечно много решений</strong>
              <br />
              <strong>• Пересекающиеся прямые</strong> (разные k) →{" "}
              <strong>одно решение</strong>
            </div>

            <div
              className="tips-box"
              style={{
                background: "rgba(48,209,88,0.08)",
                borderColor: "rgba(48,209,88,0.2)",
              }}
            >
              <strong>✅ Лайфхак:</strong> Для построения прямой достаточно двух
              точек. Выбирай x = 0 и ещё одно удобное значение (1, 2, -1).
            </div>
          </div>
        </div>

        {/* ===== ПРОВЕРКА ОТВЕТА ===== */}
        <div className="method-card general-tip">
          <div className="method-header">
            <div
              className="method-icon"
              style={{ background: "var(--ios-green)" }}
            >
              ✓
            </div>
            <div>
              <div className="method-title">Как проверить ответ?</div>
              <div className="method-subtitle">Обязательный финальный шаг</div>
            </div>
          </div>
          <div className="method-content">
            <p>
              После нахождения <code className="mono">(x; y)</code>{" "}
              <strong>всегда</strong> подставляй значения в <strong>оба</strong>{" "}
              исходных уравнения. Если оба равенства верны — решение правильное.
            </p>

            <div className="math-example">
              <span className="step">
                <span className="step-label">Проверка для:</span>{" "}
                {`{ y = x + 3`}
              </span>
              <span className="step">
                <span className="step-label"></span>{" "}
                {`                   { 2x + y = 9`}
              </span>
              <span className="step">
                <span className="step-label">Найдено:</span> x = 2, y = 5
              </span>
              <br />
              <span className="step">
                <span className="step-label">Уравнение (1):</span> 5 = 2 + 3 → 5
                = 5 <span className="result">✓</span>
              </span>
              <span className="step">
                <span className="step-label">Уравнение (2):</span> 2·2 + 5 = 9 →
                4 + 5 = 9 → 9 = 9 <span className="result">✓</span>
              </span>
              <span className="step">
                <span className="step-label">Вывод:</span> Ответ верный!
              </span>
            </div>

            <div className="tips-box">
              <strong>⚠️ Если проверка не прошла:</strong>
              <br />
              • Пересчитай шаги, начиная с подстановки.
              <br />
              • Проверь знаки при раскрытии скобок.
              <br />
              • Убедись, что подставлял в правильные уравнения.
              <br />• Если ответ дробный — проверь, не округлил ли ты раньше
              времени.
            </div>
          </div>
        </div>

        {/* ===== СРАВНЕНИЕ МЕТОДОВ ===== */}
        <div className="method-card">
          <div className="method-header">
            <div
              className="method-icon"
              style={{ background: "var(--ios-indigo)" }}
            >
              ⚡
            </div>
            <div>
              <div className="method-title">Какой метод выбрать?</div>
              <div className="method-subtitle">Сравнительная таблица</div>
            </div>
          </div>
          <div className="method-content">
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                fontSize: "14px",
              }}
            >
              <thead>
                <tr style={{ borderBottom: "1px solid var(--border)" }}>
                  <th
                    style={{
                      textAlign: "left",
                      padding: "8px 0",
                      color: "var(--text-primary)",
                    }}
                  >
                    Метод
                  </th>
                  <th
                    style={{
                      textAlign: "left",
                      padding: "8px 0",
                      color: "var(--text-primary)",
                    }}
                  >
                    Когда лучше
                  </th>
                  <th
                    style={{
                      textAlign: "left",
                      padding: "8px 0",
                      color: "var(--text-primary)",
                    }}
                  >
                    Сложность
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: "1px solid var(--border)" }}>
                  <td style={{ padding: "8px 0" }}>🔄 Подстановка</td>
                  <td style={{ padding: "8px 0" }}>
                    Когда y или x уже выражен
                  </td>
                  <td style={{ padding: "8px 0" }}>⭐ Легко</td>
                </tr>
                <tr style={{ borderBottom: "1px solid var(--border)" }}>
                  <td style={{ padding: "8px 0" }}>➕ Сложение</td>
                  <td style={{ padding: "8px 0" }}>
                    Когда коэффициенты противоположны
                  </td>
                  <td style={{ padding: "8px 0" }}>⭐⭐ Средне</td>
                </tr>
                <tr style={{ borderBottom: "1px solid var(--border)" }}>
                  <td style={{ padding: "8px 0" }}>➖ Вычитание</td>
                  <td style={{ padding: "8px 0" }}>
                    Когда коэффициенты одинаковы
                  </td>
                  <td style={{ padding: "8px 0" }}>⭐⭐ Средне</td>
                </tr>
                <tr>
                  <td style={{ padding: "8px 0" }}>📈 Графический</td>
                  <td style={{ padding: "8px 0" }}>Для проверки и понимания</td>
                  <td style={{ padding: "8px 0" }}>
                    ⭐⭐⭐ Требует аккуратности
                  </td>
                </tr>
              </tbody>
            </table>

            <div className="tips-box" style={{ marginTop: 16 }}>
              <strong>💡 Совет:</strong> На экзамене или контрольной сначала
              посмотри на систему 10 секунд и выбери самый быстрый метод.
              Экономия времени = меньше ошибок!
            </div>
          </div>
        </div>

        {/* ===== ЧАСТЫЕ ОШИБКИ ===== */}
        <div className="method-card">
          <div className="method-header">
            <div
              className="method-icon"
              style={{ background: "var(--ios-red)" }}
            >
              ⚠️
            </div>
            <div>
              <div className="method-title">
                Типичные ошибки и как их избежать
              </div>
              <div className="method-subtitle">Чеклист перед сдачей</div>
            </div>
          </div>
          <div className="method-content">
            <ol style={{ paddingLeft: 20 }}>
              <li>
                <strong>Знаки при раскрытии скобок</strong>
                <br />
                <code className="mono">2x - (x + 3) = 2x - x - 3</code> (минус
                меняет все знаки внутри!)
              </li>
              <li>
                <strong>Подстановка не в то уравнение</strong>
                <br />
                Выражаешь из (1), подставляй в (2), а не обратно в (1).
              </li>
              <li>
                <strong>Неполный ответ</strong>
                <br />
                Нашёл x? Не забудь найти y! Ответ всегда пара{" "}
                <code className="mono">(x; y)</code>.
              </li>
              <li>
                <strong>Дроби и десятичные</strong>
                <br />
                Не округляй промежуточные вычисления. Работай с дробями до
                конца.
              </li>
              <li>
                <strong>Пропущенная проверка</strong>
                <br />
                Всегда подставляй ответ в оба уравнения. Это 10 секунд, но
                спасает от глупых ошибок.
              </li>
              <li>
                <strong>Путаница в методах</strong>
                <br />
                Сложение — когда коэффициенты <strong>противоположны</strong>.
                <br />
                Вычитание — когда коэффициенты <strong>одинаковы</strong>.
              </li>
            </ol>

            <div
              className="tips-box"
              style={{
                background: "rgba(48,209,88,0.08)",
                borderColor: "rgba(48,209,88,0.2)",
                marginTop: 16,
              }}
            >
              <strong>✅ Финальный чеклист:</strong>
              <br />
              ☑ Выбрал подходящий метод?
              <br />
              ☑ Правильно раскрыл скобки?
              <br />
              ☑ Нашёл обе переменные?
              <br />
              ☑ Проверил подстановкой в оба уравнения?
              <br />☑ Записал ответ в виде <code className="mono">(x; y)</code>?
            </div>
          </div>
        </div>

        {/* ===== ПРАКТИЧЕСКИЕ СОВЕТЫ ===== */}
        <div className="method-card">
          <div className="method-header">
            <div
              className="method-icon"
              style={{ background: "var(--ios-teal)" }}
            >
              🎯
            </div>
            <div>
              <div className="method-title">Советы для успешного решения</div>
              <div className="method-subtitle">От практики к мастерству</div>
            </div>
          </div>
          <div className="method-content">
            <h3>📌 Перед началом:</h3>
            <ul style={{ paddingLeft: 20, marginBottom: 12 }}>
              <li>Внимательно прочитай оба уравнения.</li>
              <li>Определи, какой метод будет самым быстрым.</li>
              <li>Подготовь черновик — записывай каждый шаг.</li>
            </ul>

            <h3>📌 В процессе:</h3>
            <ul style={{ paddingLeft: 20, marginBottom: 12 }}>
              <li>Не торопись. Лучше медленно, но верно.</li>
              <li>Проверяй знаки на каждом шаге.</li>
              <li>Если застрял — попробуй другой метод.</li>
            </ul>

            <h3>📌 После решения:</h3>
            <ul style={{ paddingLeft: 20 }}>
              <li>Обязательно сделай проверку.</li>
              <li>
                Запиши ответ чётко: <code className="mono">(x; y)</code>.
              </li>
              <li>
                Если ответ дробный — оставь в виде дроби, если не требуется
                десятичная.
              </li>
            </ul>

            <div className="tips-box" style={{ marginTop: 16 }}>
              <strong>🏆 Главный секрет:</strong> Регулярная практика. Решай по
              5–10 систем в день, и через неделю ты будешь щёлкать их как
              орешки!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
