# Usage

```js
function App() {
  const { currentItem, changeItem } = useTabs(0, content);
  return (
    <div className="App">
      {content.map((item, index) => (
        <button onClick={() => changeItem(index)}>content{index}</button>
      ))}
      <span>{currentItem.content}</span>
    </div>
  );
}
```
