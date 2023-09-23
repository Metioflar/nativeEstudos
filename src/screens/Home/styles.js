import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#18181B',
        padding: 12
    },
    title: {
        paddingTop: 40,
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold'
    },
    input: {
        padding: 16,
        marginTop: 12,
        borderRadius: 4,
        backgroundColor: '#3F3F46',
        height: 48,
        color: '#fff',
        flex: 1,
    },
    inputContainer: {
        gap: 16,
        flexDirection: "row"
    },
    buttonAdd: {
        marginTop: 12,
        borderRadius: 30,
        width: 30,
        // backgroundColor: '#b30000',
        alignItems: "center",
        justifyContent: "center",
    },
    textButton: {
        color: "#fff"
    },
    list:{
        flexDirection: 'column',
        gap:12,
        marginTop: 24,
    },
    listItem:{
        marginTop: 20,
        flexDirection: 'row',
        borderBottomColor: '#fff',
        borderBottomWidth: 1,
        paddingBottom: 6,
        alignItems: 'center',
        gap: 20
   }
    ,
    listItemText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        flexDirection: 'row',
        alignItems: 'center',
    }
})