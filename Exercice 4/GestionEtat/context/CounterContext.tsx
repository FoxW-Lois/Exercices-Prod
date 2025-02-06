import { createContext, useState, useContext } from 'react';

const CounterContext = createContext({ count: 0, setCount: (value: number) => {} });

export function CounterProvider({ children }: { children: React.ReactNode }) {
	const [count, setCount] = useState(0);
	return <CounterContext.Provider value={{ count, setCount }}>{children}</CounterContext.Provider>;
}
export function useCounter() {
	return useContext(CounterContext);
}
