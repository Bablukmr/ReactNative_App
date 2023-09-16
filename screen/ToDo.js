import React, { useState, useEffect } from 'react';
import { View, Text, Modal, SafeAreaView, ActivityIndicator, FlatList, Button } from 'react-native';
import { auth, db } from "../firebase";
import { collection, addDoc, query, where, getDocs, deleteDoc, doc, setDoc } from "firebase/firestore"; 
import { sendEmailVerification } from 'firebase/auth';
import AddToDoModal from '../components/AddToDoModal';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

// Import your AppStyles here
import AppStyles from "../styles/TodoStyle";
import InlineTextButton from "../components/inlineTextButton";

export default function ToDo({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [toDos, setToDos] = useState([]);

  useEffect(() => {
    loadToDoList();
  }, []);

  const loadToDoList = async () => {
    const q = query(collection(db, "todos"), where("userId", "==", auth.currentUser.uid));

    try {
      const querySnapshot = await getDocs(q);
      const toDosData = [];
      querySnapshot.forEach((doc) => {
        let toDo = doc.data();
        toDo.id = doc.id;
        toDosData.push(toDo);
      });

      setToDos(toDosData);
    } catch (error) {
      console.error('Error loading ToDo list:', error);
    } finally {
      setIsLoading(false);
      setIsRefreshing(false);
    }
  };

  const checkToDoItem = async (item, isChecked) => {
    const toDoRef = doc(db, 'todos', item.id);
    try {
      await setDoc(toDoRef, { completed: isChecked }, { merge: true });
    } catch (error) {
      console.error('Error updating ToDo item:', error);
    }
  };

  const deleteToDo = async (toDoId) => {
    try {
      await deleteDoc(doc(db, "todos", toDoId));
      const updatedToDos = toDos.filter((item) => item.id !== toDoId);
      setToDos(updatedToDos);
    } catch (error) {
      console.error('Error deleting ToDo item:', error);
    }
  };

  const renderToDoItem = ({ item }) => {
    return (
      <View style={[AppStyles.rowContainer, AppStyles.rightMargin, AppStyles.leftMargin]}>
        <View style={AppStyles.fillSpace}>
          <BouncyCheckbox
            isChecked={item.completed}
            size={25}
            fillColor="#258ea6"
            unfillColor="#FFFFFF"
            text={item.text}
            iconStyle={{ borderColor: "#258ea6" }}
            onPress={(isChecked) => { checkToDoItem(item, isChecked)}}
          />
        </View>
        <InlineTextButton text="Delete" color="#258ea6" onPress={() => deleteToDo(item.id)} />
      </View>
    );
  };

  const showToDoList = () => {
    return (
      <FlatList
        data={toDos}
        refreshing={isRefreshing}
        onRefresh={() => {
          loadToDoList();
          setIsRefreshing(true);
        }}
        renderItem={renderToDoItem}
        keyExtractor={item => item.id} />
    )
  };

  const showContent = () => {
    return (
      <View>
        {isLoading ? <ActivityIndicator size="large" /> : showToDoList() }
        <Button 
          title="Add ToDo" 
          onPress={() => setModalVisible(true)} 
          color="#fb4d3d" />
      </View>
    );
  };

  const showSendVerificationEmail = () => {
    return (
      <View>
        <Text>Please verify your email to use ToDo</Text>
        <Button title="Send Verification Email" onPress={() => sendEmailVerification(auth.currentUser)} />
      </View>
    );
  };

  const addToDo = async (todo) => {
    const toDoToSave = {
      text: todo,
      completed: false,
      userId: auth.currentUser.uid,
    };
    try {
      const docRef = await addDoc(collection(db, "todos"), toDoToSave);
      toDoToSave.id = docRef.id;

      const updatedToDos = [...toDos];
      updatedToDos.push(toDoToSave);

      setToDos(updatedToDos);
    } catch (error) {
      console.error('Error adding ToDo item:', error);
    }
  };
  
  return (
    <SafeAreaView>
      <View style={[AppStyles.rowContainer, AppStyles.rightAligned, AppStyles.rightMargin, AppStyles.topMargin]}>
        <InlineTextButton text="Manage Account" color="#258ea6" onPress={() => navigation.navigate("ManageAccount")}/>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        {/* Include your AddToDoModal component here */}
        <AddToDoModal 
          onClose={() => setModalVisible(false)}
          addToDo={addToDo} />
      </Modal>
      <Text style={AppStyles.header}>ToDo</Text>
      {auth.currentUser.emailVerified ? showContent() : showSendVerificationEmail()}
    </SafeAreaView>
  )
}
