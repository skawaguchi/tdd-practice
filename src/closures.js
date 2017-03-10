export const basicClosure = (outside) => {
    return (inside) => {
        return outside + inside;
    }
};