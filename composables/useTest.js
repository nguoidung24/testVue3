// It will be available as useFoo() (camelCase of file name without extension)
export default {
    test1() {
        return useState('test1', () => "test1")
    },
    test2() {
        return useState('test2', () => "test2")
    }

}