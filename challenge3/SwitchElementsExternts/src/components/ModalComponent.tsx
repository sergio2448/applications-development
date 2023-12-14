import { StyleSheet, Modal, Button } from 'react-native';
import React, { useState } from 'react';

const ModalComponent = (props) => {
  const { id, items, setItems, modalVisible, setModalVisible } = props;

  const handleModalClose = () => {
    const tasksFiltered = items.filter((task) => task.id === id);
    setItems(tasksFiltered);
    setModalVisible(false);
  };
  return (
    <Modal visible={modalVisible} onRequestClose={handleModalClose}>
      <Button>Eliminar</Button>
    </Modal>
  );
};

export default ModalComponent;

const styles = StyleSheet.create({});
