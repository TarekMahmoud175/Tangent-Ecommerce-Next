const debounce = <T extends (...args: any[]) => void>(
  func: T,
  wait: number
) => {
  let timerId: NodeJS.Timeout | undefined;

  return (...args: Parameters<T>) => {
    if (timerId) clearTimeout(timerId);
    timerId = setTimeout(() => {
      func(...args);
    }, wait);
  };
};
export { debounce }
