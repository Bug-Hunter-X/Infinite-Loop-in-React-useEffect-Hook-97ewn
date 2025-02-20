```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correctly using dependency array to avoid infinite loop
    setCount(count + 1);
  }, [count]); // Add count to the dependency array

  return <div>Count: {count}</div>;
}
```