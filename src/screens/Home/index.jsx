import { Text, View, TextInput, TouchableOpacity } from "react-native"
import { styles } from "./styles"
import { Ionicons } from "@expo/vector-icons"
import { useState } from "react"

export function HomeScreen() {
    const [toDoValue, setToDoValue] =useState("")
    const [toDoList, setToDoList] = useState([
        {name:"PHP"},
        {name:"java"},
        {name:"Javascript"},
        {name:"Python"}
    ])
    function addItem(){
      setToDoList((prev) => {
        return [...prev, {name: toDoValue}]
      })
    }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Tarefas</Text>

      <View style={styles.inputContainer}>
        <TextInput value={toDoValue} onChangeText={(text)=> setToDoValue(text)} placeholder="Nome da tarefa" placeholderTextColor="#71717A" style={styles.input} />
        <TouchableOpacity style={styles.buttonAdd}> onPress={() =>{
          addItem()
        }}
            <Ionicons name='add-circle-outline' size={32} color='#fff'/>
        </TouchableOpacity>
      </View>
      <View style={styles.list}>
        {toDoList.map(item =>(
            <View key={item.name} style={styles.listItem}>
              <Text style={styles.listItemText}>{item.name} </Text>
            </View>
        ))}
       
      </View>  
    </View>
  )
}