```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This will cause an infinite loop because the state is updated inside useEffect without dependency array
    setCount(count + 1);
  }, []);

  return <div>Count: {count}</div>;
}
```