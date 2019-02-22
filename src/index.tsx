import { h, app } from "hyperapp";

interface Actions {
  increment: () => (state: State) => void;
  decrement: () => (state: State) => void;
}

interface State {
  count: number;
}

const state: State = {
  count: 0,
};

const actions: Actions = {
  increment: () => (state: State) => ({ count: state.count + 1 }),
  decrement: () => (state: State) => ({ count: state.count - 1 }),
};

const view = (state: State, actions: Actions) => (
  <div>
    <h1>{state.count}</h1>
    <button onclick={actions.decrement}>-</button>
    <button onclick={actions.increment}>+</button>
  </div>
);

app(state, actions, view, document.body);
