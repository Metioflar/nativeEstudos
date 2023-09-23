import { Text, View, TextInput, TouchableOpacity } from "react-native"
import { styles } from "./styles"
import { Ionicons } from "@expo/vector-icons"

export function HomeScreen() {
    const toDoList =[
        {name:"PHP"},
        {name:"java"},
        {name:"Javascript"},
        {name:"Python"}
    ]
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Tarefas</Text>

      <View style={styles.inputContainer}>
        <TextInput placeholder="Nome da tarefa" placeholderTextColor="#71717A" style={styles.input} />
        <TouchableOpacity style={styles.buttonAdd}>
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