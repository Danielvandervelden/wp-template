export function debounce<T extends (...args: any[]) => void>(
    func: T,
    delay: number
): (...args: Parameters<T>) => void {
    let timeoutId: number | undefined;

    return function (...args: Parameters<T>) {
        clearTimeout(timeoutId);
        timeoutId = window.setTimeout(() => func(...args), delay);
    };
}
