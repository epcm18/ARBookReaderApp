import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import BookCard from '../../components/BookCard';
import Books from '../../components/Books/Books';
import { Linking } from 'react-native';

const FavouritesScreen = () => {
  const navigation = useNavigation();

  const handleRemoveFromWishlist = bookId => {
    // Remove the book from the wishlist based on its ID
    const updatedWishlist = wishlist.filter(book => book.id !== bookId);
    setWishlist(updatedWishlist);
  };

  // Render each book item in the wishlist
  const renderItem = ({item}) => (
    <BookCard
      book={item}
      showRemoveButton={true} // Pass true to show the remove button
      onRemovePress={() => handleRemoveFromWishlist(item.id)}
    />
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.goBackButton}
        onPressIn={() => navigation.goBack()}>
        {/* <FontAwesomeIcon icon={faArrowLeft} size={20} color="black" /> */}
      </TouchableOpacity>

      <Text style={styles.header}>Wishlist</Text>
      <Books />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'white',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  bookItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  bookImage: {
    width: 80,
    height: 120,
    borderRadius: 8,
  },
  bookDetails: {
    marginLeft: 16,
    flex: 1,
  },
  bookTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  bookCategory: {
    fontSize: 16,
  },
  bookAuthor: {
    fontSize: 16,
  },
  bookLanguage: {
    fontSize: 16,
  },
  removeButton: {
    backgroundColor: 'red',
    paddingVertical: 8,
    paddingHorizontal: 6,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  removeButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default FavouritesScreen;