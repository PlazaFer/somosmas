const findId = (array,id) => {
    const findId = array.find((elemento) => elemento.id === Number(id));
    return findId;
}
export default findId