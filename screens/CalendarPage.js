import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

export default function CalendarPage(){
    return(
        
        <LinearGradient colors ={['#67E2EA','#0CDDEB', ]} style = {styles.background}>
          <Calendar
      horizontal={true}
      pastScrollRange={50}
      futureScrollRange={50}
      pagingEnabled={true}
      current= {date}
      minDate={"1500-05-10"}
      maxDate={"2200-12-30"}
      onDayPress={(day) => {
       setSelected(day.dateString);
       updateDate(day.dateString);
      }}
      monthFormat={"MMMM yyyy"}
      hideArrows={false}
      hideExtraDays={true}
      disableMonthChange={true}
      firstDay={1}
      hideDayNames={false}
      showWeekNumbers={false}
      onPressArrowLeft={(subtractMonth) => subtractMonth()}
      onPressArrowRight={(addMonth) => addMonth()}
      disableArrowLeft={false}
      disableArrowRight={false}
      disableAllTouchEventsForDisabledDays={true}
      enableSwipeMonths={false}
      style={{
        fontSize: 15,
        overflow: 'hidden',
        alignContent: 'stretch',
        flexWrap: 'nowrap',
        marginBottom: Dimensions.get('screen').height/20,
        borderRadius: 20,
        bottom: Dimensions.get('screen').height/50,
        justifyContent: 'flex-start',
        height: Dimensions.get('screen').height-401,
        width: Dimensions.get('screen').width-80,
        
      }}
      markedDates={{
        [selected]: {
          selected: true,
          disableTouchEvent: true,
          selectedColor: 'purple',
          selectedTextColor: 'white'
        }
      }}

      theme={{
        textInactiveColor: '#a68a9f',
        textSectionTitleDisabledColor: 'grey',
        textSectionTitleColor: '#319e8e',
        arrowColor: '#319e8e',
        dayHeader: {
          fontWeight: '600',
          color: '#48BFE3'
        }
        
    }}
    />
        </LinearGradient>
        
    )
}

const styles = StyleSheet.create({
    background: {
      flex: 1,
      width:'100%',
      height:'100%',
    //   alignItems: 'center',
    //   justifyContent: 'center',
    },
  });