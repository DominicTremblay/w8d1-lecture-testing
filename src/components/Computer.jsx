export default function Computer({ computorCheating, toggleCheating }) {

console.log(toggleCheating)

  return (
    <section className="computer">
      <span
        role="img"
        className={computorCheating ? 'cheating' : ''}
        aria-label="robot"
        onClick={toggleCheating}
        data-testid="robot"
      >
        🤖
      </span>
      <div>
        <h1>EXTERRMINATE !</h1>
        <div className="choices">
          <button>
            <span role="img" aria-label="moai">
              ❔
            </span>
          </button>
          <button>
            <span role="img" aria-label="axe">
              ❔
            </span>
          </button>
          <button>
            <span role="img" aria-label="tree">
              ❔
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
