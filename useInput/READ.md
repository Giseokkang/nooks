# Usage

```js
function App() {
  const name = useInput("Mr", 10);
  return (
    <div className="App">
      <input placeholder="Name" {...name} />
    </div>
  );
}
```
