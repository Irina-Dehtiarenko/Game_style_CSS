// import logo from "./logo.svg";
import "./App.css";
import User from "./User";
import Key from "./Key";
import Email from "./Email";
import Submit from "./Sumbit";
import Feather from "./Feather";
import Registration from "./Registration";

function App() {
  return (
    <div id="body">
      <section className="introduce">
        <article className="container invitation">
          <p>
            Hello, probably all of us have dreamed of being able to fly, be
            super heroes, turn into super saiyans and have powers. In real life,
            unfortunately, this is impossible to do. But dreams can come true
            here. Become the strongest of the strongest, have fun, engage in fun
            game tasks, and communicate with interesting players. Register and
            become the strongest!!!
          </p>
        </article>
        <article className="container">
          <div className="header update">
            <Feather />
            <h2>Last update</h2>
          </div>
          <p>
            Updated mystery boxes and their drop chance. The amount of items
            dropped will now scale with character level. Removed fish, meat and
            firewood from drops. Increased drop rates for all non-exclusive
            items (eg Goku's Armor, Bardock's Armor, Magic Wand).
          </p>
        </article>
      </section>
      <form action="/register" className="container">
        <div className="header update">
          <Registration />
          <h2>Create your account:</h2>
        </div>
        <label htmlFor="login">Xumm Wallet Address:</label>

        <div className="container-input">
          <User />
          <input type="text" id="login" name="login" />
        </div>

        <label htmlFor="password">Password:</label>

        <div className="container-input">
          <Key />
          <input type="password" id="password" name="password" />
        </div>

        <label htmlFor="confirm">Confirm password:</label>
        <div className="container-input">
          <Key />
          <input type="password" id="confirm" />
        </div>

        <label htmlFor="email">Email:</label>

        <div className="container-input">
          <Email />
          <input type="email" name="email" id="email" />
        </div>

        {/* <label htmlFor="character">Choose your character</label>
              <select name="character" id="character" value={form.character}
                  onChange={e => updateForm('character', e.target.value)}
              >
                  <option value=""></option>
                  <option value="knight">Knight</option>
                  <option value="wizard">Wizard</option>
                  <option value="viking">Viking</option>
                  <option value="samurai">Samurai</option>
              </select> */}

        <button>
          <Submit /> Confirm
        </button>
      </form>
    </div>
  );
}

export default App;
