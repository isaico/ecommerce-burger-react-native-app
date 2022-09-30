import { StyleSheet } from 'react-native';

import { colors } from '../../constants/colors';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        backgroundColor: colors.white,
        marginBottom: 10,
        shadowColor: colors.black,
        shadowOpacity: 0.5,
        shadowOffset: { width: 2, height: 2 },
        shadowRadius: 6,
        elevation: 3,
        
      },
      header: {
        fontSize: 16,
        borderBottomWidth: 1,
        borderBottomColor:colors.primary,
        fontFamily: 'Lato-Bold',
        paddingBottom:5,
      },
      containerDetail: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
       
      },
      detail: {  
        fontSize:14,
        fontFamily:"Lato-Bold"
      },
      info: {
        width: 250,
        flexDirection: 'row',
      },
    textDetail: {
        fontSize: 14,
        fontFamily: 'Lato-Bold',
        padding: 5,
        color:colors.primary
    },
    textDetailBlack:{
      color:colors.text,
      fontFamily:"Lato-Regular"
    }
});
