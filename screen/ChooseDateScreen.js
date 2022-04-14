import React from "react";
import { Center, Text, ScrollView } from "native-base";
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import { LocaleConfig } from 'react-native-calendars';

LocaleConfig.locales['fr'] = {
    monthNames: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
    monthNamesShort: ['Janv.', 'Févr.', 'Mars', 'Avril', 'Mai', 'Juin', 'Juil.', 'Août', 'Sept.', 'Oct.', 'Nov.', 'Déc.'],
    dayNames: ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
    dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    today: 'Aujourd\'hui'
};
LocaleConfig.defaultLocale = 'fr';

const ChooseDateScreen = ({ navigation }) => {
    return (
        <Calendar

            // Initially visible month. Default = now
            current={'2022-04-14'}
            // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
            minDate={'2022-04-14'}
            // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
            maxDate={'2022-05-30'}
            // Handler which gets executed on day press. Default = undefined
            onDayPress={day => {
                console.log('selected day', day);
            }}
            // Handler which gets executed on day long press. Default = undefined
            onDayLongPress={day => {
                console.log('selected day', day);
            }}
            pagingEnabled={true}
            // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
            monthFormat={'yyyy MM'}
            // Handler which gets executed when visible month changes in calendar. Default = undefined
            onMonthChange={month => {
                console.log('month changed', month);
            }}
            // Hide month navigation arrows. Default = false
            hideArrows={false}
            // Enable the option to swipe between months. Default = false
            enableSwipeMonths={true}

            markedDates={{
                '2022-04-16': { disabled: true, disableTouchEvent: true },
                '2022-05-02': { disabled: true, disableTouchEvent: true },
                '2022-04-20': { disabled: true, disableTouchEvent: true },
                '2022-04-21': { disabled: true, disableTouchEvent: true }
            }}

            style={{ height: 300, width: "100%", justifyContent: "center" }}
            theme={{
                backgroundColor: "#ffffff",
                calendarBackground: "#ffffff",
                todayTextColor: "#f9595f",
                dayTextColor: "#F9595F",
                textDisabledColor: "#989898",
                monthTextColor: "#f9595f",
                arrowColor: "#F9595F",
                textDayFontWeight: "300",
                textMonthFontWeight: "bold",
                textDayHeaderFontWeight: "500",
                textDayFontSize: 16,
                textMonthFontSize: 20,
                selectedDayBackgroundColor: "#f9595f",
                selectedDayTextColor: "#f9595f",
                textDayHeaderFontSize: 14
            }}
        />
    )
}

export default ChooseDateScreen;